import { ListRowProps, TextPairProps, TrailingTextProps, LeadingImageProps } from './ListRow.types';
export declare function ListRow({ leading, leadingGap, children, trailing, trailingGap, notTappable, disabled, onClick }: ListRowProps): import("react/jsx-runtime").JSX.Element;
/** Label + sublabel stacked pair for list row main content */
export declare function TextPair({ label, sublabel }: TextPairProps): import("react/jsx-runtime").JSX.Element;
/** Right-aligned label + sublabel for the trailing slot */
export declare function TrailingText({ label, sublabel }: TrailingTextProps): import("react/jsx-runtime").JSX.Element;
/** Image in leading slot */
export declare function LeadingImage({ src, alt, size }: LeadingImageProps): import("react/jsx-runtime").JSX.Element;
/** Team logo in leading slot (uses CSS variable --team-logo-url) */
export declare function LeadingLogo({ ariaLabel }: {
    ariaLabel?: string;
}): import("react/jsx-runtime").JSX.Element;
/** Circle container for icon or letter in leading slot */
export declare function CircleContainer({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
