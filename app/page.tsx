import { Features } from "@/components/homepage/Features";
import { FinalCta } from "@/components/homepage/FinalCta";
import { Hero } from "@/components/homepage/Hero";
import { HowItWorks } from "@/components/homepage/HowItWorks";
import { Testimonial } from "@/components/homepage/Testimonial";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-3 focus:text-text-primary focus:outline-2 focus:outline-accent"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <Hero />
        <div aria-hidden="true" className="landing-divider h-20 border-x border-t border-border" />
        <HowItWorks />
        <div aria-hidden="true" className="landing-divider h-20 border-x border-y border-border" />
        <Features />
        <div aria-hidden="true" className="landing-divider h-20 border-x border-y border-border" />
        <Testimonial />
        <div aria-hidden="true" className="landing-divider h-20 border-x border-y border-border" />
        <FinalCta />
        <div aria-hidden="true" className="landing-divider h-20 border-x border-y border-border" />
        <Footer />
      </main>
    </>
  );
}

export default Home;
