import { anthropic } from '@ai-sdk/anthropic';
import {
  streamText,
  convertToModelMessages,
  type ModelMessage,
  type UIMessage,
} from 'ai';
import { BOHEMIA_SYSTEM_PROMPT } from '@/lib/chatbot-prompt';

// Allow streaming responses up to 30 seconds. Most replies finish in 2-5s.
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages: uiMessages }: { messages: UIMessage[] } = await req.json();

  // Bail early with a friendly error if the API key isn't configured —
  // saves visitors a confusing browser console error.
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response(
      JSON.stringify({
        error: 'The Bohemia assistant is not yet connected. Please add ANTHROPIC_API_KEY to .env.local — see HOW_TO_RUN.md.',
      }),
      { status: 503, headers: { 'Content-Type': 'application/json' } },
    );
  }

  const converted = await convertToModelMessages(uiMessages);

  // The system prompt rarely changes, so we mark it as cacheable. Anthropic
  // caches the system block for 5 minutes, dropping the cost of subsequent
  // requests within that window by ~90% on the cached portion.
  const messages: ModelMessage[] = [
    {
      role: 'system',
      content: BOHEMIA_SYSTEM_PROMPT,
      providerOptions: {
        anthropic: { cacheControl: { type: 'ephemeral' } },
      },
    },
    ...converted,
  ];

  const result = streamText({
    // claude-haiku-4-5 is fast (low latency for chat UX), inexpensive, and
    // more than capable for FAQ-style answers. Switch to claude-sonnet-4-6
    // if you want richer reasoning at ~5× the cost.
    model: anthropic('claude-haiku-4-5'),
    messages,
    // Light cap so a runaway answer can't spike costs.
    maxOutputTokens: 600,
    temperature: 0.7,
  });

  return result.toUIMessageStreamResponse();
}
