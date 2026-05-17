import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter mt-16">
        <div className="col-span-1 md:col-span-12 mb-16 text-center">
          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary mb-4">Contact &amp; Quotation</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Engage with our experts for professional tax and accounting services tailored to your corporate needs.</p>
        </div>
        <div className="col-span-1 md:col-span-5 space-y-12">
          <div className="bg-surface-container-lowest p-8 border border-outline-variant rounded-DEFAULT">
            <h2 className="font-headline-sm text-headline-sm text-primary mb-6 border-b border-outline-variant pb-2">Direct Contact</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">Office Address</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">123 Financial District,<br/>Ragama,<br/>Sri Lanka.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1" style={{fontVariationSettings: "'FILL' 1"}}>phone</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">Telephone</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">+94 11 234 5678</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary mt-1" style={{fontVariationSettings: "'FILL' 1"}}>mail</span>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">Email</p>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-1">consult@dmgconsultants.lk</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-64 bg-surface-container border border-outline-variant rounded-DEFAULT relative overflow-hidden">
            <img alt="Map of Ragama" className="w-full h-full object-cover grayscale opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaGVSCfODjmNSiNW9RsUjcDbrTDYkbc84dXEQcA2J1SWu74aRYrZtD-gpT5rOCrYRBdZX5qIyAlpQVMvE5LYfMc59w3tCVDhyOFJmRZKjvhPwKV0IP_vIV6Roo4vMokDkd55Co22XpSRUNjGlxklng8ibGmCR1JGOVL8Flj6x01JbVWmkAMQCvOccrSRBCggzX5LycjJc8egLKLaWk3mU3O-eFFrPhWcJe_lfvaOG7qz1KW2_8T67NyMObCmYcwr3vnRj4gW347NPO"/>
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className="material-symbols-outlined text-secondary text-4xl drop-shadow-md" style={{fontVariationSettings: "'FILL' 1"}}>location_on</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-7 bg-surface-container-lowest p-8 border border-outline-variant rounded-DEFAULT relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
          <h2 className="font-headline-sm text-headline-sm text-primary mb-2">Request a Quotation</h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">Please provide your details and requirements. Our senior consultants will respond within 24 hours.</p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="fullName">Full Name</label>
                <input className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-secondary transition-colors font-body-md text-body-md py-2 px-0" id="fullName" placeholder="John Doe" type="text"/>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="company">Company Name</label>
                <input className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-secondary transition-colors font-body-md text-body-md py-2 px-0" id="company" placeholder="Acme Corp" type="text"/>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="email">Corporate Email</label>
                <input className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-secondary transition-colors font-body-md text-body-md py-2 px-0" id="email" placeholder="john@acme.com" type="email"/>
              </div>
              <div className="space-y-2">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="phone">Contact Number</label>
                <input className="w-full border-0 border-b border-outline-variant bg-transparent focus:ring-0 focus:border-secondary transition-colors font-body-md text-body-md py-2 px-0" id="phone" placeholder="+94 77 ..." type="tel"/>
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="service">Service Required</label>
              <select className="w-full border border-outline-variant rounded bg-transparent focus:ring-0 focus:border-secondary transition-colors font-body-md text-body-md py-3 px-4 text-on-surface-variant" id="service" defaultValue="">
                <option value="">Select a service category</option>
                <option value="tax">Tax Advisory &amp; Compliance</option>
                <option value="audit">Corporate Auditing</option>
                <option value="bookkeeping">Professional Bookkeeping</option>
                <option value="consulting">Financial Consulting</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="message">Project Details</label>
              <textarea className="w-full border border-outline-variant rounded bg-transparent focus:ring-0 focus:border-secondary transition-colors font-body-md text-body-md py-3 px-4 resize-none" id="message" placeholder="Please describe your requirements in detail..." rows={4}></textarea>
            </div>
            <button className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded w-full hover:bg-primary/90 transition-colors mt-8" type="submit">
                Submit Request
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
