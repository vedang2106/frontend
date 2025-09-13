import MainLayout from "../../../components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/Card";
import { Button } from "../../../components/ui/Button";
import Link from "next/link";
import { FaExclamationTriangle, FaUsers, FaBuilding, FaCalendarAlt, FaFileAlt, FaComments, FaClipboardCheck, FaHandshake, FaCity, FaChartBar } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Issue Reporting",
      description: "Report community issues like potholes, broken streetlights, or graffiti. Track the status of your reports with real-time updates.",
      icon: FaExclamationTriangle,
      color: "primary"
    },
    {
      title: "Community Initiatives",
      description: "Discover and participate in local community initiatives, volunteer opportunities, and improvement projects.",
      icon: FaUsers,
      color: "accent"
    },
    {
      title: "Government Services",
      description: "Access information about local government services, permits, licenses, and other resources.",
      icon: FaBuilding,
      color: "secondary"
    },
    {
      title: "Public Meetings",
      description: "Stay informed about upcoming public meetings, hearings, and events in your community.",
      icon: FaCalendarAlt,
      color: "primary"
    },
    {
      title: "Document Access",
      description: "Access and download public documents, forms, and applications for various government services.",
      icon: FaFileAlt,
      color: "accent"
    },
    {
      title: "Community Feedback",
      description: "Provide feedback on local policies, initiatives, and services to help improve your community.",
      icon: FaComments,
      color: "secondary"
    },
  ];

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
              <span className="text-sm font-medium text-white">Our Services</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-4xl mb-6">
              Everything you need to <span className="text-gradient text-gradient-blue-orange">engage</span> with your community
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">
              Civic Connect provides a comprehensive range of services to help citizens and local governments work together for better communities.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                const colorClasses = {
                  primary: "bg-primary-500/20 text-primary-500 group-hover:bg-primary-500/30 border-primary-500/50",
                  accent: "bg-accent-500/20 text-accent-500 group-hover:bg-accent-500/30 border-accent-500/50",
                  secondary: "bg-secondary-500/20 text-secondary-500 group-hover:bg-secondary-500/30 border-secondary-500/50"
                };
                
                return (
                  <Card key={index} className={`bg-white/90 backdrop-blur-sm border border-white/20 hover:${colorClasses[service.color as keyof typeof colorClasses].split(' ')[2]} transition-all group relative overflow-hidden shadow-lg`}>
                    <div className={`absolute -right-20 -top-20 w-40 h-40 ${
                      service.color === 'primary' ? 'bg-primary-500/20' : 
                      service.color === 'accent' ? 'bg-accent-500/20' : 'bg-secondary-500/20'
                    } rounded-full blur-2xl group-hover:${
                      service.color === 'primary' ? 'bg-primary-500/30' : 
                      service.color === 'accent' ? 'bg-accent-500/30' : 'bg-secondary-500/30'
                    } transition-all duration-700`}></div>
                    
                    <CardHeader className="relative">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${
                        service.color === 'primary' ? 'bg-primary-500/20 text-primary-500 group-hover:bg-primary-500/30' : 
                        service.color === 'accent' ? 'bg-accent-500/20 text-accent-500 group-hover:bg-accent-500/30' : 
                        'bg-secondary-500/20 text-secondary-500 group-hover:bg-secondary-500/30'
                      } transition-colors relative mb-6`}>
                        <IconComponent className="h-7 w-7" />
                      </div>
                      <CardTitle className="mt-4 text-gray-800 text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="text-gray-600">{service.description}</CardDescription>
                      <div className="mt-6">
                        <Button variant="outline" className="w-full border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-gray-900">
                          Learn more
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-neutral-900 to-neutral-950"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(101,70,235,0.15),transparent_50%)]"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl bg-gradient-to-r from-primary-900/50 to-accent-900/50 backdrop-blur-xl border border-neutral-800 rounded-3xl px-8 py-20 sm:px-16 overflow-hidden relative">
            {/* Decorative elements */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent-500 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/10 to-accent-500/10"></div>
            
            <div className="relative text-center">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                Ready to get started with <span className="text-gradient text-gradient-primary-accent">Civic Connect</span>?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-neutral-300">
                Join thousands of citizens who are using our platform to improve their communities and make their voices heard.
              </p>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button variant="default" size="lg" className="w-full sm:w-auto bg-white hover:bg-neutral-100 text-neutral-900 font-medium px-8 py-6 text-lg rounded-xl shadow-glow-white hover:shadow-glow-white-lg transition-all duration-300">
                  Sign up for free
                </Button>
                <Link href="/routes/contact" className="group flex items-center text-lg font-medium text-white hover:text-primary-400 transition-colors">
                  Contact us 
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}