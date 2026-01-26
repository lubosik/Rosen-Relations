'use server';

/**
 * Contact form submission handler
 * 
 * Rate Limiting Readiness:
 * - Structure is ready for rate limiting implementation
 * - Recommended: Use a service like Upstash Redis or Vercel KV
 * - Check IP address and timestamp before processing
 * - Example implementation:
 *   const key = `contact:${ipAddress}`;
 *   const count = await redis.incr(key);
 *   if (count === 1) await redis.expire(key, 3600); // 1 hour window
 *   if (count > 5) throw new Error('Rate limit exceeded');
 */

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string; // Honeypot field
}

export async function submitContactForm(formData: ContactFormData) {
  // Honeypot validation
  if (formData.website) {
    // Bot detected - silently fail
    return { success: true }; // Don't reveal honeypot detection
  }

  // Rate limiting check would go here
  // TODO: Implement rate limiting using Redis/KV store
  // const ipAddress = headers().get('x-forwarded-for') || 'unknown';
  // const rateLimitKey = `contact:${ipAddress}`;
  // Check and increment rate limit counter

  // Validate required fields
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    return { success: false, error: 'All fields are required' };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    return { success: false, error: 'Invalid email address' };
  }

  // TODO: Send email using a service like Resend, SendGrid, or similar
  // TODO: Store submission in database if needed
  // TODO: Send notification to admin

  // For now, simulate success
  // TODO: Replace with actual email sending and database storage
  return { success: true, error: undefined };
}
