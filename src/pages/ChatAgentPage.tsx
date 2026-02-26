import { useEffect, useState, useRef, useCallback } from 'react'
import { useTheme } from '../context/ThemeContext'

interface SeatOption {
  section: string
  price: string
  note: string
}

interface Response {
  patterns: string[]
  reply: string
  card?: { date: string; matchup: string; seats: SeatOption[] }
  bullets?: string[]
  followup?: string
}

interface Message {
  id: number
  role: 'user' | 'assistant'
  text: string
  card?: Response['card']
  bullets?: string[]
  followup?: string
  time: string
}

const RESPONSES: Response[] = [
  {
    patterns: ['next home game', 'next game', 'upcoming'],
    reply: 'Great question! The next home game is <strong>Timberwolves vs. Lakers</strong> on Friday, Feb 21 at Target Center. Tip-off is at 7:00 PM CT.',
    card: {
      date: 'Fri, Feb 21 · 7:00 PM',
      matchup: 'Wolves vs Lakers',
      seats: [
        { section: 'Lower Level · Sec 112', price: '$145', note: 'Great sightlines' },
        { section: 'Club Level · Sec 230', price: '$95', note: 'Includes lounge access' },
        { section: 'Upper Level · Sec 329', price: '$35', note: 'Best value' },
      ],
    },
    followup: 'Would you like to explore any of these sections, or do you have a budget in mind?',
  },
  {
    patterns: ['group', '4 seats', 'seats together', 'family'],
    reply: "I'd love to help you find group seating! For 4 seats together, here are your best options for upcoming games:",
    card: {
      date: 'Multiple dates available',
      matchup: 'Group Packages',
      seats: [
        { section: 'Sec 108 · Row 14', price: '$125 ea', note: '4 together, aisle access' },
        { section: 'Sec 222 · Row 3', price: '$78 ea', note: '4 together, center court' },
        { section: 'Sec 334 · Row 8', price: '$42 ea', note: '6 available together' },
      ],
    },
    followup: 'Groups of 10+ also get a 15% discount. Want me to look into that?',
  },
  {
    patterns: ['best value', 'cheap', 'affordable', 'budget'],
    reply: 'Here are the best value options for upcoming home games. These seats offer a great experience without breaking the bank:',
    card: {
      date: 'Best Value Picks',
      matchup: 'Wolves Home Games',
      seats: [
        { section: 'Upper · Sec 333', price: 'From $22', note: 'Weekday games' },
        { section: 'Upper · Sec 301', price: 'From $29', note: 'Weekend games' },
        { section: 'Mid · Sec 224', price: 'From $55', note: 'Excellent view' },
      ],
    },
    followup: "I can also check for any available promotional codes. Want me to look?",
  },
  {
    patterns: ['season ticket', 'season pass', 'package', 'membership'],
    reply: "Season ticket packages are a fantastic way to experience every game! Here's a quick overview of current options:",
    bullets: [
      '<strong>Full Season (41 games)</strong> — Starting at $820/seat. Best per-game value.',
      '<strong>Half Season (20 games)</strong> — Starting at $460/seat. Flexible schedule options.',
      '<strong>Weekend Pack (15 games)</strong> — Starting at $375/seat. All Fri/Sat/Sun games.',
      '<strong>Mini Plan (10 games)</strong> — Starting at $280/seat. You pick the games.',
    ],
    followup: 'All plans include priority access to playoff tickets. Want details on a specific package?',
  },
]

const FALLBACKS = [
  "That's a great question! Let me look into that for you. In the meantime, I can help with finding specific seats, comparing prices across sections, or exploring ticket packages. What interests you most?",
  "I appreciate you asking! I can help with finding available tickets, comparing sections and pricing, group packages, or season ticket information. Which would you like to explore?",
  "Let me help you with that! Could you share a bit more detail? For example, are you looking for a specific game date, a price range, or a seating preference?",
]

const SUGGESTIONS = [
  'Find tickets for the next home game',
  'I need 4 seats together for a group',
  'What are the best value seats?',
  'Season ticket package options',
]

let msgId = 0

function timeNow() {
  return new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
}

function BotAvatar() {
  return (
    <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, background: 'var(--brand-core)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    </div>
  )
}

