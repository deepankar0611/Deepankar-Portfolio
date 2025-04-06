import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/deepankar0611',
    color: 'hover:text-gray-900 dark:hover:text-white',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com/in/deepankar0611',
    color: 'hover:text-[#0077B5]',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:deepankarsingh1@gmail.com',
    color: 'hover:text-red-500',
  },
  {
    name: 'Phone',
    icon: FaPhone,
    url: 'tel:+917479519946',
    color: 'hover:text-green-500',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="section-container">
      <div className="animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of the following channels or fill
              out the contact form.
            </p>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 text-gray-600 dark:text-gray-400 ${link.color} transition-colors animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="card">
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Patna, Bihar
                <br />
                India
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="card animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-light focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-light focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-light focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
} 