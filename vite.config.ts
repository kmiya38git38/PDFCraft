import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/pdfcraft/", // ← GitHub Pages のリポジトリ名に合わせる
  plugins: [react()]
});
