import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Menu,
  X,
  CircleCheckBig,
  Mail,
  Linkedin,
  Github,
  Instagram,
  CodeXml,
  Smartphone,
  MapPin,
  MessageCircle
} from 'lucide-react';
import { Hero } from '@/components/ui/animated-hero';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tight cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-action-blue">Gagan's</span> DevStudio.
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <button onClick={() => scrollToSection('home')} className="hover:text-slate-900 transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-slate-900 transition-colors">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-slate-900 transition-colors">Work</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-slate-900 transition-colors">Pricing</button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-colors"
            >
              Contact Me
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg py-4 px-6 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 text-slate-600 font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 text-slate-600 font-medium">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left py-2 text-slate-600 font-medium">Work</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left py-2 text-slate-600 font-medium">Pricing</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-action-blue font-medium">Contact Me</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-12 md:pt-28 md:pb-16 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-50 rounded-full blur-3xl -z-10 opacity-50"></div>

        <Hero />
      </section>

      {/* The "Trust" About Section */}
      <section id="about" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight text-center">Bridging the gap between local craftsmanship and the digital world.</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6 text-justify">
              I am a 6th-semester Bachelor of Computer Applications (BCA) student and a Full-Stack Developer.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed mb-10 text-justify">
              While many businesses have great services, they are invisible online. I solve that by building fast, modern websites that look great on any phone, ensuring your business stands out when customers are searching.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="bg-blue-50 p-4 rounded-xl text-action-blue mb-4">
                  <CodeXml size={28} />
                </div>
                <h3 className="font-semibold text-slate-900">Web Development</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="bg-emerald-50 p-4 rounded-xl text-emerald-600 mb-4">
                  <Smartphone size={28} />
                </div>
                <h3 className="font-semibold text-slate-900">Mobile Ready</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100 text-center">
                <div className="bg-purple-50 p-4 rounded-xl text-purple-600 mb-4">
                  <MapPin size={28} />
                </div>
                <h3 className="font-semibold text-slate-900">Local SEO</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio (Demos) Section */}
      <section id="portfolio" className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Through My Skills I Build</h2>
            <p className="text-slate-600 text-lg">Clean, conversion-focused designs tailored for local businesses.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative shadow-sm group-hover:shadow-2xl group-hover:shadow-slate-900/10 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="The Royal Saloon"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-action-blue transition-colors duration-300">The Royal Saloon</h3>
              <p className="text-slate-500">Premium booking landing page.</p>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative shadow-sm group-hover:shadow-2xl group-hover:shadow-slate-900/10 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="IELTS & Coaching Academy"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-action-blue transition-colors duration-300">IELTS & Coaching Academy</h3>
              <p className="text-slate-500">Information & Lead generation portal.</p>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group cursor-pointer hover:-translate-y-2 transition-all duration-300"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative shadow-sm group-hover:shadow-2xl group-hover:shadow-slate-900/10 transition-all duration-300">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tasty Bites Restaurant"
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-action-blue transition-colors duration-300">Tasty Bites Restaurant</h3>
              <p className="text-slate-500">Menu showcase & reservations.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Simple, Transparent Pricing</h2>
            <p className="text-slate-600 text-lg">Invest in a digital storefront that works for you 24/7.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {/* Starter */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Starter</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold">₹1,999</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-600">
                  <CircleCheckBig size={20} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>One-Page Professional Design</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CircleCheckBig size={20} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>Standard Web Address</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CircleCheckBig size={20} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>Fully Mobile Responsive</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CircleCheckBig size={20} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>Google Maps Location Link</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 px-6 rounded-full font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 hover:scale-105 active:scale-95 transition-transform"
              >
                Get Started
              </button>
            </motion.div>

            {/* Professional (Highlighted) */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800 transition-all duration-300 relative md:-mt-8 md:mb-8"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-action-blue text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide uppercase">
                Best Value
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Professional</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold text-white">₹2,999</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-300">
                  <CircleCheckBig size={20} className="text-action-blue shrink-0 mt-0.5" />
                  <span>Everything in Starter</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CircleCheckBig size={20} className="text-action-blue shrink-0 mt-0.5" />
                  <span className="text-white font-medium">Official .in Domain Name</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CircleCheckBig size={20} className="text-action-blue shrink-0 mt-0.5" />
                  <span>Professional Email Setup</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <CircleCheckBig size={20} className="text-action-blue shrink-0 mt-0.5" />
                  <span>WhatsApp Chat Integration</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 px-6 rounded-full font-bold text-white bg-action-blue hover:bg-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 transition-transform"
              >
                Get Started
              </button>
            </motion.div>

            {/* Business */}
            <motion.div
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Business</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-bold">₹3,999</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-600">
                  <CircleCheckBig size={20} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>Everything in Professional</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CircleCheckBig size={20} className="text-slate-400 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-900">Official .com Domain Name</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CircleCheckBig size={20} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>Basic SEO (Show up on Google)</span>
                </li>
                <li className="flex items-start gap-3 text-slate-600">
                  <CircleCheckBig size={20} className="text-slate-400 shrink-0 mt-0.5" />
                  <span>1 Year Technical Support</span>
                </li>
              </ul>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full py-3 px-6 rounded-full font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 hover:scale-105 active:scale-95 transition-transform"
              >
                Get Started
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Ready to grow your business?</h2>
          <p className="text-slate-600 text-lg mb-12">
            Let's discuss how a professional website can help you attract more customers and build trust online.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 text-slate-600 mb-10">
            <div className="w-16 h-16 bg-blue-100/50 rounded-full flex items-center justify-center text-action-blue mb-2">
              <Mail size={28} />
            </div>
            <div>
              <p className="font-medium text-slate-900 text-lg">Email Me Directly</p>
              <a href="heygagnkainth@gmail.com" className="text-action-blue hover:underline text-lg font-medium">heygagnkainth@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4 w-full max-w-md mx-auto mb-10">
            <div className="h-px bg-slate-200 flex-1"></div>
            <span className="text-slate-400 font-medium uppercase tracking-wider text-sm">Or</span>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100 text-left">
            <h3 className="text-2xl font-bold mb-6">Send a message</h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const name = (document.getElementById('name') as HTMLInputElement).value;
                const business = (document.getElementById('business') as HTMLInputElement).value;
                const message = (document.getElementById('message') as HTMLTextAreaElement).value;

                const text = `Hi, I'm ${name} from ${business}.\n\n${message}`;
                const encodedText = encodeURIComponent(text);
                // Replace with your actual WhatsApp number (include country code, no + or spaces)
                const whatsappNumber = "917719603961";
                window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
              }}
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-action-blue/20 focus:border-action-blue transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-1">Business Type / Name</label>
                <input
                  type="text"
                  id="business"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-action-blue/20 focus:border-action-blue transition-all"
                  placeholder="e.g. The Royal Saloon"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-action-blue/20 focus:border-action-blue transition-all resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-95 transition-transform flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 bg-white text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <h3 className="font-semibold text-slate-900 mb-6 text-lg">Connect with me</h3>
          <div className="flex gap-4 mb-8">
            <a href="https://www.linkedin.com/in/gagnsingh" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-slate-100">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/gagnkainth" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-slate-100">
              <Github size={20} />
            </a>
            <a href="https://www.instagram.com/imggnnn/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-slate-100">
              <Instagram size={20} />
            </a>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Gagan's DevStudio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
