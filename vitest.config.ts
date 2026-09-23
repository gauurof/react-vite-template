import { mergeConfig } from "vite";
import viteConfig from "./vite.config.ts";
import { defineConfig } from "vitest/config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "happy-dom",
      setupFiles: ["./src/test/setup.ts"],
    },
  }),
);
