import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_xvafdfr",
        "template_ykrr07c",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "hSN_QUOxUxcbCDaQi"
      );

      setSent(true);
      setFormData({ name: '', email: '', message: '' });

      // hide success message after 3 seconds
      setTimeout(() => setSent(false), 3000);

    } catch (error) {
      alert("❌ Transmission Failed. Try Again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 bg-ink text-paper relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Section */}
          <div>
            <span className="font-mono text-xs block mb-2 text-paper/50">04 // COMMUNICATION</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
              Let's <br /> Build <br /> Future
            </h2>

            <div className="space-y-8 mt-12">
              <div>
                <p className="font-mono text-xs text-paper/50 mb-1">DIRECT FEED</p>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-2xl font-bold hover:text-accent transition-colors">
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div>
                <p className="font-mono text-xs text-paper/50 mb-2">SOCIAL CHANNELS</p>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map(link => (
                    <a key={link.platform} href={link.url} className="p-3 border border-paper/20 hover:bg-paper hover:text-ink transition-colors">
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-paper text-ink p-8 md:p-12 relative shadow-[20px_20px_0px_0px_rgba(255,255,255,0.1)]">
            <div className="absolute top-4 right-4">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <h3 className="text-xl font-bold uppercase mb-8 border-b-2 border-ink pb-4">Transmission Form</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="font-mono text-xs font-bold uppercase block mb-2">Identity</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-ink/20 py-3 text-lg font-medium focus:outline-none focus:border-ink transition-colors placeholder-ink/30"
                  placeholder="ENTER NAME"
                  required
                />
              </div>

              <div className="group">
                <label className="font-mono text-xs font-bold uppercase block mb-2">Coordinates</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-ink/20 py-3 text-lg font-medium focus:outline-none focus:border-ink transition-colors placeholder-ink/30"
                  placeholder="ENTER EMAIL"
                  required
                />
              </div>

              <div className="group">
                <label className="font-mono text-xs font-bold uppercase block mb-2">Data Packet</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-transparent border-b-2 border-ink/20 py-3 text-lg font-medium focus:outline-none focus:border-ink transition-colors placeholder-ink/30 resize-none"
                  placeholder="ENTER MESSAGE"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-ink text-paper py-4 font-bold uppercase tracking-widest hover:bg-accent transition-colors flex justify-center items-center gap-2 disabled:opacity-50"
              >
                {loading ? "Transmitting..." : "Initialize Send"} <ArrowRight size={18} />
              </button>

              {sent && (
                <p className="text-green-600 text-sm font-mono pt-2">✔ Transmission Delivered Successfully.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
