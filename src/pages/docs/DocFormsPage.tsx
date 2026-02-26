import { useState } from 'react'
import { Link } from 'react-router-dom'
import DocShell from '../../layouts/DocShell'
import { Input, Select } from '../../components/Input'

export default function DocFormsPage() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [searchValue, setSearchValue] = useState('Pre-filled value')
  const [selectValue, setSelectValue] = useState('')

  const teamOptions = [
    { value: 'wolves', label: 'Minnesota Timberwolves' },
    { value: 'lynx', label: 'Minnesota Lynx' },
    { value: 'courage', label: 'NC Courage' },
    { value: 'sounders', label: 'Seattle Sounders FC' },
    { value: 'athletics', label: 'Las Vegas Athletics' },
  ]

  const sectionOptions = [
    { value: 'floor-a', label: 'Floor — Section A' },
    { value: 'floor-b', label: 'Floor — Section B' },
    { value: 'lower-101', label: 'Lower Bowl — 101' },
    { value: 'lower-104', label: 'Lower Bowl — 104' },
    { value: 'upper-201', label: 'Upper Deck — 201' },
  ]

  return (
    <DocShell>
      {/* PAGE INTRO */}
      <div className="container-wide py-large">
        <h1 className="display500 mb-200">Forms</h1>
        <p className="bodyRegular30 text-primary doc-prose">
          The <code>Input</code> and <code>Select</code> components handle all field types,
          states, validation messages, and icons. Both are controlled components — pass{' '}
          <code>value</code> and <code>onChange</code> to manage state.
        </p>
      </div>

      {/* IMPORT */}
      <div className="container-wide py-large border-top" id="import">
        <h2 className="title80">Import</h2>
        <div className="doc-code-block mt-200">
          <code>{`import { Input, Select } from 'diet-airds'`}</code>
        </div>
      </div>

      {/* INPUT */}
      <div className="container-wide py-large border-top" id="input">
        <h2 className="title80">Input</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          Text input field with label, helper message, leading icon, clearable state, and full
          error/disabled handling.
        </p>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>label</code></td><td>string</td><td>—</td><td>Field label text</td></tr>
              <tr><td><code>type</code></td><td><code>'text' | 'email' | 'password' | 'tel' | 'number' | 'search' | 'url'</code></td><td><code>'text'</code></td><td>HTML input type</td></tr>
              <tr><td><code>value</code></td><td>string</td><td>—</td><td>Controlled value</td></tr>
              <tr><td><code>defaultValue</code></td><td>string</td><td>—</td><td>Default value (uncontrolled)</td></tr>
              <tr><td><code>placeholder</code></td><td>string</td><td>—</td><td>Placeholder text</td></tr>
              <tr><td><code>message</code></td><td>string</td><td>—</td><td>Helper or error message below the field</td></tr>
              <tr><td><code>icon</code></td><td>string</td><td>—</td><td>Leading icon — Material Symbols name</td></tr>
              <tr><td><code>clearable</code></td><td>boolean</td><td><code>false</code></td><td>Show clear button when field has a value</td></tr>
              <tr><td><code>error</code></td><td>boolean</td><td><code>false</code></td><td>Error state — red border and message</td></tr>
              <tr><td><code>disabled</code></td><td>boolean</td><td><code>false</code></td><td>Disabled state</td></tr>
              <tr><td><code>onChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Change handler — receives the string value</td></tr>
              <tr><td><code>onClear</code></td><td><code>() =&gt; void</code></td><td>—</td><td>Clear button handler</td></tr>
              <tr><td><code>linkText</code></td><td>string</td><td>—</td><td>Optional link text in the label row (e.g. "Forgot password?")</td></tr>
              <tr><td><code>linkHref</code></td><td>string</td><td>—</td><td>Href for the label row link</td></tr>
              <tr><td><code>name</code></td><td>string</td><td>—</td><td>Input name attribute</td></tr>
              <tr><td><code>id</code></td><td>string</td><td>—</td><td>Input id attribute</td></tr>
              <tr><td><code>autoComplete</code></td><td>string</td><td>—</td><td>Autocomplete attribute</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Default State</h3>
        <div className="doc-preview" style={{ maxWidth: 400 }}>
          <span className="doc-preview-label">Live — type to interact</span>
          <div className="doc-demo-col">
            <Input
              label="Email address"
              type="email"
              value={emailValue}
              placeholder="you@example.com"
              onChange={setEmailValue}
            />
          </div>
        </div>
        <div className="doc-code-block mt-200">
          <code>{`const [email, setEmail] = useState('')

<Input
  label="Email address"
  type="email"
  value={email}
  placeholder="you@example.com"
  onChange={setEmail}
/>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">With Icon</h3>
        <div className="doc-preview" style={{ maxWidth: 400 }}>
          <span className="doc-preview-label">Live</span>
          <Input
            label="Search"
            icon="search"
            value={searchValue}
            placeholder="Search tickets..."
            onChange={setSearchValue}
            clearable
            onClear={() => setSearchValue('')}
          />
        </div>
        <div className="doc-code-block mt-200">
          <code>{`<Input
  label="Search"
  icon="search"
  value={search}
  placeholder="Search tickets..."
  onChange={setSearch}
  clearable
  onClear={() => setSearch('')}
/>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">With Link in Label Row</h3>
        <div className="doc-preview" style={{ maxWidth: 400 }}>
          <span className="doc-preview-label">Live</span>
          <Input
            label="Password"
            type="password"
            value={passwordValue}
            placeholder="Enter password"
            linkText="Forgot password?"
            linkHref="#"
            onChange={setPasswordValue}
          />
        </div>
        <div className="doc-code-block mt-200">
          <code>{`<Input
  label="Password"
  type="password"
  value={password}
  placeholder="Enter password"
  linkText="Forgot password?"
  linkHref="/forgot-password"
  onChange={setPassword}
/>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">All States</h3>
        <div className="doc-preview" style={{ maxWidth: 400 }}>
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col">
            <Input
              label="Default"
              placeholder="Empty state"
            />
            <Input
              label="Has Value"
              value="Anthony Edwards"
              onChange={() => {}}
            />
            <Input
              label="With Helper"
              placeholder="Enter email"
              message="We'll never share your email."
            />
            <Input
              label="Error State"
              value="invalid-email"
              error
              message="Please enter a valid email address."
              onChange={() => {}}
            />
            <Input
              label="Disabled"
              value="Read only value"
              disabled
              onChange={() => {}}
            />
          </div>
        </div>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead><tr><th>State</th><th>How to Trigger</th></tr></thead>
            <tbody>
              <tr><td>Default</td><td>No extra props</td></tr>
              <tr><td>Has Value</td><td>Pass non-empty <code>value</code></td></tr>
              <tr><td>Helper Message</td><td>Pass <code>message</code></td></tr>
              <tr><td>Error</td><td>Pass <code>error</code> prop (and optionally <code>message</code>)</td></tr>
              <tr><td>Disabled</td><td>Pass <code>disabled</code> prop</td></tr>
              <tr><td>Clearable</td><td>Pass <code>clearable</code> and <code>onClear</code> when field has a value</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SELECT */}
      <div className="container-wide py-large border-top" id="select">
        <h2 className="title80">Select</h2>
        <p className="bodyRegular30 text-primary doc-prose mt-100">
          A styled select dropdown. Pass <code>options</code> as an array of{' '}
          <code>{'{ value, label }'}</code> objects.
        </p>

        <div className="doc-table-wrap mt-200">
          <table className="doc-table">
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>options</code></td><td><code>SelectOption[]</code></td><td>—</td><td>Array of <code>{'{value, label}'}</code> options (required)</td></tr>
              <tr><td><code>label</code></td><td>string</td><td>—</td><td>Field label text</td></tr>
              <tr><td><code>value</code></td><td>string</td><td>—</td><td>Controlled selected value</td></tr>
              <tr><td><code>placeholder</code></td><td>string</td><td>—</td><td>Placeholder shown when no option is selected</td></tr>
              <tr><td><code>message</code></td><td>string</td><td>—</td><td>Helper or error message below the field</td></tr>
              <tr><td><code>icon</code></td><td>string</td><td>—</td><td>Leading icon — Material Symbols name</td></tr>
              <tr><td><code>error</code></td><td>boolean</td><td><code>false</code></td><td>Error state</td></tr>
              <tr><td><code>disabled</code></td><td>boolean</td><td><code>false</code></td><td>Disabled state</td></tr>
              <tr><td><code>onChange</code></td><td><code>(value: string) =&gt; void</code></td><td>—</td><td>Change handler — receives the selected value string</td></tr>
              <tr><td><code>name</code></td><td>string</td><td>—</td><td>Select name attribute</td></tr>
              <tr><td><code>id</code></td><td>string</td><td>—</td><td>Select id attribute</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className="title50 mt-400 mb-100">Basic Usage</h3>
        <div className="doc-preview" style={{ maxWidth: 400 }}>
          <span className="doc-preview-label">Live</span>
          <Select
            label="Favorite Team"
            options={teamOptions}
            value={selectValue}
            placeholder="Select a team..."
            onChange={setSelectValue}
          />
        </div>
        <div className="doc-code-block mt-200">
          <code>{`const [team, setTeam] = useState('')

const teamOptions = [
  { value: 'wolves', label: 'Minnesota Timberwolves' },
  { value: 'lynx', label: 'Minnesota Lynx' },
  { value: 'sounders', label: 'Seattle Sounders FC' },
]

<Select
  label="Favorite Team"
  options={teamOptions}
  value={team}
  placeholder="Select a team..."
  onChange={setTeam}
/>`}</code>
        </div>

        <h3 className="title50 mt-400 mb-100">With Icon &amp; Helper</h3>
        <div className="doc-preview" style={{ maxWidth: 400 }}>
          <span className="doc-preview-label">Live</span>
          <Select
            label="Seat Section"
            icon="event_seat"
            options={sectionOptions}
            placeholder="Choose section..."
            message="Prices vary by section."
          />
        </div>

        <h3 className="title50 mt-400 mb-100">All States</h3>
        <div className="doc-preview" style={{ maxWidth: 400 }}>
          <span className="doc-preview-label">Live</span>
          <div className="doc-demo-col">
            <Select
              label="Default"
              options={sectionOptions}
              placeholder="Choose section..."
            />
            <Select
              label="Has Value"
              options={sectionOptions}
              value="floor-a"
              onChange={() => {}}
            />
            <Select
              label="Error State"
              options={sectionOptions}
              placeholder="Choose section..."
              error
              message="Please select a valid section."
            />
            <Select
              label="Disabled"
              options={sectionOptions}
              value="lower-101"
              disabled
              onChange={() => {}}
            />
          </div>
        </div>
      </div>

      {/* PREV / NEXT */}
      <div className="doc-prevnext">
        <Link className="doc-prevnext-prev surface-ghost scale-700" to="/documentation/list-rows">
          <span className="icon">arrow_back</span>
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Previous</span>
            <span className="doc-prevnext-title">List Rows &amp; Cards</span>
          </div>
        </Link>
        <Link className="doc-prevnext-next surface-ghost scale-700" to="/documentation/navigation">
          <div className="doc-prevnext-text">
            <span className="doc-prevnext-label">Next</span>
            <span className="doc-prevnext-title">Navigation</span>
          </div>
          <span className="icon">arrow_forward</span>
        </Link>
      </div>
    </DocShell>
  )
}
