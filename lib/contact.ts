export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_PATTERN = /^[\p{L}\s'-]+$/u;

function asTrimmedString(value: unknown) {
  return String(value ?? '').trim();
}

export function readContactPayload(body: unknown): ContactFormValues {
  const data =
    body && typeof body === 'object' ? (body as Record<string, unknown>) : {};

  return {
    firstName: asTrimmedString(data.firstName),
    lastName: asTrimmedString(data.lastName),
    email: asTrimmedString(data.email),
    phone: asTrimmedString(data.phone),
    message: asTrimmedString(data.message),
  };
}

export function validateContact(values: ContactFormValues): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!values.firstName) {
    errors.firstName = 'First name is required.';
  } else if (values.firstName.length > 25) {
    errors.firstName = 'First name must be 25 characters or less.';
  } else if (!NAME_PATTERN.test(values.firstName)) {
    errors.firstName = 'Enter a valid first name.';
  }

  if (!values.lastName) {
    errors.lastName = 'Last name is required.';
  } else if (values.lastName.length > 25) {
    errors.lastName = 'Last name must be 25 characters or less.';
  } else if (!NAME_PATTERN.test(values.lastName)) {
    errors.lastName = 'Enter a valid last name.';
  }

  if (!values.email) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }

  const phoneDigits = values.phone.replace(/\D/g, '');
  if (!values.phone) {
    errors.phone = 'Phone number is required.';
  } else if (phoneDigits.length < 6 || phoneDigits.length > 15) {
    errors.phone = 'Enter a valid phone number.';
  }

  if (!values.message) {
    errors.message = 'Message is required.';
  } else if (values.message.length < 8) {
    errors.message = 'Message should be at least 8 characters.';
  } else if (values.message.length > 500) {
    errors.message = 'Message must be 500 characters or less.';
  }

  return errors;
}

export function getContactSendErrorMessage(error: unknown) {
  const code =
    typeof error === 'object' && error && 'code' in error
      ? String((error as { code?: string }).code)
      : '';

  if (code === 'EAUTH') {
    return "The message couldn't be sent. Please email me directly instead.";
  }

  if (
    code === 'ECONNECTION' ||
    code === 'ETIMEDOUT' ||
    code === 'ESOCKET' ||
    code === 'EDNS'
  ) {
    return "Couldn't reach the mail server. Please try again in a moment.";
  }

  return 'Failed to send the message. Please try again later.';
}
