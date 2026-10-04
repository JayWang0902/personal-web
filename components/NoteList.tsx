import Link from "next/link";
import { formatDate, type Note } from "@/lib/notes";

// Notes grouped by year: the year is shown only on the first note of each year.
export function NoteList({ notes }: { notes: Note[] }) {
  if (notes.length === 0) {
    return <p className="text-sm text-neutral-500 dark:text-neutral-400">Nothing here yet.</p>;
  }

  return (
    <ul className="text-sm">
      {notes.map((note, i) => {
        const year = note.date.slice(0, 4);
        const showYear = i === 0 || notes[i - 1].date.slice(0, 4) !== year;
        return (
          <li key={note.slug}>
            <Link
              href={`/notes/${note.slug}`}
              className="group flex items-baseline gap-4 py-2"
            >
              <span className="w-10 shrink-0 tabular-nums text-neutral-400 dark:text-neutral-500">
                {showYear ? year : ""}
              </span>
              <span className="flex-1 group-hover:underline group-hover:underline-offset-4 group-hover:decoration-neutral-300 dark:group-hover:decoration-neutral-600">
                {note.title}
              </span>
              <span className="shrink-0 tabular-nums text-neutral-400 dark:text-neutral-500">
                {formatDate(note.date, { month: "short", day: "numeric" })}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
