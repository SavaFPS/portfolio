'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'phone',
    description: '(+381) 614224331',
  },
  {
    icon: <FaEnvelope />,
    title: 'email',
    description: 'sava.tasic23@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Location',
    description: 'Niš, Serbia',
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
    setErrorMessage(''); // Reset error message

    if (form.current) {
      setIsLoading(true);
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: form.current['firstname'].value,
            lastName: form.current['lastname'].value,
            email: form.current['email'].value,
            phone: form.current['phone'].value,
            message: form.current['message'].value,
          }),
        });

        if (response.ok) {
          setIsSuccess(true);
        } else {
          setErrorMessage(
            'Failed to send the message. Please try again later.'
          );
          console.log('Error:', response.statusText);
        }
      } catch (error) {
        setErrorMessage('Failed to send the message. Please try again later.');
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    form.current?.reset();
    setFirstName('');
    setMessage('');
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.6, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto xl:py-0 py-6">
        <div className="flex flex-col xl:flex-row gap-8">
          {!isSuccess ? (
            <div className="xl:w-[55%] order-2 xl:order-none">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col gap-6 p-10 bg-secundary rounded-xl"
              >
                <h3 className="text-3xl text-accent">
                  Let&#39;s make the first step.
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                  <Input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    required
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
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <Textarea
                  name="message"
                  className="h-52"
                  placeholder="Type your message here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />

                {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                <div className="flex justify-center items-center">
                  <Button
                    type="submit"
                    className="max-w-40"
                    size="md"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 rounded-full animate-spin border-4 border-solid border-primary border-t-transparent"></div>
                    ) : (
                      'Send message'
                    )}
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            <div className="xl:w-[55%] flex flex-col justify-between order-2 xl:order-none bg-secundary rounded-xl text-center xl:text-left gap-6 p-10">
              <h3 className="text-3xl text-accent">
                Thank you for your message!
              </h3>
              <div className="flex flex-col text-white/70 gap-3">
                <p>Dear {firstName},</p>
                <p>
                  I appreciate your message and will respond as soon as I can!
                </p>
                <p>
                  Best regards,
                  <br />
                  Sava Tasić
                </p>
              </div>
              <div>
                <Button onClick={resetForm}>Send Another Message</Button>
              </div>
            </div>
          )}

          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((info, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-14 h-14 xl:w-[72px] xl:h-[72px] bg-secundary text-accent rounded-full justify-center items-center flex">
                    <div className="text-3xl">{info.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/70">{info.title}</p>
                    <h3 className="text-xl">{info.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
