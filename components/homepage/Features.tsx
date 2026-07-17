import Image from "next/image";

const features = [
  {
    title: "Understand your match score",
    description:
      "See how your profile lines up with each role before you apply. Get a clear breakdown of what fits and what’s missing.",
    accent: "border-transparent",
  },
  {
    title: "AI-Powered Job Matching",
    description:
      "Stop guessing which jobs are worth applying to. HiredPilot scores every role against your actual skills so you focus on the ones that matter.",
    accent: "border-success-alt",
  },
  {
    title: "Focus on the right roles",
    description:
      "Filter out low fit jobs and stay on the ones that actually matter. Spend less time sorting and more time applying.",
    accent: "border-transparent",
  },
] as const;

export function Features() {
  return (
    <section aria-labelledby="confidence-heading" className="grid border-x border-border bg-surface lg:grid-cols-2">
      <div className="order-2 flex items-center justify-center border-t border-border bg-surface-muted p-8 sm:p-14 lg:order-1 lg:border-r lg:border-t-0 lg:p-16">
        <Image
          src="/images/agnet-log.png"
          alt="HiredPilot agent log finding roles, filtering matches, and preparing an application"
          width={2144}
          height={1656}
          className="landing-card-shadow h-auto w-full max-w-2xl"
        />
      </div>

      <div className="order-1 flex flex-col justify-center lg:order-2">
        <h2 id="confidence-heading" className="px-8 py-12 text-3xl font-semibold tracking-tight text-text-primary sm:px-16 sm:py-16 lg:px-20 lg:text-5xl">
          Apply With More
          <span className="block">Confidence, Every Time</span>
        </h2>

        <ul className="border-t border-border">
          {features.map((feature) => (
            <li key={feature.title} className={`border-l-2 ${feature.accent} border-b border-border px-8 py-8 last:border-b-0 sm:px-16 lg:px-20`}>
              <h3 className="text-base font-semibold text-text-primary">{feature.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-text-secondary">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
