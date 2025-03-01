"use client";

import React, { useRef, useState, ChangeEvent } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input"; // shadcn Input component
import { DocumentUpload, Edit } from "iconsax-react";
import { XCircle } from "lucide-react";

interface FileInputCardProps {
  title: string;
  subtitle?: string;
  imageClassName?: string;
  buttonClassName?: string;
  onFileChange?: (file: File) => void;
}

export function InputFile({
  title,
  subtitle,
  imageClassName,
  buttonClassName,
  onFileChange,
}: FileInputCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (onFileChange) onFileChange(file);
    }
  };

  // Trigger file input click
  const handleCardClick = () => {
    fileInputRef.current?.click();
  };

  // Remove the selected file
  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the card click
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="group hover:cursor-pointer" onClick={handleCardClick}>
      <div
        className={cn(
          "relative flex items-center justify-between rounded-xl overflow-hidden bg-secondary",
          imageClassName
        )}
      >
        {/* Left Section */}
        <div className="flex items-center px-5 py-5 flex-1">
          <div className="flex-shrink-0 flex items-center justify-center bg-gray-100 rounded">
            <DocumentUpload size={30} color="#6a6d76" variant="Bold" />
          </div>
          <div className="ml-2 max-w-40">
            <h4 className="font-medium">{title}</h4>
            {subtitle && (
              <p className="text-sm text-muted-foreground">{subtitle}</p>
            )}
            {selectedFile && (
              <p className="text-sm text-gray-600 mt-1 truncate">
                {selectedFile.name}
              </p>
            )}
          </div>
        </div>

        {/* Right Button */}
        <div
          className={cn(
            "absolute right-0 bg-primary text-white p-2 rounded-full mx-6 hover:bg-primary/90",
            buttonClassName
          )}
        >
          {selectedFile ? (
            <XCircle className="h-4 w-4" onClick={handleRemoveFile} />
          ) : (
            <Edit size={16} color="#ffffff" />
          )}
        </div>
      </div>
      {/* Hidden File Input */}
      <Input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}
