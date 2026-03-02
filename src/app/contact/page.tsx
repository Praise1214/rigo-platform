import ContactForm from '@/components/forms/ContactForm'
import { siteConfig } from '@/config/site.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Rising Generation. We\'d love to hear from you.',
}

const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3636!3d6.5355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d7e1b0e3b8d%3A0x0!2s4%20Ilupeju%20Bypass%2C%20Onipanu%2C%20Lagos!5e0!3m2!1sen!2sng!4v1'
const GOOGLE_MAPS_LINK =
  'https://maps.google.com/?q=4+Ilupeju+Bypass+Olajire+House,+Onipanu,+Lagos+102215,+Lagos'

export default function ContactPage() {
  return (
    <>
      {/* ── Hero Section: Contact Info + Form ── */}
      <section className="pt-22 pb-20 lg:pt-20 lg:pb-24 bg-gradient-to-b from-[#d0d4db] to-cream">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-4 ml-30">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column — Contact Info */}
            <div className="pt-4">
              <h1 className="heading-display text-[clamp(2rem,5vw,3.5rem)] text-charcoal mb-5 leading-[1.4] tracking-[0.15em]">
                Contact Us
              </h1>
              <p className="text-charcoal/90 text-base lg:text-lg leading-relaxed mb-8 max-w-md text-justify font-display">
                Email, call, or complete the form to learn how Rising Generation can support your community.
              </p>

              <div className="space-y-3 mb-10">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-charcoal/90 hover:text-teal transition-colors text-xl font-display  tracking-wider"
                >
                  {siteConfig.email}
                </a>
                <p className="text-charcoal/90 text-xl font-sans font-montserrat  tracking-wider">{siteConfig.phone}</p>
              </div>

              {/* Three Info Categories */}
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t">
                <div>
                  <h3 className="font-semibold text-charcoal text-[20px] mb-2 font-display ">General Inquiries</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed font-display tracking-wider">
                    Have a question about our programs, events, or how to get involved? Our team is happy to help.
                  </p>
                </div>
                <div className='pl-4'>
                  <h3 className="font-semibold text-charcoal text-[20px] mb-2 font-display">Partnerships</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed font-display tracking-wider">
                    We collaborate with organizations and individuals who share our commitment to empowering young Nigerians.
                  </p>
                </div>
                <div className='pl-2'>
                  <h3 className="font-semibold text-charcoal text-[20px] mb-2 font-display">Media Inquiries</h3>
                  <p className="text-charcoal/70 text-[15px] leading-relaxed font-display tracking-wider">
                    For media-related questions or press inquiries, please contact us at {siteConfig.email}.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column — Form Card */}
            <div className="w-full lg:max-w-[560px] lg:ml-auto lg:translate-x-25 bg-white rounded-3xl shadow-[0_8px_60px_rgba(0,0,0,0.08)] p-7 lg:p-15 lg:-mt-4 left-3">
              <h2 className="font-semibold text-charcoal text-xl mb-1 font-display">Get in Touch</h2>
              <p className="text-charcoal/70 text-sm mb-6 font-display">We’d love to hear from you.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Map + Location Section ── */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="relative rounded-3xl overflow-hidden bg-cream aspect-[4/3]">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="RIGO Office Location"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-lg p-5 max-w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 bg-teal rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-charcoal text-sm font-display">{siteConfig.shortName}</p>
                    <p className="text-charcoal/90 text-xs font-display ">Empowering Nigeria&apos;s Youth</p>
                  </div>
                </div>
                <div className="mb-3">
                  <p className="font-semibold text-charcoal text-s font-display">Lagos, Nigeria</p>
                  <p className="text-charcoal/90 text-xs mt-0.5 font-display tracking-wider">{siteConfig.address.street}</p>
                </div>
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-charcoal text-xs font-semibold hover:text-teal transition-colors"
                >
                  Open Google Maps
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Location Details */}
            <div className='ml-20'>
              <span className="inline-block text-[31px] font-bold text-teal uppercase tracking-[0.03em] mb-3 font-display">
                Our Location
              </span>
              <h2 className="heading-display text-[clamp(1.6rem,3.5vw,2.3rem)] text-charcoal mb-8 leading-[1.15]">
                Connecting Near<br className="hidden sm:block" /> and Far
              </h2>

              <div>
                <h3 className="font-semibold text-charcoal text-base mb-3 heading-display">Office</h3>
                <div className="text-charcoal/90 text-sm space-y-1 leading-relaxed font-display tracking-widest">
                  <p>{siteConfig.name}</p>
                  <p>Lagos, Nigeria</p>
                  <p>{siteConfig.address.street}</p>
                  <p>{siteConfig.address.city}, Lagos {siteConfig.address.zip}</p>
                  <p>{siteConfig.address.country}</p>
                </div>
              </div>

              <div className="mt-8 flex gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="btn-pill btn-pill-primary"
                >
                  Email Us
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill bg-teal-600 hover:bg-teal-700 text-white text-[11px]"
                >
                  <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
