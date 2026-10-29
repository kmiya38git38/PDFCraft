import React from "react";

type PdfListProps = {
  files: File[];
  onRemove: (index: number) => void;
};

export const PdfList: React.FC<PdfListProps> = ({ files, onRemove }) => {
  if (files.length === 0) {
    return <p>選択中の PDF はありません。</p>;
  }

  return (
    <div style={{ marginTop: "16px" }}>
      <h3>選択中の PDF</h3>
      <ul>
        {files.map((file, idx) => (
          <li key={idx}>
            {file.name}{" "}
            <button onClick={() => onRemove(idx)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PdfList;
