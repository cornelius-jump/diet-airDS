import {DocumentTable, FieldDef} from './DocumentTable'

const playerFields: FieldDef[] = [
  // ── Identity ──────────────────────────────────────────────────────────
  {type: 'section', label: 'Identity'},
  {path: 'name',     label: 'name',     type: 'text'},
  {path: 'number',   label: 'number',   type: 'text'},
  {path: 'position', label: 'position', type: 'text'},
  {path: 'sport',    label: 'sport',    type: 'select', options: ['NBA', 'WNBA', 'NWSL', 'MLS', 'NCAA', 'MLB']},
  {path: 'team',     label: 'team',     type: 'reference', to: 'team'},

  // ── Media ─────────────────────────────────────────────────────────────
  {type: 'section', label: 'Media'},
  {path: 'headshot', label: 'headshot', type: 'image'},
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PlayerTable(props: any) {
  return <DocumentTable {...props} tableFields={playerFields} />
}
