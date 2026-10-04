import Link from "next/link";
import { site } from "@/lib/site";

export function Header() {
  return (
    <header className="flex items-baseline justify-between">
      <Link href="/" className="font-semibold tracking-tight">
        {site.name}
      </Link>
      <nav className="text-sm text-neutral-500 dark:text-neutral-400">
        <Link href="/notes" className="hover:text-neutral-900 dark:hover:text-neutral-100">
          Notes
        </Link>
      </nav>
    </header>
  );
}
