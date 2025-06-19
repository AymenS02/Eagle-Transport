import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Truck, Train, Ship, MapPin, Phone, Mail, CheckCircle, Globe, Clock, Shield, ArrowRight, Menu, X } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);

  const services = [
    {
      icon: Truck,
      title: "Road Freight",
      description: "Road transport solutions for regional and cross-border deliveries.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Train,
      title: "Rail Freight", 
      description: "Efficient rail services for bulk and long-distance cargo.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Sea transport for large volumes and international shipments.",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  const benefits = [
    { icon: Clock, title: "On-Time Delivery", description: "Guaranteed delivery schedules you can rely on" },
    { icon: Shield, title: "Secure Transport", description: "Your cargo arrives in perfect condition" },
    { icon: Globe, title: "Global Reach", description: "From USA to Morocco and beyond" },
    { icon: CheckCircle, title: "Reliable Service", description: "Trusted logistics partner for all your needs" }
  ];

  const AnimatedSection = ({ children, className = "" }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.1 });
    
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden">
    
      {/* Header */}
      <motion.header 
        style={{ 
          opacity: headerOpacity,
          backdropFilter: `blur(${headerBlur}px)`
        }}
        className="fixed top-0 w-full z-50 bg-slate-900/80 border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img className="w-10 h-10 flex items-center justify-center" src="./logo.png" alt="Truck Icon" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                EAGLE TRANSPORTATION
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {['Services', 'About', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden bg-slate-800/95 border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {['Services', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="absolute inset-0">
          <img 
            src="./hero.png"
            alt="Logistics background"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-blue-900/60 to-slate-800/80"></div>
        </div>
        <div className="absolute inset-0  backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Your Trusted
            <br />
            <span className="text-white">Logistics Partner</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We provide reliable and efficient logistics solutions to ensure your shipments arrive on time and in perfect condition.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all flex items-center space-x-2"
            >
              <span>Ship Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-400 mb-4">Serving routes</p>
            <div className="flex items-center justify-center space-x-4 text-lg">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-red-500/20 rounded-full border border-blue-500/30">
                🇺🇸 USA
              </span>
              <ArrowRight className="w-6 h-6 text-blue-400" />
              <span className="px-4 py-2 bg-gradient-to-r from-red-500/20 to-emerald-500/20 rounded-full border border-green-500/30">
                🇲🇦 Morocco
              </span>
            </div>
          </motion.div>
        </div>
      </section>
      <div className='bg-gradient-to-br from-slate-800/50 to-slate-900/50' >
      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your specific shipping needs
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all group"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 p-12 rounded-3xl border border-white/10 backdrop-blur-sm text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Our mission is to deliver reliable, high-quality logistics services that ensure your shipments are secure, efficient, and ready for any destination ahead.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 ">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Contact Us
            </h2>
            <p className="text-xl text-gray-300">
              Ready to ship? Get in touch with our logistics experts today.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                {/* Morocco Office */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Morocco Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">24, Rue Meknes Q.I Agadir, Morocco</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+212 660-53 14-88</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300">+212 661-22 76-86</span>
                    </div>
                  </div>
                </motion.div>

                {/* USA Office */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                  <h3 className="text-2xl font-bold mb-4 text-red-400">USA Office</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300">6010 E Hillsborough Ave, Tampa, FL 33610 USA</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300">+1 843-999-4787</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-red-400" />
                      <span className="text-gray-300">+1 617-669-9187</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-indigo-400" />
                    <span className="text-gray-300">hassanbouselham6@gmail.com</span>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm text-center">
                <h3 className="text-3xl font-bold mb-6 text-white">Ready to Ship?</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Get a personalized quote for your logistics needs. Our team is standing by to help you move your cargo efficiently and securely.
                </p>
                
                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Ship Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
                  >
                    Call Now: +1 843-999-4787
                  </motion.button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      </div>
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <Truck className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              EAGLE TRANSPORTATION
            </span>
          </div>
          <p className="text-gray-400">
            © 2025 Eagle Transportation. Your Trusted Logistics Partner.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;