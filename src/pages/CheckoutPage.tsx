import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useSelectSync } from '../hooks/useSelectSync'

const US_STATES = [
  { value: '', label: 'Select' },
  { value: 'AL', label: 'AL' }, { value: 'AK', label: 'AK' },
  { value: 'AZ', label: 'AZ' }, { value: 'CA', label: 'CA' },
  { value: 'CO', label: 'CO' }, { value: 'FL', label: 'FL' },
  { value: 'GA', label: 'GA' }, { value: 'HI', label: 'HI' },
  { value: 'IL', label: 'IL' }, { value: 'MN', label: 'MN' },
  { value: 'NV', label: 'NV' }, { value: 'NY', label: 'NY' },
  { value: 'TX', label: 'TX' }, { value: 'WA', label: 'WA' },
]

const AmexIcon = () => (
  <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 'var(--border-radius-50)' }}>
    <rect width="34" height="22" rx="3" fill="#016FD0"/>
    <text x="17" y="15" fontFamily="Arial" fontWeight="bold" fontSize="9" fill="white" textAnchor="middle" letterSpacing="0.5">AMEX</text>
  </svg>
)
const DiscoverIcon = () => (
  <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 'var(--border-radius-50)' }}>
    <rect width="34" height="22" rx="3" fill="#231F20"/>
    <circle cx="21" cy="11" r="6" fill="#F76E20"/>
    <text x="8" y="14" fontFamily="Arial" fontWeight="bold" fontSize="6.5" fill="white" letterSpacing="0.3">DISC</text>
  </svg>
)
const MastercardIcon = () => (
  <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 'var(--border-radius-50)' }}>
    <rect width="34" height="22" rx="3" fill="#252525"/>
    <circle cx="13" cy="11" r="6" fill="#EB001B"/>
    <circle cx="21" cy="11" r="6" fill="#F79E1B"/>
    <path d="M17 6.5A6 6 0 0 1 21 11 6 6 0 0 1 17 15.5 6 6 0 0 1 13 11 6 6 0 0 1 17 6.5z" fill="#FF5F00"/>
  </svg>
)
const VisaIcon = () => (
  <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 'var(--border-radius-50)' }}>
    <rect width="34" height="22" rx="3" fill="#1434CB"/>
    <text x="17" y="15" fontFamily="Arial" fontStyle="italic" fontWeight="bold" fontSize="11" fill="white" textAnchor="middle" letterSpacing="-0.5">VISA</text>
  </svg>
)

