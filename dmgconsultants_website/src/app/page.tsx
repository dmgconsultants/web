import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center py-20 md:pb-section-gap px-margin-mobile md:px-margin-desktop overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <img alt="Corporate Office" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeK-ar2XYFRw2cQ_ghxUv3u80TAqxlI1-sZ1zj035JYD-1B4zacih8LP0p9NLDfUMa0gx2WY3ooWjuAwX0b_fbwyyLN45V2DPbe4CuR0KmhsEN7dSxwOaK53SzwASZMcjtkxF9bGx9Mjkm17tdDSf6dHABIUiyZQ7bynPnQoAoNX1jg3OXxsMpVXoEcqf3crk-LZ_Lg-UxerMyZTHKEPCZeOuYx_w2iF72-Uzr-33tbr9Mz1zoVPyW5PPNeG5zNrKjpk90pTy1RrPn"/>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-secondary/30 bg-secondary/10 rounded-full">
              <span className="material-symbols-outlined text-secondary text-sm" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
              <span className="font-label-md text-label-md text-secondary uppercase tracking-widest">CBA &amp; AAT Certified</span>
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-primary">
                Strategic Tax &amp; Accounting Solutions <br/><span className="text-secondary-fixed-dim">Tailored for Your Growth.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-2xl">
                Over 20 years of qualified excellence by CA Sri Lanka professionals. We provide high-net-worth and corporate clients with precise, authoritative financial clarity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-on-secondary-fixed font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT hover:bg-secondary-fixed-dim transition-all shadow-[0px_10px_30px_rgba(0,35,102,0.15)]" href="/contact">
                  Request a Quotation
              </Link>
              <Link className="inline-flex items-center justify-center px-8 py-4 border border-outline-variant text-on-primary font-label-md text-label-md uppercase tracking-wider rounded-DEFAULT hover:bg-white/5 transition-all" href="/services">
                  Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Experience Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="about">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-surface-container-low rounded-xl transform -rotate-2 z-0"></div>
            <img alt="Professional Consulting" className="relative z-10 w-full h-[600px] object-cover rounded-xl border border-outline-variant shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDuCdLVGrRd6LInpOmVZHv3XAxVP6QWI6fJztFyaqC4MkHB9fEhYXcVMpFuKqDV2j5-7DMLmnxv5gm3IDgltFXcyKDVgeTziLcjR267pLuqMWcQOiCCH-84Z8H5Rwo96zXOmzwWoSY28XXf6KvApUkAyYZJXIIZiobqCy1Rh_gEAmx1lvdvsPaIbpQTYG470WGhr5PUEz0dDaphzq7rcTkKCY6F7rgdEJJARsfsqHyKAxR3iqujH3nGuU402HfM1vXRLcj_yW4tPAF"/>
            <div className="absolute -bottom-8 -right-8 z-20 bg-primary text-on-primary p-8 rounded-DEFAULT shadow-[0px_10px_30px_rgba(0,35,102,0.15)] max-w-xs border border-primary-fixed/20">
              <span className="font-display-lg text-display-lg text-secondary-fixed-dim block mb-2">15+</span>
              <span className="font-label-md text-label-md uppercase tracking-wider block mb-2">Years Experience</span>
              <p className="font-body-md text-body-md text-primary-fixed-dim">Senior corporate expertise as Group Accountant navigating complex financial landscapes.</p>
            </div>
          </div>
          <div className="space-y-6 lg:pl-12">
            <h2 className="font-headline-sm text-headline-sm text-secondary uppercase tracking-widest">Heritage of Precision</h2>
            <h3 className="font-headline-md text-headline-md text-on-surface">Authority Built on Decades of Corporate Insight</h3>
            <div className="w-16 h-px bg-secondary my-8"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
                At DMG Consultants, we move beyond basic compliance. We leverage deep-seated corporate experience to engineer financial strategies that protect and expand your wealth. 
            </p>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
                Our leadership brings over 15 years of rigorous, high-stakes experience as a Group Accountant, ensuring that every piece of advice is grounded in practical, real-world corporate success. We treat your financial architecture with the architectural precision it deserves.
            </p>
            <ul className="space-y-4 pt-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Comprehensive corporate tax structuring.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">End-to-end accounting and financial reporting.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-body-md text-body-md text-on-surface">Strict adherence to national compliance standards.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="services">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="font-headline-sm text-headline-sm text-secondary uppercase tracking-widest">Core Capabilities</h2>
            <h3 className="font-headline-md text-headline-md text-on-surface">Precision Engineered Services</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest p-8 border border-outline-variant hover:border-secondary transition-colors duration-300 group flex flex-col h-full rounded-DEFAULT shadow-sm">
              <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center rounded-DEFAULT mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-secondary-fixed-dim">account_balance</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Corporate Taxation</h4>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Strategic tax planning and minimization strategies designed for high-net-worth entities and expanding corporations.</p>
              <Link className="mt-8 inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="/services">
                Discover More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant hover:border-secondary transition-colors duration-300 group flex flex-col h-full rounded-DEFAULT shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-secondary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center rounded-DEFAULT mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-secondary-fixed-dim">gavel</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Statutory Compliance</h4>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">Bulletproof adherence to CA Sri Lanka and national regulatory frameworks, insulating your business from liability.</p>
              <Link className="mt-8 inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="/services">
                Discover More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            <div className="bg-surface-container-lowest p-8 border border-outline-variant hover:border-secondary transition-colors duration-300 group flex flex-col h-full rounded-DEFAULT shadow-sm">
              <div className="w-16 h-16 bg-surface-container-low flex items-center justify-center rounded-DEFAULT mb-6 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-3xl text-primary group-hover:text-secondary-fixed-dim">calculate</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-4">Executive Accounting</h4>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow">High-level financial reporting and ledger management utilizing pure, tabular data for immediate executive clarity.</p>
              <Link className="mt-8 inline-flex items-center gap-2 font-label-md text-label-md text-primary hover:text-secondary transition-colors" href="/services">
                Discover More <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Updates Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface" id="updates">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-4 border-b border-outline-variant">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-secondary uppercase tracking-widest mb-2">Insight &amp; Analysis</h2>
              <h3 className="font-headline-md text-headline-md text-on-surface">Latest Tax Updates</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <article className="group cursor-pointer">
              <div className="overflow-hidden rounded-DEFAULT mb-6 border border-outline-variant">
                <img alt="Financial Chart" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Ul4LqWLhRRs966qAWQoduF9bNXBhDhqBLGbXiDJUpm4DycPjfMD2ufuUUQcFzx4_QGj_c2k8-t5jQ4QIle63kYN6vgVXKYtSZnXerPyEjbeAlcPrtT3XwGjXtbmQSAVHFYIrH710x1Q_BfXMMTrDxMaVFV2Wa-FtoD_prpyhYVmGPdl4_ivabra0ux2t8nJDw4Pai65VoVarG8PVs_arOCbJ5PpwRs1HWpXziP38NYZNN9GoQNkrox4y4I-qbfs2hiLWoosPcKXm"/>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">Taxation</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="font-label-md text-label-md text-on-surface-variant">October 15, 2024</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Implications of the New VAT Amendments for Corporate Entities</h4>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">An executive summary of how the recent changes to Value Added Tax legislation will impact corporate cash flows in the upcoming fiscal quarter.</p>
            </article>
            <article className="group cursor-pointer">
              <div className="overflow-hidden rounded-DEFAULT mb-6 border border-outline-variant">
                <img alt="Corporate Architecture" className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9yDTonQJBNjiHdTwpK0fpf6h8EvppVjlK7zL8_1izjxZLRpqqEcv9wiLRIlspQCn11OJbjGj45U_8h7-GV6g7HsMz87Rxa3hQ1-Qq3ocfsU5ZEZpwn7UgBh-iYDL7m-IX5rCawCL0HsSlTm8dUoI8f7EFbTe8D_uzx7Y68YT3YOaHOKntthAUUOCdLl-PwqXklhoWiUAeeePKJOkrU4l45bUdxFH__StJNhcaAzWKi9BU8uFt9T5yB8hC-17YQx-gJZZRrXr1hSxn"/>
              </div>
              <div className="flex items-center gap-4 mb-3">
                <span className="font-label-md text-label-md text-secondary tracking-widest uppercase">Compliance</span>
                <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                <span className="font-label-md text-label-md text-on-surface-variant">October 02, 2024</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface mb-3 group-hover:text-primary transition-colors">Navigating CA Sri Lanka's Updated Reporting Standards</h4>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">A breakdown of the critical adjustments required for annual financial reports to maintain absolute compliance with the revised national guidelines.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-on-primary" id="contact">
        <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="font-headline-sm text-headline-sm text-secondary-fixed-dim uppercase tracking-widest">Engage Our Firm</h2>
            <h3 className="font-display-lg-mobile text-display-lg-mobile text-on-primary">Secure a Professional Consultation.</h3>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim pb-8">
                Connect with DMG Consultants to establish a bespoke financial strategy tailored to your exact corporate or individual requirements.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-2xl">location_on</span>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider mb-1">Corporate Office</h4>
                  <p className="font-body-md text-body-md text-primary-fixed-dim">Ragama, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-2xl">mail</span>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider mb-1">Direct Communication</h4>
                  <p className="font-body-md text-body-md text-primary-fixed-dim">inquiries@dmgconsultants.lk</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-2xl">phone_in_talk</span>
                <div>
                  <h4 className="font-label-md text-label-md uppercase tracking-wider mb-1">Consultation Line</h4>
                  <p className="font-body-md text-body-md text-primary-fixed-dim">+94 11 234 5678</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-DEFAULT shadow-[0px_10px_30px_rgba(0,35,102,0.15)] text-on-surface relative">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="firstName">First Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary px-0 py-2 font-body-md text-body-md transition-colors" id="firstName" placeholder="Enter your first name" type="text"/>
                </div>
                <div className="relative group">
                  <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="lastName">Last Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary px-0 py-2 font-body-md text-body-md transition-colors" id="lastName" placeholder="Enter your last name" type="text"/>
                </div>
              </div>
              <div className="relative group">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="email">Corporate Email</label>
                <input className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary px-0 py-2 font-body-md text-body-md transition-colors" id="email" placeholder="name@company.com" type="email"/>
              </div>
              <div className="relative group">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="service">Service of Interest</label>
                <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary px-0 py-2 font-body-md text-body-md transition-colors text-on-surface" id="service" defaultValue="">
                  <option disabled value="">Select a primary service</option>
                  <option value="tax">Corporate Taxation</option>
                  <option value="compliance">Statutory Compliance</option>
                  <option value="accounting">Executive Accounting</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div className="relative group">
                <label className="block font-label-md text-label-md text-on-surface-variant mb-2" htmlFor="message">Brief Context</label>
                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary px-0 py-2 font-body-md text-body-md transition-colors resize-none" id="message" placeholder="Provide details regarding your financial requirements..." rows={3}></textarea>
              </div>
              <button className="w-full py-4 bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider rounded hover:bg-primary-container transition-colors shadow-sm mt-4" type="submit">
                  Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
