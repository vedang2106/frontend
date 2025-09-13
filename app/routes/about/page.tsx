import MainLayout from "../../../components/layout/MainLayout";
import { FaLightbulb, FaShieldAlt, FaUsers, FaHeart, FaRocket, FaGlobe } from "react-icons/fa";

export default function AboutPage() {
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
              <span className="text-sm font-medium text-white">About Civic Connect</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6">
              <span className="text-gradient text-gradient-blue-orange">Our Mission</span> and
              <span className="block">Vision</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              Civic Connect is dedicated to empowering communities through technology, making civic engagement accessible to all citizens and fostering transparent, collaborative governance.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-700 py-24 sm:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500 to-primary-700"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.15),transparent_50%)]"></div>
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Building <span className="text-gradient text-gradient-blue-orange">Better Communities</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              We believe that technology can bridge the gap between citizens and their local governments, creating more responsive, transparent, and effective civic systems.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-accent-500/50 transition-all group relative overflow-hidden shadow-lg">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl group-hover:bg-accent-500/30 transition-all duration-700"></div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-500/20 text-accent-500 group-hover:bg-accent-500/30 transition-colors relative mb-6">
                  <FaLightbulb className="h-7 w-7" />
                </div>
                <div className="text-base leading-7 relative">
                  <h3 className="font-semibold text-gray-800 text-xl mb-4">Our Story</h3>
                  <p className="mt-2 text-gray-600">
                    Founded in 2023, Civic Connect began with a simple idea: to bridge the gap between citizens and their local governments. We believe that technology can make civic engagement more accessible, transparent, and effective.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-secondary-500/50 transition-all group relative overflow-hidden shadow-lg">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-secondary-500/20 rounded-full blur-2xl group-hover:bg-secondary-500/30 transition-all duration-700"></div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-500/20 text-secondary-500 group-hover:bg-secondary-500/30 transition-colors relative mb-6">
                  <FaShieldAlt className="h-7 w-7" />
                </div>
                <div className="text-base leading-7 relative">
                  <h3 className="font-semibold text-gray-800 text-xl mb-4">Our Mission</h3>
                  <p className="mt-2 text-gray-600">
                    Our mission is to empower communities by providing tools that facilitate meaningful civic engagement, promote transparency in local governance, and foster collaboration between citizens and their governments.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-primary-500/50 transition-all group relative overflow-hidden shadow-lg">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/20 rounded-full blur-2xl group-hover:bg-primary-500/30 transition-all duration-700"></div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/20 text-primary-500 group-hover:bg-primary-500/30 transition-colors relative mb-6">
                  <FaHeart className="h-7 w-7" />
                </div>
                <div className="text-base leading-7 relative">
                  <h3 className="font-semibold text-gray-800 text-xl mb-4">Our Values</h3>
                  <p className="mt-2 text-gray-600">
                    We are guided by our commitment to accessibility, inclusivity, transparency, and innovation. We believe that everyone should have the opportunity to participate in civic life and contribute to their community.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm border border-white/20 rounded-xl p-8 hover:border-accent-500/50 transition-all group relative overflow-hidden shadow-lg">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-accent-500/20 rounded-full blur-2xl group-hover:bg-accent-500/30 transition-all duration-700"></div>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent-500/20 text-accent-500 group-hover:bg-accent-500/30 transition-colors relative mb-6">
                  <FaUsers className="h-7 w-7" />
                </div>
                <div className="text-base leading-7 relative">
                  <h3 className="font-semibold text-gray-800 text-xl mb-4">Our Team</h3>
                  <p className="mt-2 text-gray-600">
                    Our diverse team brings together expertise in technology, civic engagement, and community development. We are passionate about creating positive change in communities across the country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-gradient-to-br from-primary-500 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-500 to-primary-700"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.15),transparent_50%)]"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl px-8 py-20 sm:px-16 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent-500/10 to-secondary-500/10"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Ready to transform <span className="text-gradient text-gradient-blue-orange">civic engagement</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-white/90">
                Join thousands of citizens who are using our platform to improve their communities and make their voices heard.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-neutral-900 font-medium px-8 py-6 text-lg rounded-xl shadow-glow-white hover:shadow-glow-white-lg transition-all duration-300">
                  Get Started Today
                </button>
                <a href="/routes/contact" className="group flex items-center text-lg font-medium text-white hover:text-primary-400 transition-colors">
                  Learn More 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}