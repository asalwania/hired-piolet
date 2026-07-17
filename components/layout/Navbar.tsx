import Image from "next/image";
import Link from "next/link";

const navigation = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Find Jobs", href: "/find-jobs" },
  { label: "Profile", href: "/profile" },
] as const;

export function Navbar() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="HiredPilot home" className="shrink-0 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <Image
            src="/logo.png"
            alt="HiredPilot"
            width={640}
            height={168}
            priority
            className="h-auto w-24 sm:w-28"
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm font-medium text-text-dark transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/login" className="landing-button-primary min-h-11 px-4 py-2">
          Start for free
        </Link>
      </div>
    </header>
  );
}
