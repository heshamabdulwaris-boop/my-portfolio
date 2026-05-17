import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin} from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { useFormValidation } from '../../hooks/useFormValidation';
import { personalInfo } from '../../data/personalInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { errors, validate, clearErrors } = useFormValidation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      clearErrors();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate(formData)) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      // Create email content for mailto link
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      
      // Open default email client with pre-filled content
      window.location.href = `mailto:heshamabdulwaris@gmail.com?subject=${subject}&body=${body}`;
      
      // Show success message after a short delay
      setTimeout(() => {
        toast.success('Email client opened! Please send the email to contact me.');
        setFormData({ name: '', email: '', message: '' });
      }, 500);
      
    } catch (error) {
      toast.error('Failed to open email client. Please contact me directly at heshamabdulwaris@gmail.com');
      console.error('Email error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: FaEnvelope, label: 'Email', value: personalInfo.email, link: personalInfo.social.email },
    { icon: FaPhone, label: 'Phone', value: personalInfo.phone, link: `tel:${personalInfo.phone}` },
    { icon: FaMapMarkerAlt, label: 'Location', value: personalInfo.location, link: '#' },
  ];

  const socialLinks = [
    { icon: FaGithub, url: personalInfo.social.github, label: 'GitHub' },
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="Get In Touch" subtitle="Let's discuss your next project" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Let's Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
              Feel free to reach out!
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700/50 group"
                >
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{info.label}</p>
                    <p className="font-semibold text-slate-800 dark:text-slate-100">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-4">
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white dark:bg-slate-800/50 backdrop-blur-sm text-slate-700 dark:text-slate-300 rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-500 hover:text-white transition-all duration-300 hover:scale-110 border border-slate-200 dark:border-slate-700/50"
                    aria-label={social.label}
                  >
                    <social.icon className="text-2xl" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700/50">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border ${
                    errors.name ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  } text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border ${
                    errors.email ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  } text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900/50 border ${
                    errors.message ? 'border-red-500' : 'border-slate-200 dark:border-slate-700'
                  } text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
