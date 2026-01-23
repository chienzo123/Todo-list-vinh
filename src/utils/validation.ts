// Email validation patterns
export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validation error messages
export const VALIDATION_MESSAGES = {
  email: {
    required: 'Email is required',
    invalid: 'Invalid email format',
  },
  password: {
    required: 'Password is required',
    minLength: 'Password must be at least 6 characters',
  },
  confirmPassword: {
    required: 'Confirm password is required',
    mismatch: 'Passwords do not match',
  },
} as const;

/**
 * Validates an email address
 * @param email - The email to validate
 * @param isRequired - Whether the email is required (default: true)
 * @returns Error message if invalid, undefined if valid
 */
export const validateEmail = (
  email: string | undefined,
  isRequired = true,
): string | undefined => {
  if (!email || email.trim() === '') {
    return isRequired ? VALIDATION_MESSAGES.email.required : undefined;
  }
  if (!EMAIL_PATTERN.test(email)) {
    return VALIDATION_MESSAGES.email.invalid;
  }
  return undefined;
};

/**
 * Validates a password
 * @param password - The password to validate
 * @param minLength - Minimum password length (default: 6)
 * @param isRequired - Whether the password is required (default: true)
 * @returns Error message if invalid, undefined if valid
 */
export const validatePassword = (
  password: string | undefined,
  minLength = 6,
  isRequired = true,
): string | undefined => {
  if (!password || password.trim() === '') {
    return isRequired ? VALIDATION_MESSAGES.password.required : undefined;
  }
  if (password.length < minLength) {
    return VALIDATION_MESSAGES.password.minLength;
  }
  return undefined;
};

/**
 * Validates that confirm password matches the original password
 * @param confirmPassword - The confirm password value
 * @param password - The original password to match against
 * @param isRequired - Whether confirm password is required (default: true)
 * @returns Error message if invalid, undefined if valid
 */
export const validateConfirmPassword = (
  confirmPassword: string | undefined,
  password: string | undefined,
  isRequired = true,
): string | undefined => {
  if (!confirmPassword || confirmPassword.trim() === '') {
    return isRequired
      ? VALIDATION_MESSAGES.confirmPassword.required
      : undefined;
  }
  if (confirmPassword !== password) {
    return VALIDATION_MESSAGES.confirmPassword.mismatch;
  }
  return undefined;
};

/**
 * React Hook Form validation functions for email
 */
export const emailValidation = {
  required: VALIDATION_MESSAGES.email.required,
  pattern: {
    value: EMAIL_PATTERN,
    message: VALIDATION_MESSAGES.email.invalid,
  },
};

/**
 * React Hook Form validation functions for password
 */
export const passwordValidation = {
  required: VALIDATION_MESSAGES.password.required,
  minLength: {
    value: 6,
    message: VALIDATION_MESSAGES.password.minLength,
  },
};

// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const navigate = useNavigate();

//   const onSubmitHandler = (e: React.FormEvent) => {
//     e.preventDefault();
//     navigate('/home', { replace: true });
//   };
