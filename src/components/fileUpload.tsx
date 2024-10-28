import { Button } from '@nextui-org/react';
import { CloseIcon, CloudUploadIcon, FileIcon } from './icons';
import { useState } from 'react';

interface Props {
  name: string;
  placeholder?: string;
  accept?: 'image/*' | 'video/*' | 'audio/*' | 'application/pdf';
  label?: string;
}

export default function FileUpload({
  name,
  placeholder = 'Drag and drop files here or click to upload',
  accept = 'application/pdf',
  label = "",
}: Props) {
  const [filename, setFilename] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first selected file
    if (file) {
      setFilename(file.name); // Update the state with the file name
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-sm max-w-md w-full mx-auto space-y-4">
      <div className="relative flex flex-col items-center justify-center w-full px-6 py-12 border-2 border-dashed border-black rounded-lg hover:bg-primary/10 transition-colors">
        <CloudUploadIcon className="w-12 h-12 text-black" />
        <p className="mt-4 text-lg font-medium text-black">{placeholder}</p>
        { label && <p className="mt-4 text-lg font-medium text-black">{label}</p>}
        <input
          name={name}
          type="file"
          accept={accept}
          multiple
          onChange={handleFileChange}
          className="absolute w-full h-full opacity-0 cursor-pointer"
        />
      </div>
      <div className="space-y-2 w-full">
        {filename && (
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileIcon className="w-6 h-6 text-primary" />
              <p>{filename}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
