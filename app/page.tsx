import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-16 sm:px-10 lg:px-16">
        <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary dark:bg-primary/15 dark:text-primary-foreground">
              Link shortener built for sharing and growth
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
                Turn long URLs into polished short links in seconds.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Create branded, memorable short links for social posts, email campaigns,
                and everyday sharing. Manage your links with speed, security, and
                effortless organization.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild>
                <Link href="#features">Explore features</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#get-started">Get started</Link>
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white/80 p-8 shadow-lg shadow-zinc-200/60 dark:border-zinc-800 dark:bg-zinc-950/90 dark:shadow-zinc-950/20">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                Quick preview
              </p>
              <div className="rounded-3xl bg-zinc-100 p-6 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50">
                <p className="text-sm text-zinc-500 dark:text-zinc-400">Original link</p>
                <p className="mt-2 break-words text-base font-medium">https://example.com/very/long/url/with-tracking</p>
                <div className="mt-6 rounded-2xl bg-zinc-950/5 p-5 dark:bg-white/5">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">Short link</p>
                  <div className="mt-2 flex items-center justify-between gap-4 rounded-2xl bg-white/90 px-4 py-3 text-sm font-medium text-zinc-950 shadow-sm dark:bg-zinc-950 dark:text-zinc-50">
                    <span>link.app/r4nd0m</span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/15 dark:text-primary-foreground">Copied</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="mt-20 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "Instant link creation",
              description:
                "Shorten any URL instantly and share it with one click. Keep your links clean and easy to remember.",
            },
            {
              title: "Custom alias support",
              description:
                "Pick a custom slug for your short links so they look professional and stay on brand.",
            },
            {
              title: "Share with confidence",
              description:
                "Use a mobile-friendly experience that works across apps, chat, and social media.",
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-zinc-950/20">
              <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">{feature.title}</h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </section>

        <section id="get-started" className="mt-20 rounded-3xl bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-10 text-zinc-950 dark:bg-zinc-950/80 dark:text-zinc-50">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Ready to shorten?</p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Launch your first short link today.</h2>
              <p className="max-w-2xl text-base leading-7 text-zinc-700 dark:text-zinc-300">
                Build better sharing experiences with a fast, lightweight app designed around your links.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/">Create a link</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">View dashboard</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
