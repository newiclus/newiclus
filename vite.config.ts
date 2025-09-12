/// <reference types="vitest/config" />
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      //provider: "playwright",
      instances: [{ browser: "chromium" }],
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components/*": "src/components/*",
      "@hooks/*": "src/hooks/*",
      "@utils/*": "src/utils/*",
      "@assets/*": "src/assets/*",
      "@context/*": "src/context/*",
      "@types/*": "src/types/*",
    },
  },
});
