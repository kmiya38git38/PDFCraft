import React, { useState } from "react";
import { mergePdfFiles } from "../services/pdfMerge";

type MergeButtonProps = {
  files: File[];
};

export const MergeButton: React.FC<MergeButtonProps> = ({ files }) => {
  const [isMerging, setIsMerging] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const handleMerge = async () => {
    if (files.length === 0) return;
    setIsMerging(true);
    try {
      const mergedBlob = await mergePdfFiles(files);
      const url = URL.createObjectURL(mergedBlob);
      setDownloadUrl(url);
    } finally {
      setIsMerging(false);
    }
  };

  return (
    <div style={{ marginTop: "16px" }}>
      <button onClick={handleMerge} disabled={isMerging || files.length === 0}>
        {isMerging ? "結合中..." : "PDF を結合する"}
      </button>

      {downloadUrl && (
        <div style={{ marginTop: "8px" }}>
          <a href={downloadUrl} download="merged.pdf">
            結合した PDF をダウンロード
          </a>
        </div>
      )}
    </div>
  );
};

export default MergeButton;
