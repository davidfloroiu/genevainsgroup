import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { PhoneIcon, MailIcon, MapPinIcon, CheckIcon } from './Icons';
import './Contact.css';

const CONFIG = {
  EMAILJS_PUBLIC_KEY: 'wZg4UrUZ6-zWc0hmO',
  EMAILJS_SERVICE_ID: 'service_wjk0bqn',
  EMAILJS_TEMPLATE_ID: 'template_ty7wm7i',
};

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const data = {
      first_name: form.first_name.value,
      last_name: form.last_name.value,
      email: form.email.value,
      phone: form.phone.value || 'Not provided',
      coverage_type: form.coverage_type.value,
      message: form.message.value || 'No additional details provided.',
    };

    if (!data.first_name || !data.last_name || !data.email || !data.coverage_type) {
      setStatus({ type: 'error', msg: 'Please fill in all required fields.' });
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      emailjs.init(CONFIG.EMAILJS_PUBLIC_KEY);
      await emailjs.send(CONFIG.EMAILJS_SERVICE_ID, CONFIG.EMAILJS_TEMPLATE_ID, data);
      form.reset();
      setShowModal(true);
    } catch {
      setStatus({ type: 'error', msg: 'Something went wrong. Please try again or contact us directly at (331) 248-0065.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <div className="reveal">
            <div className="section-label">Let's Talk</div>
            <h2 className="section-title">Your protection deserves a <em>real conversation</em></h2>
            <p className="section-subtitle" style={{ marginBottom: '1.75rem' }}>
              No hard sell. No obligation. Just an honest assessment of where you stand and how we might help. Most clients save money while getting better coverage.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><PhoneIcon /></div>
                <div className="contact-text"><strong>Call Us</strong>(331) 248-0065</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MailIcon /></div>
                <div className="contact-text"><strong>Email</strong>info@genevainsgroup.com</div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPinIcon /></div>
                <div className="contact-text"><strong>Serving</strong>Illinois &amp; Nationwide</div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-2">
            <form className="cta-form" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name</label>
                  <input type="text" className="form-input" name="first_name" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name</label>
                  <input type="text" className="form-input" name="last_name" placeholder="Smith" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-input" name="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-input" name="phone" placeholder="(555) 000-0000" />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">What can we help with?</label>
                <select className="form-select" name="coverage_type" required defaultValue="">
                  <option value="" disabled>Select a coverage type</option>
                  <option>Home Insurance</option>
                  <option>Auto Insurance</option>
                  <option>Life &amp; Health</option>
                  <option>Commercial</option>
                  <option>Umbrella</option>
                  <option>Specialty</option>
                  <option>Full Coverage Review</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Tell us a bit more</label>
                <textarea className="form-textarea" name="message" placeholder="Anything you'd like us to know before we connect..." />
              </div>
              <button className="btn-submit" type="submit" disabled={sending}>
                {sending ? 'Sending...' : 'Request a Consultation'}
              </button>
              {status && (
                <div className={`form-status ${status.type}`}>{status.msg}</div>
              )}
            </form>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay active" onClick={(e) => { if (e.target === e.currentTarget) setShowModal(false); }}>
          <div className="modal">
            <div className="modal-icon"><CheckIcon /></div>
            <h3>Message Sent!</h3>
            <p>Thank you for reaching out. We've received your request and a member of our team will be in touch within one business day.</p>
            <button className="modal-close" onClick={() => setShowModal(false)}>Got It</button>
          </div>
        </div>
      )}
    </>
  );
}
