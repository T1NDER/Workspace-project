/// <reference types="vite/client" />

// Декларация для CSS-файлов
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

// Декларация для изображений
declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.jpeg" {
  const value: string;
  export default value;
}

declare module "*.gif" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}

declare module "*.webp" {
  const value: string;
  export default value;
}