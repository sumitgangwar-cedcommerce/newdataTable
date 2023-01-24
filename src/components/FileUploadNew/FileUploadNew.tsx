import React, { useId, useRef, useState } from 'react';
import { FlexLayout } from '../FlexLayout';
import Progressbar from '../Progress/Progressbar';
import './FileUploadNew.css';
const FileUploadNew = ({ multiple = true, drag, disabled }: UploadI) => {
    const [filesData, setFilesData] = useState<any | null>([]);
    const [flag, setflag] = useState(false);
    const inputUploadRef = useRef<HTMLInputElement>(null);
    const inputWrapperRef = useRef<HTMLDivElement>(null);
    const id = useId();
    const handleInputChange = (event: any) => {
        const files = event.target.files;
        setFilesData([...filesData, ...files])
        function readAndPreview(file: any) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setflag(false)
            };
            reader.onloadstart = () => {
                setflag(true)
            }
            reader.readAsDataURL(file);
        }
        if (files) {
            Array.prototype.forEach.call(files, readAndPreview);
        }
    };

    const handleFiles = (e: any) => {
        setFilesData([...filesData, ...e])
    }
    function handleDragEnter(e: any) {
        e.stopPropagation();
        e.preventDefault();
    }

    function handleDragOver(e: any) {
        e.stopPropagation();
        e.preventDefault();
    }
    function handleDragLeave(e: any) {
        e.stopPropagation();
        e.preventDefault();
    }
    function handleDrop(e: any) {
        e.stopPropagation();
        e.preventDefault();
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }
    // converting bytes to kb , mb according to its size
    const formatBytes = (bytes: any) => {
        let units = ['B', 'KB', 'MB']
        let i = 0
        for (i; bytes > 1024; i++) {
            bytes /= 1024;
        }
        return bytes.toFixed(1) + ' ' + units[i]
    }

    const removeImage = (i: any) => {
        let a = filesData.filter((item: any) => item.name !== i.name)
        console.log(a)
        setFilesData([...a])
    }

    return (
        <div ref={inputWrapperRef} className="inte-DragDropZone"
            onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}>
            <label htmlFor="file">
                <input type="file" ref={inputUploadRef} id="file" className="inte-upload-InputBox" onChange={(e: any) => handleInputChange(e)} multiple={multiple} />
                <FlexLayout direction="vertical" valign="center">
                    <span>
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="3" width="40" height="40" rx="20" fill="#E0E1E3" />
                            <g clip-path="url(#clip0_2527_210733)">
                                <path d="M29.9924 28.3257C30.8052 27.8826 31.4473 27.1814 31.8174 26.3328C32.1874 25.4842 32.2643 24.5365 32.036 23.6394C31.8076 22.7422 31.287 21.9466 30.5563 21.3782C29.8256 20.8098 28.9264 20.5009 28.0006 20.5003H26.9506C26.6983 19.5246 26.2282 18.6188 25.5755 17.851C24.9228 17.0832 24.1045 16.4733 23.1822 16.0673C22.2598 15.6612 21.2574 15.4696 20.2504 15.5067C19.2433 15.5438 18.2577 15.8087 17.3678 16.2815C16.4778 16.7543 15.7066 17.4228 15.1122 18.2365C14.5178 19.0503 14.1156 19.9882 13.9358 20.9798C13.756 21.9714 13.8034 22.9909 14.0743 23.9615C14.3453 24.9322 14.8327 25.8288 15.5 26.5839M23.0004 30.5008V23.0004M23.0004 23.0004L26.3339 26.3328M23.0004 23.0004L19.6669 26.3328" stroke="#1C2433" stroke-width="1.66674" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <rect x="3" y="3" width="40" height="40" rx="20" stroke="#ECEDEE" stroke-width="6" />
                            <defs>
                                <clipPath id="clip0_2527_210733">
                                    <rect width="20.0009" height="20.0009" fill="white" transform="translate(13 13)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span>
                        <button className='inte-upload-btn'>Click to upload</button>
                        <span>or drag and drop</span>
                    </span>
                    <span>SVG, PNG, JPG or GIF (max. 800x400px)</span>
                </FlexLayout>
            </label>
            <img src={filesData.imagePreview} width="50" />
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {filesData.map((i: any, index: any) => {
                    const img = URL.createObjectURL(i)
                    return (
                        <div key={index} className="inte--upload__card" id={id}>
                            <div><img src={img} alt="img" width="50" height="50" />
                                {flag && <Progressbar
                                    percentage={20}
                                    progessThickness="thin"
                                />}</div>
                            <div className="inte--upload__btn">
                                <div>
                                    <div style={{ fontSize: "16px" }}>{i.name}</div>
                                    <div>{formatBytes(i.size)}</div>
                                </div>
                                <div>
                                    <button onClick={() => removeImage(i)}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3.99995H3.33333M3.33333 3.99995H14M3.33333 3.99995V13.3333C3.33333 13.6869 3.47381 14.026 3.72386 14.2761C3.9739 14.5261 4.31304 14.6666 4.66667 14.6666H11.3333C11.6869 14.6666 12.0261 14.5261 12.2761 14.2761C12.5262 14.026 12.6667 13.6869 12.6667 13.3333V3.99995H3.33333ZM5.33333 3.99995V2.66662C5.33333 2.31299 5.47381 1.97386 5.72386 1.72381C5.9739 1.47376 6.31304 1.33328 6.66666 1.33328H9.33333C9.68695 1.33328 10.0261 1.47376 10.2761 1.72381C10.5262 1.97386 10.6667 2.31299 10.6667 2.66662V3.99995" stroke="#1C2433" stroke-width="1.33327" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.6665 7.33334V11.3332M9.33305 7.33334V11.3332" stroke="#1C2433" stroke-width="1.33327" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            {flag && <div>loading</div>}
        </div>
    )
}
export interface UploadI {
    multiple?: boolean;
    drag?: boolean;
    disabled?: boolean;
}
export default FileUploadNew