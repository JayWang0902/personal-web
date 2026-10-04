import fs from "node:fs";
import path from "node:path";

export type NoteMeta = {
  title: string;
  date: string; // YYYY-MM-DD
  description?: string;
  draft?: boolean; // drafts show up in `npm run dev` but not in production
};

export type Note = NoteMeta & { slug: string };

const NOTES_DIR = path.join(process.cwd(), "content/notes");

// Each .mdx file in content/notes is a note; its filename is the URL slug.
export async function getNotes(): Promise<Note[]> {
  const slugs = fs
    .readdirSync(NOTES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));

  const notes = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/content/notes/${slug}.mdx`);
      return { slug, ...metadata };
    }),
  );

  return notes
    .filter((note) => process.env.NODE_ENV !== "production" || !note.draft)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string, opts: Intl.DateTimeFormatOptions) {
  return new Date(date).toLocaleDateString("en-US", { timeZone: "UTC", ...opts });
}
