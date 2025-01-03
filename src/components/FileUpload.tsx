"use client";

import { UploadDropzone } from "@/lib/uploadthing";

import "@uploadthing/react/styles.css"
import { X } from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
    onChange: (url? : string) => void;
    value: string;
    endPoint: "messageFile" | "serverImage";
}

const FileUpload = ({
    onChange,
    value,
    endPoint,
}: FileUploadProps) => {

    const fileType = value?.split(".").pop();

    if (value && fileType !== "pdf") {
        return (
            <div className="relative h-20 w-20">
                <Image
                    fill
                    src={value}
                    alt="Upload"
                    className="rounded-full"
                />
                <button 
                    onClick={() => onChange("")}
                    className="absolute top-0 right-0 p-1 text-white shadow-sm bg-rose-500 rounded-full"
                    type="button"
                >
                    <X className="h-4 w-4"/>
                </button>
            </div>
        )
    }

    return ( 
        <UploadDropzone
            endpoint={endPoint}
            onClientUploadComplete={(res) => {
                onChange(res?.[0].url);
            }}
            onUploadError={(error: Error) => {
                console.log(error);
            }}
        />
     );
}
 
export default FileUpload;

