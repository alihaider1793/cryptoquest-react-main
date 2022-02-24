/// <reference types="react-scripts" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare interface Window {
  solana: any;
}
