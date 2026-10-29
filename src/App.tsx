import React, { useState } from "react";
import PdfUploader from "./components/PdfUploader";
import PdfList from "./components/PdfList";
import MergeButton from "./components/MergeButton";

const App: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const handleFilesSelected = (newFiles: File[]) => {
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>PDFCraft</h1>
      <p>PDF をアップロードして結合するツール</p>

      <PdfUploader onFilesSelected={handleFilesSelected} />
      <PdfList files={files} onRemove={handleRemoveFile} />
      <MergeButton files={files} />

      <hr style={{ margin: "32px 0" }} />

      <h2>工事中の機能</h2>
      <button disabled style={{ marginRight: "8px" }}>ページ削除（工事中）</button>
      <button disabled style={{ marginRight: "8px" }}>PDF 分割（工事中）</button>
      <button disabled style={{ marginRight: "8px" }}>PDF 回転（工事中）</button>
      <button disabled>PDF 圧縮（工事中）</button>
    </div>
  );
};

export default App;
