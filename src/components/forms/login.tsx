import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorComponent from '../../components/errors/errors';

type LoginData = {
  email: string;
  password: string;
};

const validate = (data: LoginData) => {
  const errors: Partial<Record<keyof LoginData, string>> = {};

  if (!data.email) {
    errors.email = 'Email is required';
  } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.email = 'Enter a valid email';
  }

  if (!data.password) {
    errors.password = 'Password is required';
  }

  return errors;
};

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof LoginData, string>>
  >({});

  const [touched, setTouched] = useState<
    Partial<Record<keyof LoginData, boolean>>
  >({});

  const [formError, setFormError] = useState<string | null>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updated = { ...formData, [name]: value } as LoginData;
    setFormData(updated);
    setErrors(validate(updated));
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(formData));
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ email: true, password: true });
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFormError(Object.values(validationErrors).join('. '));
      return;
    }

    //  navigate to home
    setFormError(null);
    navigate('/home', { replace: true });
  };

  const isValid = Object.keys(validate(formData)).length === 0;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        {formError && (
          <div className="mb-4">
            <ErrorComponent message={formError} />
          </div>
        )}

        <form className="space-y-4" onSubmit={onSubmitHandler} noValidate>
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              className="w-full px-4 py-3 border border-gray-200 rounded"
              type="email"
              placeholder="Enter your email"
            />
            {touched.email && errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              name="password"
              value={formData.password}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              className="w-full px-4 py-3 border border-gray-200 rounded"
              type="password"
              placeholder="Enter your password"
            />
            {touched.password && errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={!isValid}
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition disabled:opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
