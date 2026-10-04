import Link from "next/link";

export default function NotFound() {
  return (
    <section className="space-y-4">
      <h1 className="font-semibold tracking-tight">Not found</h1>
      <p className="text-neutral-500 dark:text-neutral-400">
        Nothing lives here. <Link href="/" className="underline underline-offset-4">Go home</Link>.
      </p>
    </section>
  );
}
