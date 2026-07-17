import Image from "next/image";

export function Testimonial() {
  return (
    <section aria-labelledby="testimonial-heading" className="border-x border-border bg-surface px-6 py-20 text-center sm:py-24">
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">Success Stories</p>
      <h2 id="testimonial-heading" className="sr-only">Customer success story</h2>
      <blockquote className="mx-auto mt-8 max-w-4xl text-2xl font-medium leading-9 text-text-dark sm:text-3xl sm:leading-10">
        “I used to spend my evenings copy-pasting resumes. Now I open my dashboard to see interviews waiting. It feels like cheating. Had 3 offers on the table simultaneously.”
      </blockquote>
      <figure className="mt-8 flex items-center justify-center gap-3">
        <Image
          src="/images/user-icon.png"
          alt="Tom Wilson"
          width={192}
          height={192}
          className="size-12 rounded-lg"
        />
        <figcaption className="text-left">
          <p className="text-sm font-semibold text-text-primary">Tom Wilson</p>
          <p className="mt-1 text-xs text-text-secondary">Junior Developer</p>
        </figcaption>
      </figure>
    </section>
  );
}
