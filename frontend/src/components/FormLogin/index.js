import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logo from './logo.jpeg';

const defaultTheme = createTheme();

export default function FormLogin({ mode }) {
  const isLoginMode = mode === 'Login';
  const title = isLoginMode ? 'Login' : 'Criar Conta';
  const buttonLabel = isLoginMode ? 'Login' : 'Cadastrar';

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
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
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: '#AC8DF2' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {title}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="E-mail"
                name="email"
                autoComplete="email"
                autoFocus
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#AC8DF2', '&:hover': { backgroundColor: '#7C5EB4' } }}
              >
                {buttonLabel}
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: '#45454D', whiteSpace: 'nowrap'}}>
                    Esqueceu a senha?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={isLoginMode ? "/signup" : "/"} variant="body2" sx={{ color: '#45454D', whiteSpace: 'nowrap'}}>
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
