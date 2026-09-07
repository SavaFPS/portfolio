'use client';

import { useState } from 'react';
import { useForm, type Resolver } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { profile } from '@/lib/content';
import {
  validateContact,
  type ContactFormValues,
} from '@/lib/contact';

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

const emptyValues: ContactFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

const contactResolver: Resolver<ContactFormValues> = async (values) => {
  const fieldErrors = validateContact(values);

  if (Object.keys(fieldErrors).length === 0) {
    return { values, errors: {} };
  }

  return {
    values: {},
    errors: Object.fromEntries(
      Object.entries(fieldErrors).map(([field, message]) => [
        field,
        { type: 'validate', message },
      ])
    ),
  };
};

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-1 text-sm text-red-400">
      {message}
    </p>
  );
}

const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: contactResolver,
    defaultValues: emptyValues,
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError('');

    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => null)) as {
        message?: string;
        errors?: Partial<Record<keyof ContactFormValues, string>>;
      } | null;

      if (response.ok) {
        setSubmittedName(values.firstName);
        setIsSuccess(true);
        reset(emptyValues);
        return;
      }

      if (payload?.errors) {
        (
          Object.entries(payload.errors) as [
            keyof ContactFormValues,
            string,
          ][]
        ).forEach(([field, message]) => {
          setError(field, { type: 'server', message });
        });
      }

      setSubmitError(
        payload?.message ||
          `Failed to send the message. You can also email me at ${profile.email}.`
      );
    } catch {
      setSubmitError(
        `Couldn't reach the server. Check your connection or email me at ${profile.email}.`
      );
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setSubmittedName('');
    setSubmitError('');
    reset(emptyValues);
  };

  return (
    <section className="py-10 xl:py-14">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10 xl:flex-row">
          {!isSuccess ? (
            <div className="order-2 xl:order-none xl:w-[58%]">
              <form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-6 rounded-2xl border border-cream/10 bg-secondary p-6 sm:p-10"
              >
                <div>
                  <p className="mb-2 text-sm uppercase tracking-[0.28em] text-accent">
                    Contact
                  </p>
                  <h3>Let&apos;s make the first step.</h3>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <Input
                      type="text"
                      placeholder="First name"
                      autoComplete="given-name"
                      maxLength={25}
                      aria-invalid={Boolean(errors.firstName)}
                      aria-describedby={
                        errors.firstName ? 'first-name-error' : undefined
                      }
                      {...register('firstName')}
                    />
                    <FieldError
                      id="first-name-error"
                      message={errors.firstName?.message}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Last name"
                      autoComplete="family-name"
                      maxLength={25}
                      aria-invalid={Boolean(errors.lastName)}
                      aria-describedby={
                        errors.lastName ? 'last-name-error' : undefined
                      }
                      {...register('lastName')}
                    />
                    <FieldError
                      id="last-name-error"
                      message={errors.lastName?.message}
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email address"
                      autoComplete="email"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={
                        errors.email ? 'email-error' : undefined
                      }
                      {...register('email')}
                    />
                    <FieldError
                      id="email-error"
                      message={errors.email?.message}
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      autoComplete="tel"
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? 'phone-error' : undefined
                      }
                      {...register('phone')}
                    />
                    <FieldError
                      id="phone-error"
                      message={errors.phone?.message}
                    />
                  </div>
                </div>

                <div>
                  <Textarea
                    className="h-44"
                    placeholder="Type your message here"
                    maxLength={500}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? 'message-error' : undefined
                    }
                    {...register('message')}
                  />
                  <FieldError
                    id="message-error"
                    message={errors.message?.message}
                  />
                </div>

                {submitError && (
                  <p role="alert" className="text-sm text-red-400">
                    {submitError}
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full sm:w-auto"
                  size="md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
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
                <p>Dear {submittedName},</p>
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
