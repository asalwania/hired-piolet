import Image from "next/image";

const features = [
  {
    title: "Find jobs that actually fit",
    description:
      "Search by title and location or paste a job link. Get matched roles you can quickly scan.",
    accent: "border-accent",
  },
  {
    title: "Know the Company Before You Apply",
    description:
      "Stop guessing what a company is about. HiredPilot browses their site and gives you everything you need to apply with confidence.",
    accent: "border-transparent",
  },
  {
    title: "Keep track of every application",
    description:
      "Keep a clear view of every job you’ve found, tailored. Your activity and progress all stay in one simple place.",
    accent: "border-transparent",
  },
] as const;

export function HowItWorks() {
  return (
    <section aria-labelledby="manage-heading" className="grid border-x border-t border-border bg-surface lg:grid-cols-2">
      <div className="flex flex-col justify-center">
        <h2 id="manage-heading" className="px-8 py-12 text-3xl font-semibold tracking-tight text-text-primary sm:px-16 sm:py-16 lg:px-20 lg:text-5xl">
          Manage Your Job
          <span className="block">Search With Ease</span>
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

      <div className="flex items-center justify-center border-t border-border bg-surface-muted p-8 sm:p-14 lg:border-l lg:border-t-0 lg:p-16">
        <Image
          src="/images/jobs-lists.png"
          alt="Job list comparing companies, match scores, salaries, and sources"
          width={2364}
          height={1778}
          className="landing-card-shadow h-auto w-full max-w-2xl"
        />
      </div>
    </section>
  );
}
