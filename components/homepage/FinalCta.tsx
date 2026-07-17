import Link from "next/link";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-heading" className="landing-hero-glow border-x border-border px-6 py-20 text-center sm:py-24">
      <h2 id="final-cta-heading" className="mx-auto max-w-4xl text-4xl font-semibold tracking-tight text-text-black sm:text-5xl lg:text-6xl">
        Your next job search can feel a
        <span className="block">lot less overwhelming</span>
      </h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-text-secondary">
        Set up your profile, upload your resume, and start finding matches in minutes.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/login" className="landing-button-primary">
          Get Started <span aria-hidden="true" className="ml-2">›</span>
        </Link>
        <Link href="/find-jobs" className="landing-button-secondary">
          Find Your First Match
        </Link>
      </div>
    </section>
  );
}
