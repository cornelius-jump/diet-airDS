/**
 * docHelpers.ts — Port of walkthrough.js utility functions for use in React doc pages.
 * For HTML-injection pages, call attachHelpersToWindow() in a useEffect after injection
 * so that inline onclick handlers in the injected HTML continue to work.
 */
export declare function syncHasValue(fieldId: string, input: HTMLInputElement): void;
export declare function clearInput(fieldId: string, inputId: string): void;
export declare function syncSelect(_fieldId: string, displayId: string, selectEl: HTMLSelectElement): void;
export declare function openSelect(fieldId: string): void;
export declare function closeSelect(fieldId: string): void;
/** Attach all helper functions to window so inline onclick handlers in injected HTML work. */
export declare function attachHelpersToWindow(): void;
