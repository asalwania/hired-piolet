import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Condition", href: "/terms" },
] as const;

export function Footer() {
  return (
    <footer className="border-x border-b border-border bg-surface">
      <div className="mx-auto flex min-h-40 max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 sm:flex-row lg:px-10">
        <Link href="/" aria-label="HiredPilot home" className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <Image
            src="/logo.png"
            alt="HiredPilot"
            width={640}
            height={168}
            className="h-auto w-28"
          />
        </Link>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-text-dark">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-sm transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
