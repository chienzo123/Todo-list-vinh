// Email validation regex pattern
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

// Login validation
export type LoginData = {
  email: string;
  password: string;
};

export const validateLogin = (data: LoginData) => {
  const errors: Partial<Record<keyof LoginData, string>> = {};

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!EMAIL_PATTERN.test(data.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

// Register validation
export type RegisterFormValues = {
  firstName?: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerValidationRules = {
  firstName: {
    minLength: {
      value: 2,
      message: 'First name must be at least 2 characters',
    },
  },
  lastName: {
    required: 'Last name is required',
    minLength: {
      value: 2,
      message: 'Last name must be at least 2 characters',
    },
  },
  email: {
    required: 'Email is required',
    pattern: {
      value: EMAIL_PATTERN,
      message: 'Invalid email format',
    },
  },
  password: {
    required: 'Password is required',
    minLength: {
      value: 6,
      message: 'Password must be at least 6 characters',
    },
  },
  confirmPassword: (passwordValue: string) => ({
    required: 'Confirm password is required',
    validate: (value: string) =>
      value === passwordValue || 'Passwords do not match',
  }),
};
