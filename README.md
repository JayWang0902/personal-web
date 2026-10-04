# personal-web

Jay Wang's personal site. Next.js (App Router) + Tailwind CSS + MDX.

```bash
npm install
npm run dev   # http://localhost:3000
```

## Where things live

- `lib/site.ts`: name, description, and contact links (empty links are hidden)
- `app/page.tsx`: homepage intro text
- `content/notes/*.mdx`: one file per note; the filename becomes the URL (`/notes/<filename>`)

## Writing a note

Create `content/notes/my-note.mdx`:

```mdx
export const metadata = {
  title: "My note",
  date: "2026-10-04",
  description: "Optional one-liner for search engines and link previews.",
  draft: true, // optional: visible in `npm run dev`, hidden in production
};

Write in Markdown here.
```

Remove `draft` (or set it to `false`) to publish.

## Deploying (Vercel)

1. Push this repo to GitHub.
2. On vercel.com, sign in with GitHub, click **Add New → Project**, and import the repo. The defaults work.
3. Every push to `main` redeploys automatically. Add a custom domain later under **Settings → Domains**.
