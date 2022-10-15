import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cart: resolve(__dirname, "cart.html"),
        details: resolve(__dirname, "details.html"),
        admin: resolve(__dirname, "admin.html"),
      },
    },
  },
});
