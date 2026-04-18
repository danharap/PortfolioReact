import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { validateForm, sendContactEmail } from '../services/contactService';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Reveal from './ui/Reveal';
import Button from './ui/Button';

const ContactSection = ({ darkMode }) => {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setIsSubmitting(true);
    setErrors({});
    setSubmitStatus(null);
    try {
      const result = await sendContactEmail(formData);
      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message);
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Something went wrong. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
      window.setTimeout(() => {
        setSubmitStatus(null);
        setSubmitMessage('');
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className={`py-24 md:py-32 ${darkMode ? 'bg-ink-950' : 'bg-white'}`}
      aria-labelledby="contact-heading"
    >
      <Container>
        <Reveal>
          <SectionHeader
            darkMode={darkMode}
            eyebrow="Contact"
            title="Let’s build something worth launching"
            titleId="contact-heading"
            description="Open to internships, collaborations, and teams who care about craft. Tell me what you’re working on — I’ll respond personally."
            align="left"
          />
        </Reveal>

        <div className="mt-4 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="space-y-10">
            <div>
              <p
                className={`text-lg leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}
              >
                Prefer email? Reach me directly — no forms required.
              </p>
              <a
                href="mailto:daniel@harapiak.com"
                className={`mt-4 inline-flex items-center gap-2 text-xl font-semibold transition-colors ${
                  darkMode ? 'text-white hover:text-blue-300' : 'text-zinc-900 hover:text-blue-700'
                }`}
              >
                <Mail size={22} className="shrink-0 text-blue-500" aria-hidden />
                daniel@harapiak.com
              </a>
            </div>
            <div className={`flex items-start gap-3 ${darkMode ? 'text-zinc-500' : 'text-zinc-600'}`}>
              <MapPin size={20} className="mt-0.5 shrink-0 text-blue-500" aria-hidden />
              <span>Burlington, Ontario, Canada</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/danielharapiak/"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  darkMode
                    ? 'border-white/15 text-white hover:bg-white/5'
                    : 'border-zinc-300 text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/danharap"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors ${
                  darkMode
                    ? 'border-white/15 text-white hover:bg-white/5'
                    : 'border-zinc-300 text-zinc-900 hover:bg-zinc-50'
                }`}
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div
              className={`rounded-2xl border p-8 shadow-card md:p-10 ${
                darkMode ? 'border-white/[0.08] bg-zinc-900/40' : 'border-zinc-200 bg-zinc-50'
              }`}
            >
              <h3 className={`mb-8 font-display text-xl font-semibold ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
                Send a message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <AnimatePresence mode="wait">
                  {submitStatus && (
                    <motion.div
                      key={submitStatus}
                      initial={reduceMotion ? false : { opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
                      className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
                        submitStatus === 'success'
                          ? darkMode
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-200'
                            : 'border-emerald-200 bg-emerald-50 text-emerald-900'
                          : darkMode
                            ? 'border-red-500/30 bg-red-500/10 text-red-200'
                            : 'border-red-200 bg-red-50 text-red-900'
                      }`}
                    >
                      {submitStatus === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                      {submitMessage}
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label
                    htmlFor="contact-name"
                    className={`mb-2 block text-sm font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    autoComplete="name"
                    className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                      errors.name
                        ? 'border-red-500/60'
                        : darkMode
                          ? 'border-white/10 bg-zinc-950/80 text-white placeholder:text-zinc-600'
                          : 'border-zinc-300 bg-white text-zinc-900'
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className={`mb-2 block text-sm font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    autoComplete="email"
                    className={`w-full rounded-xl border px-4 py-3.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                      errors.email
                        ? 'border-red-500/60'
                        : darkMode
                          ? 'border-white/10 bg-zinc-950/80 text-white placeholder:text-zinc-600'
                          : 'border-zinc-300 bg-white text-zinc-900'
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className={`mb-2 block text-sm font-medium ${darkMode ? 'text-zinc-300' : 'text-zinc-700'}`}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    rows={5}
                    className={`w-full resize-none rounded-xl border px-4 py-3.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                      errors.message
                        ? 'border-red-500/60'
                        : darkMode
                          ? 'border-white/10 bg-zinc-950/80 text-white placeholder:text-zinc-600'
                          : 'border-zinc-300 bg-white text-zinc-900'
                    }`}
                    placeholder="What are you building, and how can I help?"
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>

                <Button
                  as="button"
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                  className={`w-full py-4 ${isSubmitting ? 'cursor-not-allowed opacity-70' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="animate-spin" size={18} />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
