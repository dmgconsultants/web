import Link from 'next/link';

export default function Services() {
  return (
    <>
      <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-container-max mx-auto">
        <div className="max-w-3xl">
          <div className="h-px w-16 bg-secondary mb-6"></div>
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-6">
              Expert Financial Services tailored for excellence.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl">
              We provide precision-driven taxation, compliance, and accounting solutions for high-net-worth individuals and corporate entities, ensuring enduring financial health.
          </p>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop pb-section-gap max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-8 md:p-12 hover:border-secondary transition-colors relative overflow-hidden group shadow-[0px_10px_30px_rgba(0,35,102,0.05)]">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[120px] text-primary">account_balance</span>
            </div>
            <div className="relative z-10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">request_quote</span>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Taxation</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
                  Comprehensive tax strategies designed to optimize your financial position while maintaining absolute compliance with current regulations.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">check_circle</span>
                  <div>
                    <strong className="font-label-md text-label-md text-primary block">Individual &amp; Corporate Tax</strong>
                    <span className="text-on-surface-variant">Accurate preparation and filing for all entity types.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">check_circle</span>
                  <div>
                    <strong className="font-label-md text-label-md text-primary block">Tax Planning</strong>
                    <span className="text-on-surface-variant">Proactive strategies to minimize liabilities.</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="material-symbols-outlined text-secondary mr-3 mt-1 text-xl">check_circle</span>
                  <div>
                    <strong className="font-label-md text-label-md text-primary block">Tax Consultancy</strong>
                    <span className="text-on-surface-variant">Expert guidance on complex tax scenarios and disputes.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col shadow-[0px_10px_30px_rgba(0,35,102,0.05)]">
            <span className="material-symbols-outlined text-secondary-fixed text-4xl mb-6">verified_user</span>
            <h2 className="font-headline-sm text-headline-sm mb-4">Compliance</h2>
            <p className="font-body-md text-body-md text-primary-fixed-dim mb-8 flex-grow">
                Rigorous adherence to statutory requirements, mitigating risk and ensuring operational peace of mind.
            </p>
            <div className="space-y-4 border-t border-primary-fixed-variant pt-6">
              <div>
                <strong className="font-label-md text-label-md text-secondary-fixed block">RAMIS Online</strong>
                <span className="text-primary-fixed-dim text-sm">Seamless tax return submissions.</span>
              </div>
              <div>
                <strong className="font-label-md text-label-md text-secondary-fixed block">Monthly Computations</strong>
                <span className="text-primary-fixed-dim text-sm">Precise VAT &amp; SSCL calculations.</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-surface-container-low rounded-xl border border-surface-dim p-8 md:p-10 shadow-[0px_10px_30px_rgba(0,35,102,0.05)]">
            <span className="material-symbols-outlined text-primary text-4xl mb-6">analytics</span>
            <h2 className="font-headline-sm text-headline-sm text-primary mb-4">Accounting</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Modern financial reporting that provides clear visibility into your business performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-surface-container-lowest p-4 rounded border border-outline-variant">
                <span className="material-symbols-outlined text-secondary mb-2">laptop_mac</span>
                <h3 className="font-label-md text-label-md text-primary mb-1">Digital Bookkeeping</h3>
                <p className="text-sm text-on-surface-variant">Proficient in QuickBooks &amp; Xero.</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded border border-outline-variant">
                <span className="material-symbols-outlined text-secondary mb-2">description</span>
                <h3 className="font-label-md text-label-md text-primary mb-1">Final Accounts</h3>
                <p className="text-sm text-on-surface-variant">Statutory financial statements.</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded border border-outline-variant sm:col-span-2">
                <span className="material-symbols-outlined text-secondary mb-2">insert_chart</span>
                <h3 className="font-label-md text-label-md text-primary mb-1">Management Accounts</h3>
                <p className="text-sm text-on-surface-variant">Actionable insights for strategic decision-making.</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 bg-secondary text-on-secondary-fixed rounded-xl p-8 md:p-10 flex flex-col justify-center shadow-[0px_10px_30px_rgba(0,35,102,0.05)] relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-20 translate-x-1/4 translate-y-1/4">
              <span className="material-symbols-outlined text-[150px]">handshake</span>
            </div>
            <div className="relative z-10">
              <h2 className="font-headline-md text-headline-md mb-4">Personalized Support</h2>
              <p className="font-body-lg text-body-lg mb-8 max-w-md">
                  We believe in building enduring partnerships through dedicated, hands-on service.
              </p>
              <div className="bg-surface-container-lowest/90 backdrop-blur rounded p-6 inline-block">
                <div className="flex items-center gap-4">
                  <div className="bg-primary text-on-primary p-3 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined">directions_car</span>
                  </div>
                  <div>
                    <strong className="font-label-md text-label-md text-primary block">Weekend Physical Site Visits</strong>
                    <span className="text-on-surface-variant text-sm">Available upon request for deeper business context.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
