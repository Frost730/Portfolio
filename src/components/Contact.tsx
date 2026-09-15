import React, { useState } from 'react';
import { profile } from '../data/profile';
import { 
  Mail, 
  Phone, 
  MapPin, 
  FileDown, 
  Check, 
  Copy, 
  Send, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Inquiry - ' + formData.name
    )}&body=${encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-900/40 border-t border-dark-800 text-left section-render-opt" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold mb-1">
            Initiate Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg text-slate-300 mt-2 leading-relaxed">
            Actively seeking entry-level Machine Learning, Computer Vision, and AI Engineering roles. Whether you have an opportunity, a technical query, or want to discuss research, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-dark-900 border border-dark-750 hover:border-slate-600 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span>Email Address</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`mailto:${profile.email}`}
                className="text-base sm:text-lg font-semibold text-white hover:text-sky-400 transition-colors block break-all font-mono"
              >
                {profile.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-dark-900 border border-dark-750 hover:border-slate-600 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 uppercase">
                  <Phone className="w-4 h-4 text-indigo-400" />
                  <span>Direct Phone</span>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={`tel:${profile.phone}`}
                className="text-base sm:text-lg font-semibold text-white hover:text-indigo-400 transition-colors block font-mono"
              >
                {profile.phone}
              </a>
            </div>

            {/* Location & Social Card */}
            <div className="p-5 rounded-2xl bg-dark-900 border border-dark-750 hover:border-slate-600 transition-all duration-300">
              <div className="text-xs font-mono text-slate-400 uppercase mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>Location</span>
              </div>
              <p className="text-base font-semibold text-white font-mono mb-4">
                {profile.location}
              </p>

              <div className="pt-4 border-t border-dark-800 flex flex-wrap items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-dark-850 hover:bg-dark-800 hover:text-white border border-dark-750 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                {profile.linkedin && profile.linkedin !== 'LINKEDIN_URL' ? (
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-dark-850 hover:bg-dark-800 hover:text-white border border-dark-750 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono text-slate-400 bg-dark-850/50 border border-dark-800">
                    <LinkedinIcon className="w-4 h-4 text-slate-400" />
                    <span>LinkedIn Available on Request</span>
                  </span>
                )}
              </div>
            </div>

            {/* Resume Quick Access Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-950/40 via-dark-900 to-dark-900 border border-sky-500/25 flex items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>Curriculum Vitae</span>
                </h4>
                <p className="text-xs text-slate-300 mt-0.5">
                  M.Sc. CS &bull; Verified projects &amp; academic history
                </p>
              </div>

              <a
                href={profile.resumePath}
                download="Sainadh_V_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-colors shrink-0 shadow-sm"
              >
                <FileDown className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900 border border-dark-750 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the fields below to compose an inquiry directly to Sainadh's inbox.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-dark-750 text-slate-100 placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-dark-750 text-slate-100 placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Subject / Role Opportunity
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="ML Engineer Opening / Research Collaboration"
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-dark-750 text-slate-100 placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 uppercase mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details regarding role requirements, technical focus, or project inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-950 border border-dark-750 text-slate-100 placeholder-slate-400 text-base sm:text-sm focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-slate-950 bg-slate-100 hover:bg-white transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Send Message</span>
                  </button>

                  {formSubmitted && (
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                      <Check className="w-4 h-4" />
                      <span>Opening your email client...</span>
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
