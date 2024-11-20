import React, { useEffect, useState } from 'react';
import { MessageCircle, Shield, Users, Heart, AlertTriangle, Mail, Phone, Building, ArrowRight, Sparkles, Globe2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-blue-500/20 rounded-full filter blur-[100px] animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-500/20 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-1/3 h-1/3 bg-pink-500/20 rounded-full filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0A0F1C]/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <MessageCircle className="w-8 h-8 text-blue-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                ChitChatTalk
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['Features', 'How It Works', 'Safety', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 transition-all group-hover:w-full"></span>
                </a>
              ))}
              <button className="relative inline-flex items-center px-6 py-2 overflow-hidden text-white bg-blue-500 rounded-full group hover:scale-105 transition-all">
                <span className="absolute left-0 w-0 h-full transition-all bg-purple-500 opacity-100 group-hover:w-full duration-300 ease-out"></span>
                <span className="relative flex items-center">
                  Start Chatting
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto text-center relative z-10" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full mb-8 backdrop-blur-sm border border-white/10">
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-sm">Experience the future of random chat</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Connect Beyond Boundaries
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of users worldwide in meaningful conversations. Make friends, share stories, and create lasting connections.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-lg font-semibold transition transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25">
              <span className="relative z-10 flex items-center">
                Start Chatting Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <div className="flex items-center space-x-2 text-gray-400">
              <Globe2 className="w-5 h-5" />
              <span>1M+ Active Users</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text" data-aos="fade-up">
            Why Choose ChitChatTalk?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12" />,
                title: "Secure & Private",
                description: "End-to-end encryption and strict privacy measures"
              },
              {
                icon: <Users className="w-12 h-12" />,
                title: "Global Community",
                description: "Connect with people from different cultures"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Real Connections",
                description: "Make genuine friendships worldwide"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="relative group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl transition-all group-hover:blur-2xl"></div>
                <div className="relative p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">
                  <div className="flex justify-center mb-6">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-400 text-center">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Verification */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-red-500/10 to-purple-500/10 backdrop-blur-sm border border-red-500/20" data-aos="fade-up">
            <div className="absolute inset-0 bg-red-500/5"></div>
            <div className="relative p-8 text-center">
              <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Age Restriction Notice</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                ChitChatTalk is strictly for users 18 years and older. By using our service, you confirm that you are at least 18 years of age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text" data-aos="fade-up">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Mail className="w-8 h-8" />,
                title: "Email Support",
                info: "support@chitchattalk.in"
              },
              {
                icon: <Phone className="w-8 h-8" />,
                title: "Phone",
                info: "+91 (XXX) XXX-XXXX"
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "Business Inquiries",
                info: "ads@chitchattalk.in"
              }
            ].map((contact, index) => (
              <div
                key={index}
                className="group relative"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl transition-all group-hover:blur-2xl"></div>
                <div className="relative p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                      {contact.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                  <p className="text-gray-400">{contact.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MessageCircle className="w-6 h-6 text-blue-400" />
                <span className="text-lg font-bold">ChitChatTalk</span>
              </div>
              <p className="text-gray-400">
                Connect and chat with people worldwide instantly and securely.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-blue-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a></li>
                <li><a href="#safety" className="hover:text-blue-400 transition-colors">Safety</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
                <li><a href="/cookies" className="hover:text-blue-400 transition-colors">Cookie Policy</a></li>
                <li><a href="/disclaimer" className="hover:text-blue-400 transition-colors">Disclaimer</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@chitchattalk.in</li>
                <li>Advertising: ads@chitchattalk.in</li>
                <li>Phone: +91 (XXX) XXX-XXXX</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ChitChatTalk. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;