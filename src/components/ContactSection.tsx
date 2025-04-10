
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import AnimatedText from './AnimatedText';
import emailjs from 'emailjs-com';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
    // .then(() => {
    //   toast.success('Message sent successfully!');
    //   setFormData({ name: '', email: '', subject: '', message: '' });
    // })
    // .catch(() => {
    //   toast.error('Failed to send message. Try again later.');
    // })
    // .finally(() => setIsSubmitting(false));

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: 'I will get back to you as soon as possible.',
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-spacing bg-secondary/50">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            <AnimatedText text="Get In Touch" type="words" />
          </h2>
          <p className="text-lg text-muted-foreground">
            <AnimatedText
              text="Have a project in mind? Let's work together to bring your ideas to life."
              type="words"
              animationDelay={100}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out through the contact form or via the contact information provided.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto:contact@alexanderdev.com" className="text-muted-foreground hover:text-primary transition-colors">
                    mokkapalliprudviraj@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">Bengaluru, Karnataka</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 630-2618655
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://dribbble.com/uiuxbyprudvi" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border transition-colors hover:bg-primary hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.66 6.98C19.766 5.447 18.553 4.233 17.019 3.34C15.486 2.447 13.813 2 12 2C10.187 2 8.514 2.447 6.98 3.34C5.447 4.233 4.233 5.447 3.34 6.98C2.447 8.513 2 10.187 2 12C2 13.813 2.446 15.487 3.34 17.02C4.234 18.554 5.447 19.767 6.981 20.66C8.514 21.553 10.187 22 12 22C13.813 22 15.486 21.553 17.02 20.66C18.553 19.767 19.767 18.554 20.661 17.02C21.554 15.487 22 13.813 22 12C22 10.187 21.554 8.513 20.66 6.98ZM12 3.66C14 3.66 15.772 4.3 17.32 5.579C16.4 6.753 15.034 7.719 13.22 8.479C12.218 6.666 11.132 5.152 9.959 3.939C10.641 3.753 11.319 3.66 12 3.66ZM5.51 6.8C6.264 5.853 7.166 5.114 8.221 4.58C9.433 5.781 10.546 7.28 11.561 9.08C9.561 9.68 7.447 9.98 5.22 9.98C4.647 9.98 4.214 9.967 3.92 9.94C4.227 8.793 4.757 7.747 5.51 6.8ZM3.66 12C3.66 11.946 3.663 11.88 3.67 11.8C3.677 11.72 3.68 11.654 3.68 11.6C3.934 11.614 4.321 11.62 4.841 11.62C7.507 11.62 9.987 11.253 12.28 10.52C12.467 10.893 12.661 11.313 12.86 11.78C11.54 12.073 10.186 12.786 8.799 13.92C7.412 15.054 6.4 16.247 5.76 17.5C4.36 15.913 3.66 14.08 3.66 12ZM12 20.34C10.106 20.34 8.406 19.753 6.899 18.581C7.5 17.394 8.423 16.259 9.67 15.18C10.916 14.1 12.153 13.427 13.38 13.16C14.152 15.293 14.673 17.499 14.94 19.78C13.966 20.153 12.986 20.34 12 20.34ZM19.08 16.38C18.414 17.446 17.554 18.32 16.5 19.001C16.26 16.921 15.8 14.894 15.121 12.92C16.053 12.854 16.886 12.82 17.621 12.82C18.42 12.82 19.307 12.854 20.28 12.92C20.146 14.16 19.746 15.313 19.08 16.38ZM17.84 11.38C16.68 11.38 15.607 11.427 14.62 11.52C14.366 10.867 14.14 10.327 13.94 9.9C16.006 8.994 17.472 7.894 18.339 6.6C19.539 8.014 20.193 9.627 20.299 11.44C19.487 11.4 18.667 11.38 17.84 11.38Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border transition-colors hover:bg-primary hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="https://github.com/MokkapalliPrudviRaj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border transition-colors hover:bg-primary hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/uiuxbyprudvi/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center border transition-colors hover:bg-primary hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-background rounded-xl p-8 border shadow-sm">
              <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
