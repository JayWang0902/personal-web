// Every note file exports `metadata` alongside its default component.
declare module "*.mdx" {
  export const metadata: import("@/lib/notes").NoteMeta;
}
