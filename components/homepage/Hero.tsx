import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <>
      <section className="landing-hero-glow border-x border-t border-border px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight text-text-black sm:text-5xl lg:text-6xl">
            Job hunting is hard.
            <span className="block">Your tools shouldn&apos;t be.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary">
            Stop applying blind. HiredPilot finds the jobs, researches the companies, and
            <span className="block sm:inline"> gives you everything you need to stand out.</span>
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/login" className="landing-button-primary">
              Get Started <span aria-hidden="true" className="ml-2">›</span>
            </Link>
            <Link href="/find-jobs" className="landing-button-secondary">
              Find Your First Match
            </Link>
          </div>
        </div>
      </section>

      <section aria-label="Product dashboard preview" className="border-x border-t border-border bg-surface-tertiary px-4 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <Image
          src="/images/dashboard-demo.png"
          alt="HiredPilot dashboard showing job statistics, recent activity, and company research activity"
          width={4788}
          height={2416}
          priority
          className="landing-browser-shadow mx-auto h-auto w-full rounded-xl"
        />
      </section>
    </>
  );
}
