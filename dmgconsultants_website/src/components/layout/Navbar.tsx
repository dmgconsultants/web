import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop h-20 bg-surface/95 backdrop-blur-md border-b border-outline-variant shadow-sm transition-all duration-300">
      <div className="flex items-center gap-4">
        {/* Replace with your local logo path if available */}
        <img alt="DMG Consultants Logo" className="h-12 w-12 object-contain rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZMvkqqVe_A7Ynitd6EvmkfL2iZG_sFaI1kIHqjBkYjIUgpnRsaehtbMNi2RHgQZgiUE_QeliSczHtnbTOVdogI82G8B9rsTPE2s-6o1SHu-rRRE0V8Im60jKU4r3PzBQlPD-GGMoQL0YMz15QtF7k4MoSOpwraGHQZ55W3QB5O2eqpRiyGgPaz11xuHKhlcCnhVmwnk_15PhcJisUCgJ0gBdKWjpaf_dX5N45bdf9K8KzF-HNMWRFsYnrIc2aWmo6lF_b04a89i3k"/>
        <span className="font-headline-md text-headline-md font-bold text-primary tracking-tight hidden sm:block">DMG Consultants</span>
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <Link className="text-on-surface-variant hover:text-primary border-b-2 border-transparent hover:border-secondary pb-1 font-bold font-label-md text-label-md transition-all" href="/">Home</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-surface-container-low transition-all" href="/services">Services</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-surface-container-low transition-all" href="/about">About</Link>
        <Link className="text-on-surface-variant hover:text-primary transition-colors font-label-md text-label-md hover:bg-surface-container-low transition-all" href="/contact">Contact</Link>
      </nav>
      <Link className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-primary text-on-primary font-label-md text-label-md rounded shadow-sm hover:bg-primary-container transition-all scale-95 active:scale-90" href="/contact">
        Request a Quotation
      </Link>
      <button className="md:hidden text-primary p-2">
        <span className="material-symbols-outlined text-3xl">menu</span>
      </button>
    </header>
  );
}
