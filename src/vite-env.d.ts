/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AVATAR_URL?: string;
  readonly VITE_CITY_PROBE_SCREENSHOTS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
