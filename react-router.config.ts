import { vercelPreset } from "@vercel/react-router/vite";
import type { Config } from "@react-router/dev/config";

const config = {
  ssr: true,
  presets: [vercelPreset()],
} satisfies Config;

export default config;
