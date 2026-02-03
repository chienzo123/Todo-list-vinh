import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Paper,
  TextField,
  Button,
  Box,
  Typography,
  Alert,
} from '@mui/material';
import { validateLogin, type LoginData } from '../../utils/validation';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginData>({
    email: '',
    password: '',
  });

  // Check if token exists in localStorage and redirect to home
  // NOTE: we intentionally do not auto-redirect on mount so user
  // can navigate back to the login page even when a token exists.
  // If you want to enforce redirect for authenticated users,
  // re-enable the check below.
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) navigate('/home', { replace: true });
  }, [navigate]);

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
    setErrors(validateLogin(updated));
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validateLogin(formData));
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({ email: true, password: true });
    const validationErrors = validateLogin(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setFormError(Object.values(validationErrors).join('. '));
      return;
    }

    // Check credentials: email must be vinhdepzai and password must be 123456
    if (
      formData.email === 'vkd28@drexel.edu' &&
      formData.password === '123456'
    ) {
      // Create fake token
      const fakeToken =
        'fake_token_' +
        Date.now() +
        '_' +
        Math.random().toString(36).substring(7);
      localStorage.setItem('token', fakeToken);
      setFormError(null);
      // navigate normally (do not replace history) so user can go back to login
      navigate('/home');
    } else {
      setFormError('Invalid credentials. Please use vkd28@drexel.edu / 123456');
    }
  };

  const isValid = Object.keys(validateLogin(formData)).length === 0;

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
            Login
          </Typography>

          {formError && (
            <Alert severity="error" sx={{ marginBottom: 2 }}>
              {formError}
            </Alert>
          )}

          <Box component="form" onSubmit={onSubmitHandler} noValidate>
            <TextField
              fullWidth
              name="email"
              label="Email"
              type="email"
              value={formData.email}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              error={touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              margin="normal"
              placeholder="Enter your email"
              variant="outlined"
            />

            <TextField
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={onChangeHandler}
              onBlur={onBlurHandler}
              error={touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              margin="normal"
              placeholder="Enter your password"
              variant="outlined"
            />

            <Button
              type="submit"
              fullWidth
              disabled={!isValid}
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
                '&:disabled': {
                  opacity: 0.5,
                  cursor: 'not-allowed',
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginForm;
