import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'

type StepId = 1 | 2 | 3 | 4

interface Team {
  name: string
  shortName: string
  logoUrl: string | null
}

interface ScheduleEntry {
  date: string
  type: 'featured-others' | 'featured-only' | 'no-featured' | 'sold-out' | 'coming-soon'
  price?: string
  additionalOffers?: number
  offersAvailable?: number
}

const SCHEDULE: ScheduleEntry[] = [
  { date: 'Thu, Jun 12 · 7:00 PM', type: 'featured-others', price: '$28+', additionalOffers: 4 },
  { date: 'Sat, Jun 21 · 6:00 PM', type: 'featured-only', price: '$45+' },
  { date: 'Fri, Jul 4 · 7:30 PM', type: 'no-featured', offersAvailable: 2 },
  { date: 'Sun, Jul 13 · 3:00 PM', type: 'sold-out' },
  { date: 'Sat, Aug 2 · 7:00 PM', type: 'coming-soon' },
]

const SECTIONS = [
  { name: 'Courtside', subtitle: 'Rows A–C · Section 100', price: 285 },
  { name: 'Lower Bowl', subtitle: 'Rows D–N · Sections 101–120', price: 95 },
  { name: 'Club Level', subtitle: 'Sections 201–215', price: 65 },
  { name: 'Upper Bowl', subtitle: 'Sections 301–320', price: 38 },
]

function LogoPlaceholder({ name, style }: { name: string; style?: React.CSSProperties }) {
  const ini = name.substring(0, 3).toUpperCase()
  return (
    <div style={{
      width: 48, height: 48, borderRadius: '50%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 700,
      color: 'white', background: 'var(--neutral-300)', flexShrink: 0,
      ...style,
    }}>{ini}</div>
  )
}

