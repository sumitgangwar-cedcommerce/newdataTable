import "./FormElement.css";
declare const TextArea: ({ type, placeHolder, value, onFocus, required, showHelp, onChange, onEnter, label, rows, error, readOnly, ...props }: TextfieldI) => JSX.Element;
export interface TextfieldI {
    onChange?: (e: string) => void;
    value?: string | number;
    label?: string;
    type?: "textarea" | "badge";
    placeHolder?: string;
    showHelp?: string;
    onEnter?: (arr: any) => void;
    onFocus?: boolean;
    readOnly?: boolean;
    id?: string;
    error?: boolean;
    rows?: number;
    required?: boolean;
}
export default TextArea;
