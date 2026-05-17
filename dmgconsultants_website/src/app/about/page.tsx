import Link from 'next/link';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap flex flex-col md:flex-row items-center gap-gutter max-w-container-max mx-auto">
        <div className="flex-1 space-y-6">
          <span className="font-label-md text-label-md text-secondary border border-secondary px-3 py-1 rounded-DEFAULT inline-block">OUR HERITAGE</span>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary">Trust Built on Precision &amp; Experience</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              For over 15 years, DMG Consultants has been the silent architect behind corporate financial success, offering unparalleled expertise in tax and accounting.
          </p>
        </div>
        <div className="flex-1 w-full relative">
          <div className="aspect-square bg-surface-container-low rounded-xl overflow-hidden shadow-sm relative">
            <img alt="Corporate office" className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaB27vxUBN5dc8O_-KrKDNMarPVw5lrO7uTtB16BBhjMckyZv0-pNmg1VQIlA-GvMcp3YXtmrlSe3ems4oxCoUXh0duRCC_DAFWqPo579GGJoqDj8NK5nDCsT20aeQA4CaTsIvPqYkhMtV6rGX1GqMwydY9NtfwcROQJgwK0RKNisoY0BPLVN2bSGjj1YfrOrsm6cRAYEdbHKWlRl3YpmwdukOgVM7WThiHnTnyCPzT82q-bxP7AVJCulCtQCtZCcWbpdOgsvai9Rs"/>
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <hr className="border-t border-outline-variant/30"/>
      </div>

      {/* Founder Profile */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="mb-12">
          <h2 className="font-headline-md text-headline-md text-primary mb-4">Leadership Excellence</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">Guided by decades of high-level corporate financial management.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,_auto)]">
          <div className="md:col-span-2 md:row-span-2 bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-8 flex flex-col justify-between shadow-[0px_10px_30px_rgba(0,35,102,0.02)]">
            <div>
              <div className="flex gap-4 mb-6">
                <span className="bg-primary-container text-on-primary-container font-label-md text-label-md px-3 py-1 rounded-DEFAULT">CBA (CA Sri Lanka)</span>
                <span className="bg-primary-container text-on-primary-container font-label-md text-label-md px-3 py-1 rounded-DEFAULT">AAT Member</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-6">Group Accountant Profile</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  With over 15 years of dedicated experience as a Group Accountant, our founder has navigated complex financial landscapes for leading corporations. This extensive tenure guarantees a deep understanding of corporate finance, strategic tax planning, and rigorous compliance.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                  Holding esteemed memberships with CA Sri Lanka (CBA) and AAT, the leadership embodies the pinnacle of professional accounting standards, ensuring every client receives authoritative and impeccable financial guidance.
              </p>
            </div>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-[0px_10px_30px_rgba(0,35,102,0.02)]">
            <span className="font-display-lg text-display-lg text-secondary mb-2">15+</span>
            <span className="font-label-md text-label-md text-primary uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="bg-surface-container-lowest border border-outline-variant/50 rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-[0px_10px_30px_rgba(0,35,102,0.02)]">
            <span className="material-symbols-outlined text-[48px] text-secondary mb-4" style={{fontVariationSettings: "'FILL' 1"}}>assured_workload</span>
            <span className="font-label-md text-label-md text-primary uppercase tracking-wider">Corporate Excellence</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <hr className="border-t border-outline-variant/30"/>
      </div>

      {/* Vision & Mission */}
      <section className="px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="bg-surface-container-low p-10 rounded-xl border-l-4 border-secondary">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary">visibility</span> Vision
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
                To be the definitive voice of financial authority, transforming complex regulatory landscapes into strategic advantages for our elite clientele, ensuring sustained corporate success and legacy building.
            </p>
          </div>
          <div className="bg-surface-container-low p-10 rounded-xl border-l-4 border-primary">
            <h3 className="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">flag</span> Mission
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
                To deliver precision-driven tax and accounting solutions engineered on absolute trust, rigorous expertise, and an unwavering commitment to client prosperity, acting as the bedrock for their financial architecture.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
