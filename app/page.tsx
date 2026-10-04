import Link from "next/link";
import { NoteList } from "@/components/NoteList";
import { getNotes } from "@/lib/notes";
import { site } from "@/lib/site";

const RECENT_NOTES = 5;

export default async function Home() {
  const notes = await getNotes();
  const { github, linkedin, email } = site.links;
  const contacts = [
    { label: "GitHub", href: github },
    { label: "LinkedIn", href: linkedin },
    { label: "Email", href: email && `mailto:${email}` },
  ].filter((c) => c.href);

  return (
    <div className="space-y-16">
      <section className="space-y-4 leading-relaxed text-neutral-700 dark:text-neutral-300">
        <p>
          Hi, I&apos;m Jay. I&apos;m a Computer Science master&apos;s student at Duke, mostly
          thinking about software engineering, AI systems, and agents — and trying to build
          things people actually use.
        </p>
        <p>
          Lately I&apos;ve been into applied AI and agentic systems, plus the backend and
          platform work that makes them hold up in practice. I&apos;m also curious about a
          softer question: why some products become genuinely useful, while others — often
          technically impressive ones — never quite do.
        </p>
        <p>This site is where I keep notes on all of that. They&apos;re unpolished on purpose.</p>
      </section>

      <section>
        <h2 className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">Notes</h2>
        <NoteList notes={notes.slice(0, RECENT_NOTES)} />
        {notes.length > RECENT_NOTES && (
          <Link
            href="/notes"
            className="mt-4 inline-block text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            All notes →
          </Link>
        )}
      </section>

      {contacts.length > 0 && (
        <section>
          <h2 className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Elsewhere
          </h2>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-900 dark:decoration-neutral-600 dark:hover:decoration-neutral-100"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