export default function CheckoutPage() {
  const { setTheme, setMode } = useTheme()
  const stateSync = useSelectSync({ initialDisplay: 'MN' })
  const [selectedState, setSelectedState] = useState('MN')
  const [saveCard, setSaveCard] = useState(true)
  const [agreeTerms, setAgreeTerms] = useState(false)

  useEffect(() => {
    setTheme('wolves')
    setMode('dark')
  }, [setTheme, setMode])

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      {/* Top Bar */}
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 'var(--spacing-100) var(--margin-large)',
        background: 'var(--bg-nav, var(--bg-surface))',
        borderBottom: 'var(--border-weight-100) solid var(--neutral-200)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-150)' }}>
          <div className="leading-logo" role="img" aria-label="Minnesota Timberwolves logo" style={{ width: 48, height: 48 }} />
          <span className="display100">Minnesota Timberwolves</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-100)' }}>
          <button className="btn-circle btn-circle-300 btn-circle-neutral-tertiary" aria-label="Notifications">
            <span className="btn-icon material-symbols-rounded">notifications</span>
          </button>
          <button className="btn-circle btn-circle-300 btn-circle-team" aria-label="Account">
            <span className="btn-circle-letter">A</span>
          </button>
        </div>
      </header>

      {/* Page Header */}
      <div style={{
        paddingTop: 'var(--spacing-800)',
        paddingBottom: 'var(--spacing-500)',
        borderBottom: 'var(--border-weight-100) solid var(--neutral-200)',
        background: 'var(--bg-nav)',
      }}>
        <div className="container">
          <div className="card-text-pair">
            <h1 className="display500">CHECKOUT</h1>
            <p className="labelRegular20 text-secondary">Your tickets will be available once your purchase has been successfully completed</p>
          </div>
        </div>
      </div>

      <div style={{
        paddingTop: 'var(--spacing-200)',
        paddingBottom: 'var(--spacing-200)',
        borderBottom: 'var(--border-weight-100) solid var(--neutral-200)',
        background: 'var(--bg-nav)',
      }}>
        <div className="container">
          <p className="labelRegular20 text-secondary">
            Holding seats for <span style={{ color: 'var(--status-success)' }}>11:59</span>
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <main className="container" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: 'var(--spacing-content)',
        paddingTop: 'var(--margin-small)',
        paddingBottom: 'var(--margin-small)',
        alignItems: 'start',
      }}>

        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-card)' }}>

          {/* Delivery Card */}
          <div className="card-closed">
            <div className="card-closed-header">
              <div className="card-text-pair">
                <h2 className="display300">DELIVERY</h2>
              </div>
            </div>
            <div className="card-closed-body">
              <div className="list-row not-tappable">
                <div className="leading leading-gap-md">
                  <div className="circle-container">
                    <span className="icon icon-200 material-symbols-rounded">account_circle</span>
                  </div>
                </div>
                <div className="list-row-content">
                  <div className="list-row-text-pair">
                    <span className="labelBold30">Hammed Kohistani</span>
                    <span className="labelRegular10 text-secondary">hammed@jump.com</span>
                    <span className="labelRegular10 text-secondary">(702) 883-2151</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method Card */}
          <div className="card-closed">
            <div className="card-closed-header">
              <div className="card-text-pair">
                <h2 className="display300">PAYMENT METHOD</h2>
              </div>
            </div>

            {/* Add Card radio row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-200)',
              padding: 'var(--spacing-200) var(--spacing-250)',
              borderBottom: 'var(--border-weight-100) solid var(--neutral-200)',
            }}>
              <div style={{
                width: 28, height: 28, minWidth: 28,
                borderRadius: '50%',
                background: 'var(--brand-interactive)',
                border: 'var(--border-weight-100) solid var(--neutral-300)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'white' }} />
              </div>
              <div className="list-row not-tappable" style={{ flex: 1, padding: 0 }}>
                <div className="leading leading-gap-md">
                  <span className="icon icon-200 material-symbols-rounded">credit_card</span>
                </div>
                <div className="list-row-content">
                  <div className="list-row-text-pair">
                    <span className="labelBold30">Add Card</span>
                    <span className="labelRegular10 text-secondary">US &amp; Canadian cards accepted 🇺🇸 🇨🇦</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card form */}
            <div className="card-closed-body" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-200)' }}>

              {/* Card brands */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-100)', padding: 'var(--spacing-100) 0' }}>
                <AmexIcon />
                <DiscoverIcon />
                <MastercardIcon />
                <VisaIcon />
              </div>

              <div className="input-field">
                <div className="input-label-row">
                  <label className="input-label" htmlFor="name-on-card">Name on Card</label>
                </div>
                <div className="input-and-message">
                  <div className="input-control">
                    <input id="name-on-card" type="text" placeholder="First and last name" defaultValue="Hammed Kohistani" />
                  </div>
                </div>
              </div>

              <div className="input-field">
                <div className="input-label-row">
                  <label className="input-label" htmlFor="card-number">Card Number</label>
                </div>
                <div className="input-and-message">
                  <div className="input-control">
                    <input id="card-number" type="text" placeholder="Card number" defaultValue="4111 1111 1111 1111" />
                  </div>
                </div>
              </div>

              {/* 4-col grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 'var(--spacing-100)' }}>
                <div className="input-field">
                  <div className="input-label-row">
                    <label className="input-label" htmlFor="expiration">Expiration</label>
                  </div>
                  <div className="input-and-message">
                    <div className="input-control">
                      <input id="expiration" type="text" placeholder="MM/YY" defaultValue="01/27" />
                    </div>
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-label-row">
                    <label className="input-label" htmlFor="cvv">Security Code</label>
                  </div>
                  <div className="input-and-message">
                    <div className="input-control">
                      <input id="cvv" type="text" placeholder="CVV" defaultValue="123" />
                    </div>
                  </div>
                </div>
                <div className={`input-field input-select${stateSync.isOpen ? ' is-open' : ''}`}>
                  <div className="input-label-row">
                    <label className="input-label" htmlFor="state">State</label>
                  </div>
                  <div className="input-and-message">
                    <div className="input-control">
                      <span className="input-select-display">{selectedState || 'Select'}</span>
                      <span className="input-select-chevron material-symbols-rounded">arrow_drop_down</span>
                      <select
                        id="state"
                        value={selectedState}
                        onChange={(e) => {
                          stateSync.handleChange(e)
                          setSelectedState(e.target.value)
                        }}
                        onFocus={stateSync.handleFocus}
                        onBlur={stateSync.handleBlur}
                      >
                        {US_STATES.map(s => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="input-field">
                  <div className="input-label-row">
                    <label className="input-label" htmlFor="zip">Zip code</label>
                  </div>
                  <div className="input-and-message">
                    <div className="input-control">
                      <input id="zip" type="text" placeholder="Zip code" defaultValue="92101" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Save card */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-200)', padding: 'var(--spacing-100) 0' }}>
                <input
                  type="checkbox"
                  id="save-card"
                  checked={saveCard}
                  onChange={(e) => setSaveCard(e.target.checked)}
                  style={{
                    appearance: 'none',
                    width: 28, height: 28, minWidth: 28,
                    border: 'var(--border-weight-100) solid var(--neutral-300)',
                    borderRadius: 'var(--border-radius-50)',
                    cursor: 'pointer',
                    flexShrink: 0,
                    background: saveCard ? 'var(--brand-interactive)' : 'transparent',
                    borderColor: saveCard ? 'var(--brand-interactive)' : undefined,
                    position: 'relative',
                  }}
                />
                <label htmlFor="save-card" className="labelRegular20">Save this card for future purchases</label>
              </div>
            </div>
          </div>

          {/* Terms + Place Order */}
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--spacing-200)', padding: 'var(--spacing-200) 0' }}>
              <input
                type="checkbox"
                id="terms"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                style={{
                  appearance: 'none',
                  width: 28, height: 28, minWidth: 28,
                  border: 'var(--border-weight-100) solid var(--neutral-300)',
                  borderRadius: 'var(--border-radius-50)',
                  cursor: 'pointer',
                  flexShrink: 0,
                  marginTop: 2,
                  background: agreeTerms ? 'var(--brand-interactive)' : 'transparent',
                  borderColor: agreeTerms ? 'var(--brand-interactive)' : undefined,
                }}
              />
              <label htmlFor="terms" className="labelRegular20 text-secondary" style={{ cursor: 'pointer' }}>
                By checking this box, I agree to the{' '}
                <a href="#" style={{ color: 'var(--brand-interactive)' }}>Ticket Terms</a>
                {' '}and{' '}
                <a href="#" style={{ color: 'var(--brand-interactive)' }}>Fan Code of Conduct.</a>
                {' '}Tickets may only be resold via the official Timberwolves app or website, and violations may lead to revocation. The Timberwolves reserve the right to cancel any order.
              </label>
            </div>
            <div style={{ paddingTop: 'var(--spacing-400)', paddingBottom: 'var(--spacing-300)' }}>
              <button className="btn btn-transactional btn-700 btn-icon-leading">
                <span className="btn-icon material-symbols-rounded" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                <span>Place Order</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-card)' }}>

          {/* Matchup Card */}
          <div className="card-closed" style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'flex',
              height: 160,
              overflow: 'hidden',
              borderRadius: 'var(--border-radius-200) var(--border-radius-200) 0 0',
            }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#a00d33' }}>
                <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="labelBold40" style={{ color: 'white' }}>CHI</span>
                </div>
              </div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--brand-core, #266092)' }}>
                <div style={{ width: 100, height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span className="labelBold40" style={{ color: 'white' }}>MIN</span>
                </div>
              </div>
            </div>
            <div className="card-closed-header">
              <div className="card-text-pair">
                <h3 className="title50">Chicago Bulls @ Minnesota Timberwolves</h3>
                <p className="labelRegular20 text-secondary">Thu, Jan 18, 7:00 PM</p>
                <p className="labelRegular20 text-secondary">Target Center</p>
              </div>
            </div>
            <div className="card-closed-body">
              <div className="list-row not-tappable">
                <div className="leading leading-gap-md">
                  <span className="icon icon-200 material-symbols-rounded">confirmation_number</span>
                </div>
                <div className="list-row-content">
                  <div className="list-row-text-pair">
                    <span className="labelBold30">2 Tickets</span>
                  </div>
                </div>
                <div className="trailing trailing-gap-xs">
                  <span className="icon icon-200 material-symbols-rounded">expand_less</span>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-200)', paddingTop: 'var(--spacing-200)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="labelRegular20 text-secondary">Section 212, Row A, Seat 1</span>
                  <span className="labelBold20">$45.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="labelRegular20 text-secondary">Section 212, Row A, Seat 2</span>
                  <span className="labelBold20">$45.00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Card */}
          <div className="card-closed">
            <div className="card-closed-header">
              <div className="card-text-pair">
                <h2 className="display300">ORDER SUMMARY</h2>
              </div>
            </div>
            <div className="card-closed-body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-100)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="labelBold20">Subtotal</span>
                  <span className="labelRegular20 text-secondary">$90.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="labelRegular20 text-secondary">Ticket Credits</span>
                  <span className="labelBold20" style={{ color: 'var(--status-success)' }}>-$75.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="labelRegular20 text-secondary">Fees</span>
                  <span className="labelRegular20 text-secondary">$5.00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="labelRegular20 text-secondary">Estimated Taxes</span>
                  <span className="labelRegular20 text-secondary">$5.00</span>
                </div>
              </div>
            </div>
            <div className="card-closed-footer">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="labelBold40">Total</span>
                <span className="labelBold40">$25.00</span>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'var(--spacing-100)',
        padding: 'var(--spacing-300) var(--margin-large)',
        borderTop: 'var(--border-weight-100) solid var(--neutral-200)',
      }}>
        <span className="labelRegular20 text-secondary">Powered by</span>
        <img
          src="https://diet-air-ds.vercel.app/images/jump-logo.svg"
          alt="Jump"
          style={{ height: 20, filter: 'brightness(0) invert(1)' }}
        />
      </footer>
    </div>
  )
}