export default function TicketBuyingPage() {
  const { setTheme, setMode } = useTheme()
  const [step, setStep] = useState<StepId>(1)
  const [teams, setTeams] = useState<Team[]>([])
  const [selectedTeamIdx, setSelectedTeamIdx] = useState(0)
  const [selectedSection, setSelectedSection] = useState<string>('')
  const [selectedPrice, setSelectedPrice] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvv, setCvv] = useState('')

  useEffect(() => {
    setTheme('lynx')
    setMode('light')
  }, [setTheme, setMode])

  useEffect(() => {
    async function loadSchedule() {
      try {
        const q = encodeURIComponent(`*[_type == "opposingTeam" && defined(logo.asset)][0...5]{name, shortName, "logoUrl": logo.asset->url}`)
        const res = await fetch(`https://tqbbtja5.apicdn.sanity.io/v2024-01-01/data/query/production?query=${q}`)
        const { result = [] } = await res.json()
        if (result.length > 0) {
          setTeams(result)
          return
        }
      } catch (_) {}
      setTeams(SCHEDULE.map((_, i) => ({ name: `Opponent ${i + 1}`, shortName: 'OPP', logoUrl: null })))
    }
    loadSchedule()
  }, [])

  const subtotal = selectedPrice * quantity
  const fee = Math.round(subtotal * 0.1 * 100) / 100
  const total = (subtotal + fee).toFixed(2)
  const selectedTeam = teams[selectedTeamIdx % (teams.length || 1)]
  const selectedSched = SCHEDULE[selectedTeamIdx]

  function selectGame(idx: number) {
    setSelectedTeamIdx(idx)
    setSelectedSection('')
    setSelectedPrice(0)
    setQuantity(1)
    setStep(2)
  }

  function changeQty(delta: number) {
    setQuantity(Math.max(1, Math.min(8, quantity + delta)))
  }

  function formatCard(val: string) {
    return val.replace(/\D/g, '').substring(0, 16).replace(/(.{4})/g, '$1 ').trim()
  }

  function formatExpiry(val: string) {
    const v = val.replace(/\D/g, '').substring(0, 4)
    if (v.length >= 2) return v.substring(0, 2) + ' / ' + v.substring(2)
    return v
  }

  const responsivePad = 'var(--spacing-200)'

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-base)', color: 'var(--text-primary)' }}>

      {/* STEP 1 — Choose a Game */}
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-150)', padding: `var(--spacing-200) ${responsivePad}`, borderBottom: '1px solid var(--border-default)' }}>
            <span className="display400">Minnesota Lynx</span>
          </div>
          <div style={{ flex: 1, overflowY: 'auto', padding: responsivePad, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-content)' }}>
            <div>
              <p className="labelBold20 text-secondary mb-200">Upcoming Home Games</p>
              <div className="event-row-list">
                {teams.length === 0 ? (
                  <div style={{ padding: 'var(--spacing-400)', textAlign: 'center' }}>
                    <span className="labelRegular20 text-secondary">Loading schedule…</span>
                  </div>
                ) : SCHEDULE.map((sched, i) => {
                  const team = teams[i % teams.length]
                  const topTappable = sched.type === 'featured-only' || sched.type === 'featured-others'
                  return (
                    <div key={i} className="event-row">
                      <div
                        className={`event-row-top${topTappable ? ' surface-section' : ''}`}
                        onClick={topTappable ? () => selectGame(i) : undefined}
                        style={topTappable ? { cursor: 'pointer' } : undefined}
                      >
                        <div className={`list-row${topTappable ? '' : ' not-tappable'}`}>
                          <div className="leading leading-gap-sm">
                            {team.logoUrl
                              ? <img className="event-row-logo" src={team.logoUrl} alt={team.name} />
                              : <LogoPlaceholder name={team.shortName || team.name} />
                            }
                          </div>
                          <div className="list-row-content">
                            <div className="list-row-text-pair">
                              <span className="event-row-label">{team.name}</span>
                              <span className="event-row-sublabel text-secondary">{sched.date}</span>
                            </div>
                          </div>
                          {(sched.type === 'featured-only' || sched.type === 'featured-others') && (
                            <div className="trailing trailing-gap-lg">
                              <button className="btn btn-primary btn-100">{sched.price}</button>
                            </div>
                          )}
                          {sched.type === 'sold-out' && (
                            <div className="trailing trailing-gap-sm">
                              <span className="labelBold30 text-secondary">Sold Out</span>
                            </div>
                          )}
                          {sched.type === 'coming-soon' && (
                            <div className="trailing trailing-gap-sm">
                              <span className="labelBold20 text-interactive-tertiary event-row-coming-soon">On sale Jun 1</span>
                            </div>
                          )}
                        </div>
                      </div>
                      {sched.type === 'featured-others' && (
                        <div className="event-row-bottom surface-section" onClick={() => selectGame(i)} style={{ cursor: 'pointer' }}>
                          <div className="list-row">
                            <div className="list-row-content">
                              <div className="list-row-text-pair">
                                <span className="labelBold30 text-interactive-tertiary">{sched.additionalOffers} Additional Offers</span>
                              </div>
                            </div>
                            <div className="trailing trailing-gap-xs">
                              <span className="icon text-interactive-tertiary">arrow_drop_down</span>
                            </div>
                          </div>
                        </div>
                      )}
                      {sched.type === 'no-featured' && (
                        <div className="event-row-bottom surface-section" onClick={() => selectGame(i)} style={{ cursor: 'pointer' }}>
                          <div className="list-row">
                            <div className="list-row-content">
                              <div className="list-row-text-pair">
                                <span className="labelBold30 text-interactive-tertiary">{sched.offersAvailable} Offers Available</span>
                              </div>
                            </div>
                            <div className="trailing trailing-gap-xs">
                              <span className="icon text-interactive-tertiary">arrow_drop_down</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2 — Choose Tickets */}
      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-150)', padding: `var(--spacing-200) ${responsivePad}`, borderBottom: '1px solid var(--border-default)' }}>
            <button className="btn-circle btn-circle-300 btn-circle-neutral-tertiary" onClick={() => setStep(1)}>
              <span className="btn-icon material-symbols-rounded">arrow_back</span>
            </button>
            <span className="title50">Choose Tickets</span>
          </div>

          {/* Game summary */}
          <div style={{ padding: `var(--spacing-200) ${responsivePad} 0` }}>
            <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--border-radius-100)', padding: 'var(--spacing-150) var(--spacing-200)' }}>
              <div className="list-row">
                <div className="leading leading-gap-sm">
                  {selectedTeam?.logoUrl
                    ? <img style={{ width: 48, height: 48, objectFit: 'contain', flexShrink: 0 }} src={selectedTeam.logoUrl} alt={selectedTeam.name} />
                    : <LogoPlaceholder name={selectedTeam?.shortName || selectedTeam?.name || 'OPP'} />
                  }
                </div>
                <div className="list-row-content">
                  <div className="list-row-text-pair">
                    <span className="labelBold30">{selectedTeam?.name || '—'}</span>
                    <span className="labelRegular10 text-secondary">{selectedSched?.date || '—'}</span>
                  </div>
                </div>
                <div className="trailing trailing-gap-sm">
                  <div className="list-row-text-pair" style={{ textAlign: 'right' }}>
                    <span className="labelBold10 text-secondary">Target Center</span>
                    <span className="labelBold10 text-secondary">Minneapolis, MN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: responsivePad, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-content)' }}>

            {/* Section selectors */}
            <div>
              <p className="labelBold20 text-secondary mb-200">Select a Section</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-100)' }}>
                {SECTIONS.map((sec) => (
                  <div
                    key={sec.name}
                    className={`selector surface-washNeutral scale-700${selectedSection === sec.name ? ' is-selected' : ''}`}
                    onClick={() => { setSelectedSection(sec.name); setSelectedPrice(sec.price) }}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="list-row">
                      <div className="list-row-content">
                        <div className="list-row-text-pair">
                          <span className="labelBold30">{sec.name}</span>
                          <span className="labelRegular10 text-secondary">{sec.subtitle}</span>
                        </div>
                      </div>
                      <div className="trailing trailing-gap-sm">
                        <div className="list-row-text-pair" style={{ textAlign: 'right' }}>
                          <span className="labelBold30">${sec.price}</span>
                          <span className="labelRegular10 text-secondary">per seat</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="selector surface-washNeutral is-disabled">
                  <div className="list-row">
                    <div className="list-row-content">
                      <div className="list-row-text-pair">
                        <span className="labelBold30">Student Rush</span>
                        <span className="labelRegular10 text-secondary">Valid student ID required · Sold Out</span>
                      </div>
                    </div>
                    <div className="trailing trailing-gap-sm">
                      <div className="list-row-text-pair" style={{ textAlign: 'right' }}>
                        <span className="labelBold30">$20</span>
                        <span className="labelRegular10 text-secondary">per seat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quantity */}
            <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--border-radius-100)', padding: 'var(--spacing-150) var(--spacing-200)' }}>
              <div className="list-row">
                <div className="list-row-content">
                  <div className="list-row-text-pair">
                    <span className="labelBold30">Quantity</span>
                    <span className="labelRegular10 text-secondary">Max 8 per order</span>
                  </div>
                </div>
                <div className="trailing trailing-gap-md">
                  <div className="stepper">
                    <button className={`stepper-btn${quantity <= 1 ? ' disabled' : ''}`} onClick={() => changeQty(-1)}>
                      <span className="material-symbols-rounded">remove</span>
                    </button>
                    <span className="stepper-value">{quantity}</span>
                    <button className={`stepper-btn${quantity >= 8 ? ' disabled' : ''}`} onClick={() => changeQty(1)}>
                      <span className="material-symbols-rounded">add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: 'var(--spacing-800)' }} />
          </div>

          <div style={{
            position: 'sticky', bottom: 0, background: 'var(--bg-base)',
            borderTop: '1px solid var(--border-default)',
            padding: `var(--spacing-200) ${responsivePad} var(--spacing-300)`,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--spacing-300)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-25)' }}>
              <span className="labelBold20 text-secondary">Total</span>
              <span className="title50">
                {selectedSection
                  ? `$${subtotal}${quantity > 1 ? ` (${quantity} seats)` : ''}`
                  : 'Select a section'}
              </span>
            </div>
            <button
              className="btn btn-transactional btn-700"
              disabled={!selectedSection}
              style={!selectedSection ? { opacity: 0.4, cursor: 'not-allowed' } : undefined}
              onClick={() => setStep(3)}
            >
              Continue to Checkout
            </button>
          </div>
        </div>
      )}

      {/* STEP 3 — Checkout */}
      {step === 3 && (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-150)', padding: `var(--spacing-200) ${responsivePad}`, borderBottom: '1px solid var(--border-default)' }}>
            <button className="btn-circle btn-circle-300 btn-circle-neutral-tertiary" onClick={() => setStep(2)}>
              <span className="btn-icon material-symbols-rounded">arrow_back</span>
            </button>
            <span className="title50">Checkout</span>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: responsivePad, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-content)' }}>

            {/* Order Summary */}
            <div>
              <p className="labelBold20 text-secondary mb-200">Order Summary</p>
              <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--border-radius-100)', overflow: 'hidden' }}>
                <div style={{ borderBottom: '1px solid var(--border-default)', padding: 'var(--spacing-150) var(--spacing-200)' }}>
                  <div className="list-row">
                    <div className="list-row-content">
                      <div className="list-row-text-pair">
                        <span className="labelBold30">{selectedSection} × {quantity}</span>
                        <span className="labelRegular10 text-secondary">{selectedTeam?.name} · {selectedSched?.date.split('·')[0].trim()}</span>
                      </div>
                    </div>
                    <div className="trailing trailing-gap-sm">
                      <span className="labelBold30">${subtotal}</span>
                    </div>
                  </div>
                </div>
                <div style={{ borderBottom: '1px solid var(--border-default)', padding: 'var(--spacing-150) var(--spacing-200)' }}>
                  <div className="list-row">
                    <div className="list-row-content">
                      <span className="labelRegular20 text-secondary">Service fee (10%)</span>
                    </div>
                    <div className="trailing trailing-gap-sm">
                      <span className="labelBold20">${fee.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: 'var(--spacing-150) var(--spacing-200)' }}>
                  <div className="list-row">
                    <div className="list-row-content">
                      <span className="labelBold30">Total</span>
                    </div>
                    <div className="trailing trailing-gap-sm">
                      <span className="title50">${total}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact + Payment cols */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-content)' }}>
              <div>
                <p className="labelBold20 text-secondary mb-200">Contact</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-150)' }}>
                  <div className="input-field">
                    <div className="input-label-row">
                      <label className="labelBold20" htmlFor="inp-name">Full name</label>
                    </div>
                    <div className="input-and-message">
                      <div className="input-control">
                        <input type="text" id="inp-name" placeholder="Jane Smith" value={name} onChange={(e) => setName(e.target.value)} />
                      </div>
                    </div>
                  </div>
                  <div className="input-field">
                    <div className="input-label-row">
                      <label className="labelBold20" htmlFor="inp-email">Email</label>
                    </div>
                    <div className="input-and-message">
                      <div className="input-control">
                        <input type="email" id="inp-email" placeholder="jane@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <span className="labelRegular10 text-secondary">Tickets delivered here</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="labelBold20 text-secondary mb-200">Payment</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-150)' }}>
                  <div className="input-field">
                    <div className="input-label-row">
                      <label className="labelBold20" htmlFor="inp-card">Card number</label>
                    </div>
                    <div className="input-and-message">
                      <div className="input-control">
                        <input type="text" id="inp-card" placeholder="1234 5678 9012 3456" maxLength={19} value={cardNum} onChange={(e) => setCardNum(formatCard(e.target.value))} />
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 'var(--spacing-150)' }}>
                    <div className="input-field" style={{ flex: 1 }}>
                      <div className="input-label-row">
                        <label className="labelBold20" htmlFor="inp-expiry">Expiry</label>
                      </div>
                      <div className="input-and-message">
                        <div className="input-control">
                          <input type="text" id="inp-expiry" placeholder="MM / YY" maxLength={7} value={expiry} onChange={(e) => setExpiry(formatExpiry(e.target.value))} />
                        </div>
                      </div>
                    </div>
                    <div className="input-field" style={{ flex: 1 }}>
                      <div className="input-label-row">
                        <label className="labelBold20" htmlFor="inp-cvv">CVV</label>
                      </div>
                      <div className="input-and-message">
                        <div className="input-control">
                          <input type="text" id="inp-cvv" placeholder="123" maxLength={4} value={cvv} onChange={(e) => setCvv(e.target.value)} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ height: 'var(--spacing-800)' }} />
          </div>

          <div style={{
            position: 'sticky', bottom: 0, background: 'var(--bg-base)',
            borderTop: '1px solid var(--border-default)',
            padding: `var(--spacing-200) ${responsivePad} var(--spacing-300)`,
            display: 'flex', flexDirection: 'column', gap: 'var(--spacing-100)',
          }}>
            <button className="btn btn-transactional btn-700 btn-fill" onClick={() => setStep(4)}>
              Complete Purchase
            </button>
            <p className="labelRegular10 text-secondary" style={{ textAlign: 'center' }}>
              <span className="icon icon-100" style={{ verticalAlign: 'middle' }}>lock</span>
              {' '}Secured with 256-bit SSL encryption
            </p>
          </div>
        </div>
      )}

      {/* STEP 4 — Confirmation */}
      {step === 4 && (
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: `var(--spacing-content) ${responsivePad}`,
          textAlign: 'center', gap: 'var(--spacing-300)',
        }}>
          <span className="icon icon-600 icon-filled text-brand-core">check_circle</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-100)' }}>
            <span className="title70">You're going!</span>
            <span className="bodyRegular30 text-secondary">Your tickets have been sent to your email. See you at Target Center!</span>
          </div>
          <div style={{ background: 'var(--bg-surface)', borderRadius: 'var(--border-radius-200)', padding: 'var(--spacing-300)', width: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-50)' }}>
              <span className="labelBold10 text-secondary">YOUR ORDER</span>
              <span className="title50 mt-100">{selectedSection} × {quantity} {quantity > 1 ? 'seats' : 'seat'}</span>
              <span className="labelRegular20 text-secondary">{selectedTeam?.name} · {selectedSched?.date.split('·')[0].trim()}</span>
              <span className="title60 text-brand-core mt-100">${total}</span>
            </div>
          </div>
          <button className="btn btn-secondary btn-300" onClick={() => { setStep(1); setSelectedSection(''); setSelectedPrice(0); setQuantity(1) }}>
            Back to Schedule
          </button>
        </div>
      )}

    </div>
  )
}
