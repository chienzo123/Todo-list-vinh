import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import ErrorMsg from '../errors/errors';

type RegisterFormValues = {
  firstName?: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    mode: 'onChange',
  });

  const passwordValue = watch('password');

  useEffect(() => {
    // Re-validate confirmPassword whenever password changes
    if (passwordValue) {
      void trigger('confirmPassword');
    }
  }, [passwordValue, trigger]);

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    console.log('Submit data:', data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Register
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* First Name (optional) */}
          <div>
            <input
              type="text"
              placeholder="First Name (optional)"
              className="border p-2 w-full rounded"
              {...register('firstName', {
                minLength: {
                  value: 2,
                  message: 'First name must be at least 2 characters',
                },
              })}
            />
            <ErrorMsg message={errors.firstName?.message} />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="border p-2 w-full rounded"
              {...register('lastName', {
                required: 'Last name is required',
                minLength: {
                  value: 2,
                  message: 'Last name must be at least 2 characters',
                },
              })}
            />
            <ErrorMsg message={errors.lastName?.message} />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="border p-2 w-full rounded"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email format',
                },
              })}
            />
            <ErrorMsg message={errors.email?.message} />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="border p-2 w-full rounded"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            <ErrorMsg message={errors.password?.message} />
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-2 w-full rounded"
              {...register('confirmPassword', {
                required: 'Confirm password is required',
                validate: (value) =>
                  value === passwordValue || 'Passwords do not match',
              })}
            />
            <ErrorMsg message={errors.confirmPassword?.message} />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition-colors">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
