import type { TagProps, ChipProps } from './Tag.types'

export function Tag({ children, teamColor = false, icon, iconPosition = 'leading' }: TagProps) {
  const classes = [
    'tag',
    teamColor ? 'tag-team-color' : '',
    icon && iconPosition === 'leading' ? 'tag-icon-leading' : '',
    icon && iconPosition === 'trailing' ? 'tag-icon-trailing' : ''
  ]
    .filter(Boolean)
    .join(' ')

  const iconEl = icon ? (
    <span className="material-symbols-rounded" aria-hidden="true">
      {icon}
    </span>
  ) : null

  return (
    <span className={classes}>
      {iconPosition === 'leading' && iconEl}
      {children}
      {iconPosition === 'trailing' && iconEl}
    </span>
  )
}

export function Chip({
  children,
  surface = 'bordered',
  teamColor = false,
  icon,
  iconPosition = 'leading',
  disabled = false,
  onClick
}: ChipProps) {
  const surfaceClass = surface === 'bordered' ? 'surface-borderNeutral' : 'surface-ghost'

  const classes = [
    'chip',
    surfaceClass,
    'scale-300',
    teamColor ? 'chip-team-color' : '',
    icon && iconPosition === 'leading' ? 'chip-icon-leading' : '',
    icon && iconPosition === 'trailing' ? 'chip-icon-trailing' : '',
    disabled ? 'is-disabled' : ''
  ]
    .filter(Boolean)
    .join(' ')

  const iconEl = icon ? (
    <span className="material-symbols-rounded" aria-hidden="true">
      {icon}
    </span>
  ) : null

  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {iconPosition === 'leading' && iconEl}
      {children}
      {iconPosition === 'trailing' && iconEl}
    </button>
  )
}
