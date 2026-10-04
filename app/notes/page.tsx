import type { Metadata } from "next";
import { NoteList } from "@/components/NoteList";
import { getNotes } from "@/lib/notes";

export const metadata: Metadata = {
  title: "Notes",
  description: "An open notebook: unpolished thoughts on software, AI systems, and products.",
};

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <section>
      <h1 className="mb-2 font-semibold tracking-tight">Notes</h1>
      <p className="mb-10 text-sm text-neutral-500 dark:text-neutral-400">
        An open notebook. Half-formed thoughts, mostly about tech.
      </p>
      <NoteList notes={notes} />
    </section>
  );
}
