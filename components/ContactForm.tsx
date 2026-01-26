'use client';

import { useState, FormEvent } from 'react';
import { submitContactForm } from '@/app/actions/contact';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      website: formData.get('website') as string, // Honeypot
    };

    try {
      const result = await submitContactForm(data);
      
      if (result.success) {
        setSubmitStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'There was an error sending your message.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot Field - Hidden from users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block mb-2 font-light"
          style={{ 
            color: 'var(--color-ink-black)',
            fontSize: '0.9375rem',
            letterSpacing: '0.02em'
          }}
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: 'var(--color-pure-white)',
            borderColor: 'rgba(212, 192, 190, 0.4)',
            color: 'var(--color-ink-black)',
            fontSize: '1rem',
            fontFamily: 'var(--font-sans)'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-rose-accent)';
            e.currentTarget.style.outline = '2px solid rgba(240, 176, 176, 0.5)';
            e.currentTarget.style.outlineOffset = '2px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(212, 192, 190, 0.4)';
            e.currentTarget.style.outline = 'none';
          }}
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block mb-2 font-light"
          style={{ 
            color: 'var(--color-ink-black)',
            fontSize: '0.9375rem',
            letterSpacing: '0.02em'
          }}
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: 'var(--color-pure-white)',
            borderColor: 'rgba(212, 192, 190, 0.4)',
            color: 'var(--color-ink-black)',
            fontSize: '1rem',
            fontFamily: 'var(--font-sans)'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-rose-accent)';
            e.currentTarget.style.outline = '2px solid rgba(240, 176, 176, 0.5)';
            e.currentTarget.style.outlineOffset = '2px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(212, 192, 190, 0.4)';
            e.currentTarget.style.outline = 'none';
          }}
        />
      </div>

      {/* Subject Field */}
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 font-light"
          style={{ 
            color: 'var(--color-ink-black)',
            fontSize: '0.9375rem',
            letterSpacing: '0.02em'
          }}
        >
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: 'var(--color-pure-white)',
            borderColor: 'rgba(212, 192, 190, 0.4)',
            color: 'var(--color-ink-black)',
            fontSize: '1rem',
            fontFamily: 'var(--font-sans)'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-rose-accent)';
            e.currentTarget.style.outline = '2px solid rgba(240, 176, 176, 0.5)';
            e.currentTarget.style.outlineOffset = '2px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(212, 192, 190, 0.4)';
            e.currentTarget.style.outline = 'none';
          }}
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block mb-2 font-light"
          style={{ 
            color: 'var(--color-ink-black)',
            fontSize: '0.9375rem',
            letterSpacing: '0.02em'
          }}
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 rounded-sm border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 resize-none"
          style={{
            backgroundColor: 'var(--color-pure-white)',
            borderColor: 'rgba(212, 192, 190, 0.4)',
            color: 'var(--color-ink-black)',
            fontSize: '1rem',
            fontFamily: 'var(--font-sans)',
            lineHeight: '1.6'
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = 'var(--color-rose-accent)';
            e.currentTarget.style.outline = '2px solid rgba(240, 176, 176, 0.5)';
            e.currentTarget.style.outlineOffset = '2px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(212, 192, 190, 0.4)';
            e.currentTarget.style.outline = 'none';
          }}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="button w-full px-10 py-4 transition-all duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ 
            backgroundColor: 'var(--color-ink-black)',
            color: 'var(--color-pure-white)',
            outlineColor: 'var(--color-ink-black)',
            fontSize: '0.875rem',
            letterSpacing: '0.08em'
          }}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div 
          className="p-4 rounded-sm text-center"
          style={{ 
            backgroundColor: 'rgba(240, 176, 176, 0.2)',
            color: 'var(--color-ink-black)'
          }}
        >
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {submitStatus === 'error' && (
        <div 
          className="p-4 rounded-sm text-center"
          style={{ 
            backgroundColor: 'rgba(240, 176, 176, 0.2)',
            color: 'var(--color-ink-black)'
          }}
        >
          {errorMessage || 'There was an error sending your message. Please try again.'}
        </div>
      )}
    </form>
  );
}
