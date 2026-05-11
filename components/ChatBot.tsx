'use client';

import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport, type UIMessage } from 'ai';
import { useEffect, useRef, useState } from 'react';

const SUGGESTIONS = [
  'What is a sound bath?',
  'Tell me about Floating Sound Baths',
  'How do I book a private session?',
  'Where is Bohemia based?',
];

const GREETING: UIMessage = {
  id: 'greeting',
  role: 'assistant',
  parts: [
    {
      type: 'text',
      text:
        "Welcome to Bohemia. I'm here if you'd like to know about Claire, the sessions she offers, or how to book. What would you like to ask?",
    },
  ],
};

/**
 * Extract plain text from an AI SDK v6 UIMessage. Messages are made up of
 * `parts` (text, reasoning, tool calls, etc.) — for our chatbot we only ever
 * render text parts, so we concatenate them.
 */
function getMessageText(message: UIMessage): string {
  return message.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map((p) => p.text)
    .join('');
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
    messages: [GREETING],
  });

  const isStreaming = status === 'submitted' || status === 'streaming';

  // Auto-scroll to the bottom whenever messages or streaming state change.
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isStreaming]);

  // Focus the input when the panel opens.
  useEffect(() => {
    if (open) {
      // Small delay so the open transition completes before focus.
      const t = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [open]);

  function submit(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isStreaming) return;
    sendMessage({ text: trimmed });
    setInput('');
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    submit(input);
  }

  return (
    <>
      {/* Floating launcher bubble */}
      <button
        type="button"
        className={`chat-launcher${open ? ' is-open' : ''}`}
        aria-label={open ? 'Close Bohemia assistant' : 'Open Bohemia assistant'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat panel */}
      <div
        className={`chat-panel${open ? ' is-open' : ''}`}
        role="dialog"
        aria-label="Bohemia assistant"
        aria-hidden={!open}
      >
        <div className="chat-panel__head">
          <div>
            <p className="chat-panel__eyebrow">Bohemia · Assistant</p>
            <h3 className="chat-panel__title">Ask about a session</h3>
          </div>
          <button
            type="button"
            className="chat-panel__close"
            aria-label="Close"
            onClick={() => setOpen(false)}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="chat-panel__messages" ref={scrollRef}>
          {messages.map((m) => (
            <div
              key={m.id}
              className={`chat-msg chat-msg--${m.role === 'user' ? 'user' : 'bot'}`}
            >
              <div className="chat-msg__bubble">{getMessageText(m)}</div>
            </div>
          ))}

          {isStreaming && messages[messages.length - 1]?.role !== 'assistant' && (
            <div className="chat-msg chat-msg--bot">
              <div className="chat-msg__bubble chat-msg__bubble--typing">
                <span /><span /><span />
              </div>
            </div>
          )}

          {error && (
            <div className="chat-msg chat-msg--bot">
              <div className="chat-msg__bubble chat-msg__bubble--error">
                Something went wrong reaching the assistant. Please try again
                in a moment, or email{' '}
                <a href="mailto:hello@bohemia-wellness.co.uk">
                  hello@bohemia-wellness.co.uk
                </a>
                .
              </div>
            </div>
          )}
        </div>

        {/* Quick-tap suggestions, only visible before the visitor's first message. */}
        {messages.length <= 1 && !isStreaming && (
          <div className="chat-panel__suggestions">
            {SUGGESTIONS.map((s) => (
              <button
                key={s}
                type="button"
                className="chat-suggest"
                onClick={() => submit(s)}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        <form className="chat-panel__form" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about a session, prices, location..."
            aria-label="Type your question"
            disabled={isStreaming}
          />
          <button
            type="submit"
            className="chat-panel__send"
            aria-label="Send"
            disabled={isStreaming || !input.trim()}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        <p className="chat-panel__foot">
          Powered by Claude · Not a replacement for medical advice
        </p>
      </div>
    </>
  );
}
