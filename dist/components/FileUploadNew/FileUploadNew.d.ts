import './FileUploadNew.css';
declare const FileUploadNew: ({ multiple, drag, disabled }: UploadI) => JSX.Element;
export interface UploadI {
    multiple?: boolean;
    drag?: boolean;
    disabled?: boolean;
}
export default FileUploadNew;
