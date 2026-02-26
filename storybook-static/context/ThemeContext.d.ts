import { ReactNode } from '../../node_modules/react';
type Theme = 'wolves' | 'lynx' | 'courage' | 'summit' | 'bucknell' | 'sounders' | 'reign' | 'ncfc' | 'jump' | 'athletics';
type Mode = 'light' | 'dark';
interface ThemeContextValue {
    theme: Theme;
    mode: Mode;
    setTheme: (theme: Theme) => void;
    setMode: (mode: Mode) => void;
}
export declare function ThemeProvider({ children }: {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};
