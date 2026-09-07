'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { profile } from '@/lib/content';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: profile.phone,
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: profile.email,
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Location',
    description: profile.location,
  },
];

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!form.current) return;

    const data = new FormData(form.current);

    setIsLoading(true);
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.get('firstname'),
          lastName: data.get('lastname'),
          email: data.get('email'),
          phone: data.get('phone'),
          message: data.get('message'),
        }),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setErrorMessage('Failed to send the message. Please try again later.');
      }
    } catch {
      setErrorMessage('Failed to send the message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    form.current?.reset();
    setFirstName('');
    setMessage('');
  };

  return (
    <section className="py-10 xl:py-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 xl:flex-row">
          {!isSuccess ? (
            <div className="order-2 xl:order-none xl:w-[58%]">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-6 rounded-2xl border border-cream/10 bg-secondary p-6 sm:p-10"
              >
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.28em] text-accent">
                    Contact
                  </p>
                  <h3>Let&apos;s make the first step.</h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    maxLength={25}
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last name"
                    required
                    maxLength={25}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone number"
                    required
                  />
                </div>

                <Textarea
                  name="message"
                  className="h-44"
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  maxLength={500}
                />

                {errorMessage && <p className="text-red-400">{errorMessage}</p>}

                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  size="md"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                  ) : (
                    'Send message'
                  )}
                </Button>
              </form>
            </div>
          ) : (
            <div className="order-2 flex flex-col justify-between gap-6 rounded-2xl border border-cream/10 bg-secondary p-10 xl:order-none xl:w-[58%]">
              <h3 className="text-accent">Thank you for your message!</h3>
              <div className="flex flex-col gap-3 text-cream/70">
                <p>Dear {firstName},</p>
                <p>I appreciate your message and will respond as soon as I can.</p>
                <p>
                  Best regards,
                  <br />
                  {profile.name}
                </p>
              </div>
              <div>
                <Button onClick={resetForm}>Send another message</Button>
              </div>
            </div>
          )}

          <div className="order-1 flex flex-1 items-center xl:order-none xl:justify-center">
            <ul className="flex flex-col gap-8">
              {info.map((item) => (
                <li key={item.title} className="flex items-center gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-accent xl:h-16 xl:w-16">
                    <div className="text-2xl">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-cream/45">
                      {item.title}
                    </p>
                    {item.title === 'Email' ? (
                      <a
                        href={`mailto:${item.description}`}
                        className="text-lg transition-colors hover:text-accent xl:text-xl"
                      >
                        {item.description}
                      </a>
                    ) : item.title === 'Phone' ? (
                      <a
                        href={`tel:${item.description.replace(/[^\d+]/g, '')}`}
                        className="text-lg transition-colors hover:text-accent xl:text-xl"
                      >
                        {item.description}
                      </a>
                    ) : (
                      <h3 className="text-lg xl:text-xl">{item.description}</h3>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
