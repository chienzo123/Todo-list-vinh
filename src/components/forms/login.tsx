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
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home', { replace: true });
    }
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

    //  navigate to home
    setFormError(null);
    navigate('/home', { replace: true });
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
