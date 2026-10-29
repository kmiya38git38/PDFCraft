import React from "react";

type PdfUploaderProps = {
  onFilesSelected: (files: File[]) => void;
};

export const PdfUploader: React.FC<PdfUploaderProps> = ({ onFilesSelected }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const pdfFiles = Array.from(files).filter((f) => f.type === "application/pdf");
    onFilesSelected(pdfFiles);
  };

  return (
    <div>
      <label>
        PDF ファイルを選択：
        <input type="file" accept="application/pdf" multiple onChange={handleChange} />
      </label>
    </div>
  );
};

export default PdfUploader;
