import { useState } from 'react'
import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'
import { ListRow, TextPair, TrailingText, LeadingImage, LeadingLogo, CircleContainer } from '../../components/ListRow'
import { CardClosed, CardOpen } from '../../components/Card'
import { EventRow } from '../../components/EventRow'
import { Selector } from '../../components/Selector'
import { Tag, Chip } from '../../components/Tag'
import { Tile } from '../../components/Tile'
import { TopBar } from '../../components/TopBar'
import { Tabs } from '../../components/Tabs'
import { Steps } from '../../components/Steps'
import { PageHeader } from '../../components/PageHeader'
import { Button } from '../../components/Button'

const LOGO = 'https://diet-air-ds.vercel.app/images/wolves.svg'

export default function DocListRowsPage() {
  const [selectedSelector, setSelectedSelector] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('schedule')

  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">List Rows, Cards &amp; More</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          The remaining component library — list rows, cards, event rows, selectors, tags, chips,
          tiles, and navigation. All are imported from <code>'diet-airds'</code> and controlled
          through typed props.
        </p>
      </div>

      {/* ─── LIST ROW ─── */}
      <div className="container-wide py-large border-top" id="list-row">
        <h2 className="title80">List Row</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          A 3-slot layout: <strong>leading</strong> (left), <strong>children</strong> (main
          content), <strong>trailing</strong> (right). Each slot is optional. Combine with the
          subcomponents below to build any row shape.
        </p>

        <div className="doc-code-block mt-200">
          <code>{`import { ListRow, TextPair, TrailingText, LeadingImage, LeadingLogo, CircleContainer } from 'diet-airds'`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">ListRow Props</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>leading</code></td><td>ReactNode</td><td>—</td><td>Left slot (image, logo, icon, avatar)</td></tr>
              <tr><td><code>leadingGap</code></td><td><code>'sm' | 'md' | 'lg' | 'xl'</code></td><td><code>'md'</code></td><td>Gap between leading slot and content</td></tr>
              <tr><td><code>children</code></td><td>ReactNode</td><td>—</td><td>Main content (required)</td></tr>
              <tr><td><code>trailing</code></td><td>ReactNode</td><td>—</td><td>Right slot (price, chevron, action)</td></tr>
              <tr><td><code>trailingGap</code></td><td><code>'xs' | 'sm' | 'md' | 'lg'</code></td><td><code>'xs'</code></td><td>Gap between content and trailing slot</td></tr>
              <tr><td><code>notTappable</code></td><td>boolean</td><td><code>false</code></td><td>Remove pointer cursor (non-interactive rows)</td></tr>
              <tr><td><code>disabled</code></td><td>boolean</td><td><code>false</code></td><td>30% opacity, no interaction</td></tr>
              <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Click handler</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Basic Examples</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col" style={{ gap: 0 }}>
            <ListRow
              leading={<LeadingImage src={LOGO} alt="Wolves" />}
              children={<TextPair label="Minnesota Timberwolves" sublabel="NBA · Northwest Division" />}
              trailing={<TrailingText label="82 GP" sublabel="47–35" />}
            />
            <ListRow
              leading={<CircleContainer><span className="icon icon-200 text-brand-interactive">sports_basketball</span></CircleContainer>}
              children={<TextPair label="Tonight's Game" sublabel="7:00 PM CT · Target Center" />}
              trailing={<span className="icon text-secondary">chevron_right</span>}
            />
            <ListRow
              children={<TextPair label="No Leading Slot" sublabel="Just text content" />}
              trailing={<Button variant="primary" size="xsmall">Action</Button>}
            />
            <ListRow
              notTappable
              leading={<CircleContainer><span className="icon icon-200 text-disabled">lock</span></CircleContainer>}
              children={<TextPair label="Non-Tappable Row" sublabel="No pointer cursor, no hover" />}
            />
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<ListRow
  leading={<LeadingImage src="/images/wolves.svg" alt="Wolves" />}
  trailing={<TrailingText label="82 GP" sublabel="47–35" />}
>
  <TextPair label="Minnesota Timberwolves" sublabel="NBA · Northwest Division" />
</ListRow>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-200">Subcomponents</h3>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Component</th><th>Props</th><th>Use For</th></tr></thead>
            <tbody>
              <tr>
                <td><code>TextPair</code></td>
                <td><code>label</code>, <code>sublabel?</code></td>
                <td>Label + sublabel stack for main content slot</td>
              </tr>
              <tr>
                <td><code>TrailingText</code></td>
                <td><code>label</code>, <code>sublabel?</code></td>
                <td>Right-aligned label + sublabel for trailing slot</td>
              </tr>
              <tr>
                <td><code>LeadingImage</code></td>
                <td><code>src</code>, <code>alt</code>, <code>size?: 'square' | 'small' | 'large'</code></td>
                <td>Image in leading slot</td>
              </tr>
              <tr>
                <td><code>LeadingLogo</code></td>
                <td><code>ariaLabel?</code></td>
                <td>Current team's logo (CSS variable driven)</td>
              </tr>
              <tr>
                <td><code>CircleContainer</code></td>
                <td><code>children</code></td>
                <td>Circle wrapper for an icon or letter avatar in leading slot</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Leading slot variants</span>
          <div className="doc-demo-col" style={{ gap: 0 }}>
            <ListRow
              leading={<LeadingImage src={LOGO} alt="Wolves" size="square" />}
              children={<TextPair label="LeadingImage — square" sublabel="size='square' (default)" />}
            />
            <ListRow
              leading={<LeadingImage src={LOGO} alt="Wolves" size="small" />}
              children={<TextPair label="LeadingImage — small" sublabel="size='small'" />}
            />
            <ListRow
              leading={<LeadingLogo ariaLabel="Team logo" />}
              children={<TextPair label="LeadingLogo" sublabel="Current theme's team logo" />}
            />
            <ListRow
              leading={<CircleContainer><span className="icon icon-200 text-brand-interactive">home</span></CircleContainer>}
              children={<TextPair label="CircleContainer" sublabel="Icon inside a circle" />}
            />
          </div>
        </div>
      </div>

      {/* ─── CARDS ─── */}
      <div className="container-wide py-large border-top" id="cards">
        <h2 className="title80">Cards</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Two card architectures: <code>CardClosed</code> (single surface with header/body/footer
          zones) and <code>CardOpen</code> (multiple sections with individual backgrounds).
        </p>

        <div className="doc-code-block mt-200">
          <code>{`import { CardClosed, CardOpen, CardSection } from 'diet-airds'`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">CardClosed</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          One continuous card surface. Pass content to <code>header</code>, <code>body</code>,
          and/or <code>footer</code> slots. Set <code>interactive</code> for hover/click states.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>header</code></td><td>ReactNode</td><td>—</td><td>Top card zone</td></tr>
              <tr><td><code>body</code></td><td>ReactNode</td><td>—</td><td>Middle card zone</td></tr>
              <tr><td><code>footer</code></td><td>ReactNode</td><td>—</td><td>Bottom card zone</td></tr>
              <tr><td><code>interactive</code></td><td>boolean</td><td><code>false</code></td><td>Adds hover/press surface states</td></tr>
              <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Click handler (use with interactive)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200" style={{ maxWidth: 360 }}>
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col">
            <CardClosed
              header={
                <div className="p-300">
                  <div className="card-text-pair">
                    <span className="title50">Card Title</span>
                    <span className="labelRegular20 text-secondary">Jan 15, 2025 · Target Center</span>
                  </div>
                </div>
              }
              body={
                <div className="px-300 pb-200">
                  <p className="bodyRegular30 text-secondary">Tickets available from $24 per seat. Limited availability for floor section.</p>
                </div>
              }
              footer={
                <div className="px-300 pb-300">
                  <Button variant="transactional" size="small" fill>Buy Tickets</Button>
                </div>
              }
            />
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<CardClosed
  header={<div className="p-300"><h3 className="title50">Card Title</h3></div>}
  body={<div className="px-300 pb-200"><p>Body content</p></div>}
  footer={<div className="px-300 pb-300"><Button variant="primary" size="small" fill>Action</Button></div>}
/>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">CardOpen</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Multiple distinct sections, each with its own surface background. Pass an array of
          ReactNodes to <code>sections</code>. Useful for cards that contain multiple list rows
          or groupings.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>sections</code></td><td>ReactNode[]</td><td>Array of section content — each gets a surface background (required)</td></tr>
              <tr><td><code>header</code></td><td>ReactNode</td><td>Optional header rendered above sections (no background)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200" style={{ maxWidth: 360 }}>
          <span className="doc-preview-label">Live</span>
          <CardOpen
            header={
              <div className="pb-150">
                <span className="labelBold20 text-secondary">Upcoming Games</span>
              </div>
            }
            sections={[
              <ListRow
                leading={<LeadingImage src={LOGO} alt="Wolves" size="square" />}
                children={<TextPair label="vs. Celtics" sublabel="Tue, Jan 14 · 7 PM" />}
                trailing={<Button variant="primary" size="xsmall">$28+</Button>}
              />,
              <ListRow
                leading={<LeadingImage src={LOGO} alt="Wolves" size="square" />}
                children={<TextPair label="vs. Lakers" sublabel="Thu, Jan 16 · 8 PM" />}
                trailing={<Button variant="primary" size="xsmall">$35+</Button>}
              />,
            ]}
          />
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<CardOpen
  header={<span className="labelBold20 text-secondary">Upcoming Games</span>}
  sections={[
    <ListRow leading={...} trailing={...}><TextPair label="vs. Celtics" sublabel="Jan 14" /></ListRow>,
    <ListRow leading={...} trailing={...}><TextPair label="vs. Lakers" sublabel="Jan 16" /></ListRow>,
  ]}
/>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">CardSection</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          A standalone section component with optional interactive (hover/press) states. Use it
          when you need a single independent surface block, not inside a <code>CardOpen</code>.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>children</code></td><td>ReactNode</td><td>—</td><td>Section content (required)</td></tr>
              <tr><td><code>interactive</code></td><td>boolean</td><td><code>false</code></td><td>Adds hover/press states</td></tr>
              <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Click handler</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ─── EVENT ROW ─── */}
      <div className="container-wide py-large border-top" id="event-row">
        <h2 className="title80">Event Row</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          A sports-specific row for displaying ticketed events. Handles all 5 ticket availability
          states and auto-renders the correct layout for each.
        </p>

        <div className="doc-code-block mt-200">
          <code>{`import { EventRow } from 'diet-airds'`}</code>
        </div>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>opponentLogo</code></td><td>string</td><td>Opponent team logo URL (required)</td></tr>
              <tr><td><code>opponentName</code></td><td>string</td><td>Opponent team name (required)</td></tr>
              <tr><td><code>date</code></td><td>string</td><td>Event date string, e.g. "Tuesday, Oct 8 · 7 PM" (required)</td></tr>
              <tr><td><code>state</code></td><td>EventRowState</td><td>Availability state (required) — see table below</td></tr>
              <tr><td><code>featuredPrice</code></td><td>string</td><td>Featured offer label, e.g. "$19+" — used in featured states</td></tr>
              <tr><td><code>offerCount</code></td><td>number</td><td>Number of additional/available offers</td></tr>
              <tr><td><code>onTopClick</code></td><td>function</td><td>Click handler for top section (featured states)</td></tr>
              <tr><td><code>onBottomClick</code></td><td>function</td><td>Click handler for bottom section (multi-offer states)</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">State Values</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>state</th><th>Description</th><th>Shows</th></tr></thead>
            <tbody>
              <tr><td><code>'featured-only'</code></td><td>One featured offer</td><td>Top row with price button</td></tr>
              <tr><td><code>'featured-and-others'</code></td><td>Featured + additional offers</td><td>Top row + expandable bottom row</td></tr>
              <tr><td><code>'no-featured-offers'</code></td><td>Multiple offers, none featured</td><td>Bottom row only with offer count</td></tr>
              <tr><td><code>'sold-out'</code></td><td>No tickets available</td><td>Top row with "Sold Out" label</td></tr>
              <tr><td><code>'coming-soon'</code></td><td>Tickets not yet on sale</td><td>Top row with "Coming Soon" label</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Live Examples</h3>
        <div className="doc-preview">
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col" style={{ gap: 'var(--spacing-150)' }}>
            <div>
              <p className="labelRegular10 text-secondary mb-50">featured-only</p>
              <EventRow
                opponentLogo={LOGO}
                opponentName="Boston Celtics"
                date="Tuesday, Jan 14 · 7:00 PM"
                state="featured-only"
                featuredPrice="$28+"
              />
            </div>
            <div>
              <p className="labelRegular10 text-secondary mb-50">featured-and-others</p>
              <EventRow
                opponentLogo={LOGO}
                opponentName="Los Angeles Lakers"
                date="Thursday, Jan 16 · 8:00 PM"
                state="featured-and-others"
                featuredPrice="$35+"
                offerCount={12}
              />
            </div>
            <div>
              <p className="labelRegular10 text-secondary mb-50">no-featured-offers</p>
              <EventRow
                opponentLogo={LOGO}
                opponentName="Golden State Warriors"
                date="Saturday, Jan 18 · 6:00 PM"
                state="no-featured-offers"
                offerCount={8}
              />
            </div>
            <div>
              <p className="labelRegular10 text-secondary mb-50">sold-out</p>
              <EventRow
                opponentLogo={LOGO}
                opponentName="Denver Nuggets"
                date="Monday, Jan 20 · 7:00 PM"
                state="sold-out"
              />
            </div>
            <div>
              <p className="labelRegular10 text-secondary mb-50">coming-soon</p>
              <EventRow
                opponentLogo={LOGO}
                opponentName="Phoenix Suns"
                date="Wednesday, Jan 22 · 7:30 PM"
                state="coming-soon"
              />
            </div>
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<EventRow
  opponentLogo="/images/celtics.svg"
  opponentName="Boston Celtics"
  date="Tuesday, Jan 14 · 7:00 PM"
  state="featured-and-others"
  featuredPrice="$28+"
  offerCount={12}
  onTopClick={() => openFeaturedOffer()}
  onBottomClick={() => openAllOffers()}
/>`}</code>
        </div>
      </div>

      {/* ─── SELECTOR ─── */}
      <div className="container-wide py-large border-top" id="selector">
        <h2 className="title80">Selector</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          A selectable container that wraps any content — typically a <code>ListRow</code>. Shows
          a team-colored active indicator when selected.
        </p>

        <div className="doc-code-block mt-200">
          <code>{`import { Selector } from 'diet-airds'`}</code>
        </div>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>children</code></td><td>ReactNode</td><td>—</td><td>Inner content (required)</td></tr>
              <tr><td><code>surface</code></td><td><code>'wash' | 'card'</code></td><td><code>'wash'</code></td><td><code>'wash'</code> for inside cards; <code>'card'</code> on page background</td></tr>
              <tr><td><code>selected</code></td><td>boolean</td><td><code>false</code></td><td>Active/selected state</td></tr>
              <tr><td><code>disabled</code></td><td>boolean</td><td><code>false</code></td><td>Disabled state</td></tr>
              <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Selection handler</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200" style={{ maxWidth: 400 }}>
          <span className="doc-preview-label">Live — click to select</span>
          <div className="doc-demo-col" style={{ gap: 'var(--spacing-100)' }}>
            {[
              { id: 'floor', label: 'Floor Seats', sublabel: 'Section A · Row 5' },
              { id: 'lower', label: 'Lower Bowl', sublabel: 'Section 104 · Row 12' },
              { id: 'upper', label: 'Upper Deck', sublabel: 'Section 201 · Row 3' },
            ].map(option => (
              <Selector
                key={option.id}
                surface="card"
                selected={selectedSelector === option.id}
                onClick={() => setSelectedSelector(option.id)}
              >
                <ListRow
                  notTappable
                  children={<TextPair label={option.label} sublabel={option.sublabel} />}
                  trailing={selectedSelector === option.id
                    ? <span className="icon icon-200 text-brand-interactive">check_circle</span>
                    : <span className="icon icon-200 text-disabled">radio_button_unchecked</span>
                  }
                />
              </Selector>
            ))}
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`const [selected, setSelected] = useState<string | null>(null)

<Selector
  surface="card"
  selected={selected === 'floor'}
  onClick={() => setSelected('floor')}
>
  <ListRow notTappable trailing={<span className="icon">check_circle</span>}>
    <TextPair label="Floor Seats" sublabel="Section A · Row 5" />
  </ListRow>
</Selector>`}</code>
        </div>
      </div>

      {/* ─── TAGS & CHIPS ─── */}
      <div className="container-wide py-large border-top" id="tags-chips">
        <h2 className="title80">Tags &amp; Chips</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          <strong>Tags</strong> are static labels (non-interactive). <strong>Chips</strong> are
          interactive toggles for filters and selections.
        </p>

        <div className="doc-code-block mt-200">
          <code>{`import { Tag, Chip } from 'diet-airds'`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">Tag</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>children</code></td><td>ReactNode</td><td>—</td><td>Tag label (required)</td></tr>
              <tr><td><code>teamColor</code></td><td>boolean</td><td><code>false</code></td><td>Apply brand color tint to background</td></tr>
              <tr><td><code>icon</code></td><td>string</td><td>—</td><td>Material Symbols icon name</td></tr>
              <tr><td><code>iconPosition</code></td><td><code>'leading' | 'trailing'</code></td><td><code>'leading'</code></td><td>Icon position</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live</span>
          <div className="demo-row">
            <Tag>Default</Tag>
            <Tag teamColor>Team Color</Tag>
            <Tag icon="star" teamColor>Featured</Tag>
            <Tag icon="check" iconPosition="trailing">Verified</Tag>
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<Tag>Default</Tag>
<Tag teamColor>Team Color</Tag>
<Tag icon="star" teamColor>Featured</Tag>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">Chip</h3>
        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>children</code></td><td>ReactNode</td><td>—</td><td>Chip label (required)</td></tr>
              <tr><td><code>surface</code></td><td><code>'bordered' | 'ghost'</code></td><td><code>'bordered'</code></td><td>Visual style</td></tr>
              <tr><td><code>teamColor</code></td><td>boolean</td><td><code>false</code></td><td>Apply brand color to text</td></tr>
              <tr><td><code>icon</code></td><td>string</td><td>—</td><td>Material Symbols icon name</td></tr>
              <tr><td><code>iconPosition</code></td><td><code>'leading' | 'trailing'</code></td><td><code>'leading'</code></td><td>Icon position</td></tr>
              <tr><td><code>disabled</code></td><td>boolean</td><td><code>false</code></td><td>Disabled state</td></tr>
              <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Click handler</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live — click me</span>
          <div className="demo-row">
            <Chip>Default</Chip>
            <Chip surface="ghost">Ghost</Chip>
            <Chip teamColor>Team Color</Chip>
            <Chip icon="filter_list">Filter</Chip>
            <Chip disabled>Disabled</Chip>
          </div>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<Chip onClick={() => toggleFilter('floor')}>Floor Seats</Chip>
<Chip surface="ghost" icon="filter_list" teamColor>Filters</Chip>`}</code>
        </div>
      </div>

      {/* ─── TILE ─── */}
      <div className="container-wide py-large border-top" id="tile">
        <h2 className="title80">Tile</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          A visual-header + info tile — used for event cards, game tiles, and content grids. The
          <code>visual</code> slot holds an image or matchup display; <code>info</code> holds text
          and actions below.
        </p>

        <div className="doc-code-block mt-200">
          <code>{`import { Tile } from 'diet-airds'`}</code>
        </div>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>visual</code></td><td>ReactNode</td><td>—</td><td>Visual header area — image, matchup display, etc. (required)</td></tr>
              <tr><td><code>info</code></td><td>ReactNode</td><td>—</td><td>Info section below visual — text, price, button (required)</td></tr>
              <tr><td><code>tag</code></td><td>ReactNode</td><td>—</td><td>Optional frosted tag overlaid on top-left of visual</td></tr>
              <tr><td><code>tappable</code></td><td>boolean</td><td><code>false</code></td><td>Makes the whole tile the tap target (adds hover/press states)</td></tr>
              <tr><td><code>onClick</code></td><td>function</td><td>—</td><td>Click handler (use only when tappable)</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live</span>
          <div className="grid gap-card grid-cols-3-desktop grid-cols-2-tablet grid-cols-1-mobile">
            <Tile
              visual={
                <div style={{ height: 120, background: 'var(--brand-core)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={LOGO} alt="Wolves" style={{ height: 64, opacity: 0.9 }} />
                </div>
              }
              info={
                <div className="p-200">
                  <div className="card-text-pair">
                    <span className="labelBold30">vs. Celtics</span>
                    <span className="labelRegular20 text-secondary">Tue, Jan 14 · 7 PM</span>
                  </div>
                  <div className="mt-150">
                    <Button variant="transactional" size="xsmall" fill>From $28</Button>
                  </div>
                </div>
              }
              tag={<Tag teamColor>Featured</Tag>}
            />
            <Tile
              tappable
              visual={
                <div style={{ height: 120, background: 'var(--brand-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={LOGO} alt="Wolves" style={{ height: 64, opacity: 0.9 }} />
                </div>
              }
              info={
                <div className="p-200">
                  <div className="card-text-pair">
                    <span className="labelBold30">vs. Lakers</span>
                    <span className="labelRegular20 text-secondary">Thu, Jan 16 · 8 PM</span>
                  </div>
                </div>
              }
            />
          </div>
          <p className="labelRegular10 text-secondary mt-100">Second tile uses tappable — hover to see</p>
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<Tile
  visual={<img src={gameImage} alt="Game matchup" />}
  info={
    <div className="p-200">
      <div className="card-text-pair">
        <span className="labelBold30">vs. Celtics</span>
        <span className="labelRegular20 text-secondary">Jan 14 · 7 PM</span>
      </div>
      <Button variant="transactional" size="xsmall" fill>From $28</Button>
    </div>
  }
  tag={<Tag teamColor>Featured</Tag>}
/>`}</code>
        </div>
      </div>

      {/* ─── NAVIGATION ─── */}
      <div className="container-wide py-large border-top" id="navigation">
        <h2 className="title80">Navigation Components</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Four navigation and layout components for page structure.
        </p>

        <div className="doc-code-block mt-200">
          <code>{`import { TopBar, Tabs, Steps, PageHeader } from 'diet-airds'`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">TopBar</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          Sticky navigation bar with logo, team name, and an actions slot for buttons or icons.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>logoSrc</code></td><td>string</td><td>Team logo URL</td></tr>
              <tr><td><code>teamName</code></td><td>string</td><td>Team name for logo alt text</td></tr>
              <tr><td><code>shortName</code></td><td>string</td><td>Short name shown on mobile</td></tr>
              <tr><td><code>fullName</code></td><td>string</td><td>Full name shown on tablet+</td></tr>
              <tr><td><code>href</code></td><td>string</td><td>Home link href</td></tr>
              <tr><td><code>actions</code></td><td>ReactNode</td><td>Right slot — buttons, icon buttons, auth UI</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live</span>
          <TopBar
            logoSrc={LOGO}
            teamName="Timberwolves"
            shortName="Wolves"
            fullName="Minnesota Timberwolves"
            href="#"
            actions={
              <div style={{ display: 'flex', gap: 'var(--spacing-100)' }}>
                <Button variant="secondary" size="xsmall">Sign In</Button>
                <Button variant="primary" size="xsmall">Get Tickets</Button>
              </div>
            }
          />
        </div>

        <h3 className="title50 mt-400 mb-100">Tabs</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          A tab strip with an active underline indicator. Controlled — pass <code>activeTab</code>
          and update state in <code>onChange</code>.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>tabs</code></td><td>TabItem[]</td><td>—</td><td>Array of <code>{'{label, value}'}</code> objects (required)</td></tr>
              <tr><td><code>activeTab</code></td><td>string</td><td>—</td><td>Active tab value (required)</td></tr>
              <tr><td><code>onChange</code></td><td>function</td><td>—</td><td>Called with new value when tab changes (required)</td></tr>
              <tr><td><code>neutral</code></td><td>boolean</td><td><code>false</code></td><td>Neutral-colored indicator instead of brand color</td></tr>
              <tr><td><code>ariaLabel</code></td><td>string</td><td>—</td><td>Accessible label for the tablist</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live — click tabs</span>
          <Tabs
            tabs={[
              { label: 'Schedule', value: 'schedule' },
              { label: 'Standings', value: 'standings' },
              { label: 'Stats', value: 'stats' },
              { label: 'Roster', value: 'roster' },
            ]}
            activeTab={activeTab}
            onChange={setActiveTab}
            ariaLabel="Section navigation"
          />
        </div>

        <div className="doc-code-block mt-200">
          <code>{`const [activeTab, setActiveTab] = useState('schedule')

<Tabs
  tabs={[
    { label: 'Schedule', value: 'schedule' },
    { label: 'Standings', value: 'standings' },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
/>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">Steps</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          A step progress indicator showing completed, active, and pending states. Use inside a
          checkout or multi-step flow.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>steps</code></td><td>StepItem[]</td><td>—</td><td>Array of <code>{'{label, state}'}</code> objects (required)</td></tr>
              <tr><td><code>brand</code></td><td>boolean</td><td><code>false</code></td><td>Completed steps use brand color instead of green</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>state</th><th>Display</th></tr></thead>
            <tbody>
              <tr><td><code>'completed'</code></td><td>Checkmark — green (or brand color with brand prop)</td></tr>
              <tr><td><code>'active'</code></td><td>Number — brand colored indicator</td></tr>
              <tr><td><code>'pending'</code></td><td>Number — muted/disabled appearance</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live</span>
          <Steps
            steps={[
              { label: 'Seat Selection', state: 'completed' },
              { label: 'Account', state: 'active' },
              { label: 'Payment', state: 'pending' },
            ]}
          />
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<Steps
  steps={[
    { label: 'Seat Selection', state: 'completed' },
    { label: 'Account', state: 'active' },
    { label: 'Payment', state: 'pending' },
  ]}
/>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">PageHeader</h3>
        <p className="bodyRegular30 text-primary doc-prose mb-100">
          A page title block with optional tabs below and optional steps above. Commonly used as
          the top section of a content page.
        </p>

        <div className="doc-table-wrap">
          <table className="doc-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Description</th></tr></thead>
            <tbody>
              <tr><td><code>title</code></td><td>ReactNode</td><td>Main title (required)</td></tr>
              <tr><td><code>subtitle</code></td><td>ReactNode</td><td>Supporting subtitle text</td></tr>
              <tr><td><code>tabs</code></td><td>ReactNode</td><td>Tabs component rendered below the text</td></tr>
              <tr><td><code>steps</code></td><td>ReactNode</td><td>Steps component rendered above the text</td></tr>
            </tbody>
          </table>
        </div>

        <div className="doc-preview mt-200">
          <span className="doc-preview-label">Live</span>
          <PageHeader
            title="2024–25 Schedule"
            subtitle="Minnesota Timberwolves · NBA"
            tabs={
              <Tabs
                tabs={[
                  { label: 'All Games', value: 'all' },
                  { label: 'Home', value: 'home' },
                  { label: 'Away', value: 'away' },
                ]}
                activeTab="all"
                onChange={() => {}}
              />
            }
          />
        </div>

        <div className="doc-code-block mt-200">
          <code>{`<PageHeader
  title="2024–25 Schedule"
  subtitle="Minnesota Timberwolves · NBA"
  tabs={
    <Tabs
      tabs={[{ label: 'All Games', value: 'all' }, ...]}
      activeTab={activeTab}
      onChange={setActiveTab}
    />
  }
/>`}</code>
        </div>
      </div>

      {/* PREV / NEXT */}
      <div className="doc-prevnext">
        <Link className="doc-prevnext-prev surface-ghost scale-700" to="/documentation/buttons">
          <span className="icon">arrow_back</span>
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Previous</span>
            <span className="doc-prevnext-title">Buttons</span>
          </div>
        </Link>
        <Link className="doc-prevnext-next surface-ghost scale-700" to="/documentation/forms">
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Next</span>
            <span className="doc-prevnext-title">Forms</span>
          </div>
          <span className="icon">arrow_forward</span>
        </Link>
      </div>
    </DocShell>
  )
}
