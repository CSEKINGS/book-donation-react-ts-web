/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_APIURL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
