import { JSX } from "solid-js";

export interface ReplOptions
    extends JSX.IframeHTMLAttributes<HTMLIFrameElement> {
    baseUrl?: string;
    height?: number | string;
    isInteractive?: boolean;
    withHeader?: boolean;
    withActionBar?: boolean;
    layout?: 'vertical' | 'responsive';
    edtiableTabs?: boolean;
    data?: string;
    children?: any;
}