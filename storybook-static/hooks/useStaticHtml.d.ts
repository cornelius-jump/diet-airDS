interface StaticHtmlResult {
    html: string;
    loading: boolean;
    error: boolean;
}
/**
 * Fetches a static .html file, parses it, and returns the innerHTML
 * of the first `.doc-main` element found inside it.
 */
export declare function useStaticHtml(url: string): StaticHtmlResult;
export {};
