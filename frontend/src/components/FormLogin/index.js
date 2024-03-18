import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BackgroundImage from './background-image.png';
import Logo from './logo.png';
import ReCaptcha from "react-google-recaptcha"

const defaultTheme = createTheme();

export default function FormLogin({ mode }) {
  const isLoginMode = mode === 'Login';
  const title = isLoginMode ? 'Acesse sua conta' : 'Criar Conta';
  const buttonLabel = isLoginMode ? 'Login' : 'Criar conta';

  const onChange = () => {
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      fullName: data.get('fullName'), 
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F6FA' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={Logo} alt="Icon" style={{ width: '70%', height: '70%', marginBottom: '20px' }} />
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              { !isLoginMode && 
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="fullName"
                  label="Nome Completo"
                  name="fullName"
                  autoComplete="name"
                  autoFocus
                />
              }
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              { !isLoginMode && 
              <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirme sua senha"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              />
              }

            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', marginBottom: '10px' }}>
                <ReCaptcha
                    sitekey="6Lc7Y5kpAAAAAD4cohOqJvxo5b7Q9sruX2lE_DPy"
                    onChange={onChange}
                />
            </Grid>


              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#0B409C', '&:hover': { backgroundColor: '#10316B' } }}
              >
                {buttonLabel}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: '#45454D', whiteSpace: 'nowrap' }}>
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={isLoginMode ? "/signup" : "/"} variant="body2" sx={{ color: '#45454D', whiteSpace: 'nowrap' }}>
                    {isLoginMode
                      ? "Ainda não tem conta? Cadastre-se aqui"
                      : "Já tem uma conta? Faça login aqui"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
