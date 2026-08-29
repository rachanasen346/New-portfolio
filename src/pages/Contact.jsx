import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaPhoneAlt, FaGraduationCap } from 'react-icons/fa';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const { alert, showAlert, hideAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        'service_mpbq65c',
        'template_yqkso8r',
        {
          from_name: form.name,
          to_name: 'Rachana Sen',
          from_email: form.email,
          to_email: 'rachanasen1999@gmail.com',
          message: form.message,
        },
        'j62ZLmLAUTfVfyzZ5'
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: 'Thank you! Your message has been sent successfully.',
          type: 'success',
        });

        setTimeout(() => {
          hideAlert();
          setForm({ name: '', email: '', message: '' });
        }, 3000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        showAlert({
          show: true,
          text: 'Something went wrong. Please try again or email directly.',
          type: 'danger',
        });
      });
  };

  return (
    <section id="contact" className="min-h-screen py-24 bg-slate-50 flex items-center justify-center">
      {alert.show && <Alert {...alert} />}

      <div className="max-w-6xl w-full mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold tracking-wide mb-3">
            Let’s Connect
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-base">
            Interested in academic faculty roles, guest lectures, technical workshops, or student training collaborations? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information Card */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Rachana Sen
              </h3>
              <p className="text-blue-600 font-semibold text-sm mb-6 flex items-center gap-2">
                <FaGraduationCap /> Computer Science Educator &amp; Trainer
              </p>

              <p className="text-gray-600 text-sm leading-relaxed mb-8">
                I am open to discussions regarding Assistant Professor appointments, corporate &amp; institutional training batches, and curriculum design opportunities.
              </p>

              <div className="space-y-5">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium block">Email Address</span>
                    <a
                      href="mailto:rachanasen1999@gmail.com"
                      className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition"
                    >
                      rachanasen1999@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium block">Phone / WhatsApp</span>
                    <a
                      href="tel:+917610128678"
                      className="text-sm font-semibold text-gray-800 hover:text-blue-600 transition"
                    >
                      +91 7610128678
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 font-medium block">Location</span>
                    <span className="text-sm font-semibold text-gray-800">
                      Rewa, Madhya Pradesh, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Resume Link Card */}
            <div className="mt-10 p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-xs font-semibold text-gray-700 block mb-2">
                Need my full profile and credentials?
              </span>
              <a
                href="/RachanaSenResume.pdf"
                download="Rachana_Sen_Resume.pdf"
                className="inline-block w-full py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-lg transition"
              >
                Download Curriculum Vitae (PDF)
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="e.g. Dr. Sharma / HR Manager"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="e.g. name@institution.edu.in"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                  Your Message / Proposal
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your institution, open role, or workshop topic..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition flex items-center justify-center space-x-2 shadow-sm disabled:opacity-50"
              >
                <FaPaperPlane className="text-xs" />
                <span>{isLoading ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;