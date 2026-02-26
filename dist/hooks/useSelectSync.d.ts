interface UseSelectSyncOptions {
    initialDisplay?: string;
}
interface UseSelectSyncResult {
    displayText: string;
    isOpen: boolean;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleFocus: () => void;
    handleBlur: () => void;
}
export declare function useSelectSync(options?: UseSelectSyncOptions): UseSelectSyncResult;
export {};
