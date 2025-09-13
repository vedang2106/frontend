import MainLayout from "../../../components/layout/MainLayout";
import { Button } from "../../../components/ui/Button";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function ContactPage() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-500 to-primary-700 py-20 sm:py-32">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500 to-primary-700"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.3),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.3),transparent_50%)]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white rounded-full opacity-5 blur-3xl"></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-16 md:mb-24">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-8">
              <span className="inline-block w-2 h-2 rounded-full bg-accent-500 mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-white">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6">
              <span className="text-gradient text-gradient-blue-orange">Contact</span> Us
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              Have questions or feedback? We&apos;d love to hear from you. Get in touch with our team and let&apos;s work together to improve your community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-neutral-950 py-24 sm:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-neutral-900"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(101,70,235,0.15),transparent_50%)]"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-neutral-300 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-neutral-300 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold leading-6 text-neutral-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-neutral-300 mb-2">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold leading-6 text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-lg bg-neutral-800 border border-neutral-700 px-4 py-3 text-white placeholder:text-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your inquiry or feedback..."
                    defaultValue={""}
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600 text-white font-medium py-3 px-6 rounded-lg transition-all">
                    <FaPaperPlane className="w-4 h-4 mr-2" />
                    Send message
                  </Button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
                <p className="text-neutral-400 text-lg">
                  We&apos;re here to help and answer any questions you might have. We look forward to hearing from you!
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-primary-500/50 transition-all group">
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-900/50 text-primary-400 group-hover:bg-primary-800/50 transition-colors">
                      <FaEnvelope className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Email</h4>
                      <p className="text-neutral-400 mt-1">contact@civicconnect.com</p>
                      <p className="text-sm text-neutral-500 mt-1">We&apos;ll get back to you within 24 hours</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-accent-500/50 transition-all group">
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent-900/50 text-accent-400 group-hover:bg-accent-800/50 transition-colors">
                      <FaPhone className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Phone</h4>
                      <p className="text-neutral-400 mt-1">+1 (555) 123-4567</p>
                      <p className="text-sm text-neutral-500 mt-1">Mon-Fri 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-6 hover:border-secondary-500/50 transition-all group">
                  <div className="flex items-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary-900/50 text-secondary-400 group-hover:bg-secondary-800/50 transition-colors">
                      <FaMapMarkerAlt className="h-6 w-6" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-white">Office</h4>
                      <p className="text-neutral-400 mt-1">123 Main Street, Suite 456</p>
                      <p className="text-neutral-400">New Delhi, India 110001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </MainLayout>
  );
}