function HumanAvatar() {
  return (
    <div style={{ width: 32, height: 32, borderRadius: '50%', flexShrink: 0, background: 'var(--neutral-300)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--neutral-700)"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </div>
  )
}

export default function ChatAgentPage() {
  const { setTheme, setMode } = useTheme()
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [typing, setTyping] = useState(false)
  const [started, setStarted] = useState(false)
  const [fallbackIdx, setFallbackIdx] = useState(0)
  const chatMessagesRef = useRef<HTMLDivElement>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setTheme('wolves')
    setMode('dark')
  }, [setTheme, setMode])

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      if (chatMessagesRef.current) {
        chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
      }
    })
  }, [])

  useEffect(() => { scrollToBottom() }, [messages, typing, scrollToBottom])

  function findResponse(text: string): Response | null {
    const lower = text.toLowerCase()
    for (const r of RESPONSES) {
      for (const p of r.patterns) {
        if (lower.includes(p)) return r
      }
    }
    return null
  }

  function sendMessage(text?: string) {
    const txt = (text ?? inputText).trim()
    if (!txt) return
    if (!started) setStarted(true)

    const userMsg: Message = { id: ++msgId, role: 'user', text: txt, time: timeNow() }
    setMessages((prev) => [...prev, userMsg])
    setInputText('')
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
    setTyping(true)

    const match = findResponse(txt)
    setTimeout(() => {
      setTyping(false)
      if (match) {
        const assistantMsg: Message = {
          id: ++msgId,
          role: 'assistant',
          text: match.reply,
          card: match.card,
          bullets: match.bullets,
          followup: match.followup,
          time: timeNow(),
        }
        setMessages((prev) => [...prev, assistantMsg])
      } else {
        const assistantMsg: Message = {
          id: ++msgId,
          role: 'assistant',
          text: FALLBACKS[fallbackIdx % FALLBACKS.length],
          time: timeNow(),
        }
        setMessages((prev) => [...prev, assistantMsg])
        setFallbackIdx((i) => i + 1)
      }
    }, 1200 + Math.random() * 800)
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  function autoGrow(el: HTMLTextAreaElement) {
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: 'var(--bg-base)' }}>

      {/* Top Nav */}
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--spacing-150) var(--spacing-300)',
        background: 'var(--brand-dark, #0C233F)',
        borderBottom: 'var(--border-weight-100) solid var(--neutral-200)',
        flexShrink: 0,
        minHeight: 56,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-200)' }}>
          <div style={{ width: 36, height: 36, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </div>
          <div className="card-text-pair">
            <span className="display100" style={{ color: 'var(--inverted-1000, #fff)' }}>Minnesota Timberwolves</span>
            <span className="labelRegular20" style={{ color: 'var(--inverted-700, rgba(255,255,255,0.75))' }}>AI Ticket Agent</span>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-150)' }}>
          {['My Tickets', 'Schedule'].map((label) => (
            <a key={label} href="#" className="labelRegular30" style={{ color: 'var(--inverted-700, rgba(255,255,255,0.75))', textDecoration: 'none', cursor: 'pointer' }}>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* Chat Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minHeight: 0, background: 'var(--bg-base)' }}>
        <div
          ref={chatMessagesRef}
          style={{ flex: 1, overflowY: 'auto', padding: 'var(--spacing-300)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-200)' }}
        >
          <div style={{ width: '100%', maxWidth: 'var(--container-narrow)', marginLeft: 'auto', marginRight: 'auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-200)' }}>

            {/* Welcome state */}
            {!started && (
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', padding: 'var(--spacing-600) var(--spacing-300)',
                gap: 'var(--spacing-300)', flex: 1,
              }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--brand-core)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </div>
                <div className="card-text-pair text-center">
                  <h1 className="display300">How can I help with tickets?</h1>
                  <p className="bodyRegular30 text-secondary">I can help you find seats, compare pricing, explore group packages, and more.</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-150)', justifyContent: 'center', maxWidth: 600 }}>
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      className="labelRegular30"
                      onClick={() => sendMessage(s)}
                      style={{
                        background: 'var(--bg-surface)',
                        border: 'var(--border-weight-100) solid var(--border-default)',
                        borderRadius: 'var(--button-border-radius)',
                        padding: 'var(--spacing-100) var(--spacing-200)',
                        cursor: 'pointer',
                      }}
                    >{s}</button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  gap: 'var(--spacing-150)',
                  maxWidth: '85%',
                  alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                  flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                }}
              >
                {msg.role === 'user' ? <HumanAvatar /> : <BotAvatar />}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <div
                    className="bodyRegular30"
                    style={{
                      padding: 'var(--spacing-150) var(--spacing-200)',
                      borderRadius: 'var(--border-radius-200)',
                      ...(msg.role === 'user'
                        ? { background: 'var(--brand-core)', color: '#fff', borderBottomRightRadius: 'var(--border-radius-50)' }
                        : { background: 'var(--bg-surface)', borderBottomLeftRadius: 'var(--border-radius-50)' }),
                    }}
                    dangerouslySetInnerHTML={{ __html: msg.text }}
                  />
                  {/* Bullets */}
                  {msg.bullets && (
                    <ul style={{ marginTop: 'var(--spacing-150)', paddingLeft: 'var(--spacing-250)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-100)', background: 'var(--bg-surface)', padding: 'var(--spacing-150) var(--spacing-200) var(--spacing-150) var(--spacing-400)', borderRadius: 'var(--border-radius-100)' }}>
                      {msg.bullets.map((b, i) => (
                        <li key={i} className="bodyRegular30" dangerouslySetInnerHTML={{ __html: b }} />
                      ))}
                    </ul>
                  )}
                  {/* Game card */}
                  {msg.card && (
                    <div style={{ marginTop: 'var(--spacing-150)' }}>
                      <div className="card-closed" style={{ maxWidth: 360 }}>
                        <div className="card-closed-header">
                          <div className="card-text-pair">
                            <span className="labelBold30">{msg.card.matchup}</span>
                            <span className="labelRegular20 text-secondary">{msg.card.date}</span>
                          </div>
                        </div>
                        <div className="card-closed-body">
                          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-100)' }}>
                            {msg.card.seats.map((seat) => (
                              <div
                                key={seat.section}
                                onClick={() => sendMessage(`Tell me more about ${seat.section}`)}
                                style={{
                                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                  padding: 'var(--spacing-100) var(--spacing-150)',
                                  borderRadius: 'var(--border-radius-100)',
                                  border: 'var(--border-weight-100) solid var(--border-default)',
                                  cursor: 'pointer',
                                }}
                              >
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                  <span className="labelBold20">{seat.section}</span>
                                  <span className="labelRegular10 text-secondary">{seat.note}</span>
                                </div>
                                <span className="labelBold30" style={{ color: 'var(--brand-core)' }}>{seat.price}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Follow-up */}
                  {msg.followup && (
                    <div className="bodyRegular30" style={{ marginTop: 'var(--spacing-150)', background: 'var(--bg-surface)', padding: 'var(--spacing-150) var(--spacing-200)', borderRadius: 'var(--border-radius-100)' }}>
                      {msg.followup}
                    </div>
                  )}
                  <span className="labelRegular10 text-disabled" style={{ padding: '0 var(--spacing-50)', ...(msg.role === 'user' ? { textAlign: 'right' } : {}) }}>
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: 'flex', gap: 'var(--spacing-150)', alignSelf: 'flex-start' }}>
                <BotAvatar />
                <div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 4,
                    padding: 'var(--spacing-150) var(--spacing-200)',
                    background: 'var(--bg-surface)',
                    borderRadius: 'var(--border-radius-200)',
                    borderBottomLeftRadius: 'var(--border-radius-50)',
                    width: 'fit-content',
                  }}>
                    {[0, 0.2, 0.4].map((delay, i) => (
                      <div key={i} style={{
                        width: 6, height: 6, borderRadius: '50%', background: 'var(--neutral-500)',
                        animation: `typingBounce 1.4s ease-in-out ${delay}s infinite`,
                      }} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Input bar */}
        <div style={{
          flexShrink: 0,
          borderTop: 'var(--border-weight-100) solid var(--neutral-200)',
          background: 'var(--bg-base)',
          padding: 'var(--spacing-200) var(--spacing-300)',
        }}>
          <div style={{
            maxWidth: 'var(--container-narrow)',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'flex-end',
            gap: 'var(--spacing-150)',
            background: 'var(--bg-surface)',
            border: 'var(--border-weight-100) solid var(--border-default)',
            borderRadius: 'var(--border-radius-200)',
            padding: 'var(--spacing-100) var(--spacing-150)',
          }}>
            <textarea
              ref={textareaRef}
              className="chat-input"
              placeholder="Ask about tickets, seating, pricing..."
              rows={1}
              value={inputText}
              onChange={(e) => { setInputText(e.target.value); autoGrow(e.target) }}
              onKeyDown={handleKey}
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                padding: 'var(--spacing-100)',
                resize: 'none',
                minHeight: 24,
                maxHeight: 120,
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
                fontSize: 14,
                lineHeight: 1.5,
              }}
            />
            <button
              disabled={!inputText.trim() || typing}
              onClick={() => sendMessage()}
              style={{
                width: 36, height: 36, borderRadius: '50%',
                background: 'var(--brand-core)', border: 'none', cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
                opacity: inputText.trim() && !typing ? 1 : 0.4,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </div>
          <div style={{ textAlign: 'center', paddingTop: 'var(--spacing-100)', maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
            <span className="labelRegular10 text-disabled">AI assistant for ticket inquiries. Not a replacement for official customer service.</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes typingBounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  )
}
