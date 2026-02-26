export interface TopBarProps {
    /** Team logo URL */
    logoSrc?: string;
    /** Team name (used for alt text) */
    teamName?: string;
    /** Short team name (shown on mobile) */
    shortName?: string;
    /** Full team name (shown on tablet+) */
    fullName?: string;
    /** Home link href */
    href?: string;
    /** Trailing actions slot (buttons, icon buttons, auth) */
    actions?: React.ReactNode;
}
