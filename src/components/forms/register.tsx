import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import {
  Container,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
} from '@mui/material';
import {
  registerValidationRules,
  type RegisterFormValues,
} from '../../utils/validation';

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
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            width: '100%',
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              textAlign: 'center',
              marginBottom: 3,
              fontWeight: 'bold',
              color: '#1976d2',
            }}
          >
            Register
          </Typography>

          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              fullWidth
              label="First Name (optional)"
              type="text"
              placeholder="First Name (optional)"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              margin="normal"
              variant="outlined"
              {...register('firstName', registerValidationRules.firstName)}
            />

            <TextField
              fullWidth
              label="Last Name"
              type="text"
              placeholder="Last Name"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              margin="normal"
              variant="outlined"
              {...register('lastName', registerValidationRules.lastName)}
            />

            <TextField
              fullWidth
              label="Email"
              type="email"
              placeholder="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
              margin="normal"
              variant="outlined"
              {...register('email', registerValidationRules.email)}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              placeholder="Password"
              error={!!errors.password}
              helperText={errors.password?.message}
              margin="normal"
              variant="outlined"
              {...register('password', registerValidationRules.password)}
            />

            <TextField
              fullWidth
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              margin="normal"
              variant="outlined"
              {...register(
                'confirmPassword',
                registerValidationRules.confirmPassword(passwordValue),
              )}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                marginTop: 3,
                padding: '10px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1565c0',
                },
              }}
            >
              Register
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;
