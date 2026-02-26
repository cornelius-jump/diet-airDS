import { ReactNode } from '../../node_modules/react';
interface SidebarLink {
    href: string;
    number: string;
    label: string;
}
interface DocLayoutProps {
    sidebar: SidebarLink[];
    children: ReactNode;
}
export default function DocLayout({ sidebar, children }: DocLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
