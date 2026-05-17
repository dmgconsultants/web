import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-section-gap px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter bg-primary text-secondary-fixed font-body-md text-body-md border-t border-on-primary-fixed-variant">
      <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
        <span className="font-headline-sm text-headline-sm font-bold text-secondary-fixed">DMG Consultants</span>
        <p className="text-on-primary/80 opacity-80 hover:opacity-100 transition-opacity max-w-xs">
          © 2024 DMG Consultants. Professional Tax &amp; Accounting Services. Ragama, Sri Lanka.
        </p>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <h4 className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest mb-2">Navigation</h4>
        <Link className="text-on-primary/80 hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed" href="/">Home</Link>
        <Link className="text-on-primary/80 hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed" href="/services">Services</Link>
        <Link className="text-on-primary/80 hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed" href="/about">About</Link>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <h4 className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest mb-2">Resources</h4>
        <Link className="text-on-primary/80 hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed" href="/contact">Contact</Link>
      </div>
      <div className="col-span-1 flex flex-col gap-3">
        <h4 className="font-label-md text-label-md text-secondary-fixed uppercase tracking-widest mb-2">Legal</h4>
        <Link className="text-on-primary/80 hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed" href="#">Privacy Policy</Link>
        <Link className="text-on-primary/80 hover:text-secondary-fixed transition-colors hover:underline decoration-secondary-fixed" href="#">Terms of Service</Link>
      </div>
    </footer>
  );
}
