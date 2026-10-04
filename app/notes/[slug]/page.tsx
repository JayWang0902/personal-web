import type { Metadata } from "next";
import { formatDate, getNotes } from "@/lib/notes";

export const dynamicParams = false;

export async function generateStaticParams() {
  const notes = await getNotes();
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/notes/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`@/content/notes/${slug}.mdx`);
  return { title: metadata.title, description: metadata.description };
}

export default async function NotePage({ params }: PageProps<"/notes/[slug]">) {
  const { slug } = await params;
  const { default: Note, metadata } = await import(`@/content/notes/${slug}.mdx`);

  return (
    <article>
      <header className="mb-10">
        <h1 className="text-xl font-semibold tracking-tight">{metadata.title}</h1>
        <time
          dateTime={metadata.date}
          className="mt-2 block text-sm text-neutral-500 dark:text-neutral-400"
        >
          {formatDate(metadata.date, { year: "numeric", month: "long", day: "numeric" })}
        </time>
      </header>
      <div className="prose prose-neutral dark:prose-invert prose-a:underline-offset-4 prose-headings:font-semibold prose-headings:tracking-tight">
        <Note />
      </div>
    </article>
  );
}
