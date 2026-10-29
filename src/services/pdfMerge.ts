// PDF 結合のダミー実装（後で本物に差し替える）

export async function mergePdfFiles(files: File[]): Promise<Blob> {
  // TODO: pdf-lib などで本物の結合処理を実装する
  const blob = new Blob([], { type: "application/pdf" });
  return blob;
}
