import {DocumentTable, FieldDef} from './DocumentTable'

const opposingTeamFields: FieldDef[] = [
  // ── Identity ──────────────────────────────────────────────────────────
  {type: 'section', label: 'Identity'},
  {path: 'name',           label: 'name',      type: 'text'},
  {path: 'teamId.current', label: 'teamId',    type: 'text'},
  {path: 'shortName',      label: 'shortName', type: 'text'},
  {path: 'city',           label: 'city',      type: 'text'},
  {path: 'league',         label: 'league',    type: 'select', options: ['NBA', 'WNBA', 'MLS', 'NWSL', 'USL', 'NCAA', 'International']},

  // ── Brand ─────────────────────────────────────────────────────────────
  {type: 'section', label: 'Brand'},
  {path: 'primaryColor', label: 'primaryColor', type: 'color'},

  // ── Logo ──────────────────────────────────────────────────────────────
  {type: 'section', label: 'Logo'},
  {path: 'logo', label: 'logo', type: 'image'},
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function OpposingTeamTable(props: any) {
  return <DocumentTable {...props} tableFields={opposingTeamFields} />
}
