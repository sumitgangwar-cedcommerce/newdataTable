import { FC } from "react";
declare const CopyClipboard: FC<CopyClipboardI>;
export interface CopyClipboardI {
    value?: string | any;
    label?: string | any;
    align?: "fill" | "center" | "end" | "none";
    timeout?: number;
}
export default CopyClipboard;
