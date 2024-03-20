export const validateForm = (formData, isLoginMode) => {
  const errors = {};

  if (!isLoginMode && !isValidEmail(formData.email)) {
    errors.email = "Email inválido";
  }

  if (formData.password.length < 6) {
    errors.password = "A senha deve ter pelo menos 6 caracteres";
  }

  if (!formData.email) {
    errors.email = "Email obrigatório";
  }
  if (!formData.password) {
    errors.password = "Senha obrigatória";
  }
  if (!isLoginMode && !formData.fullName) {
    errors.fullName = "Nome completo obrigatório";
  }
  if (!isLoginMode && !formData.confirmPassword) {
    errors.confirmPassword = "Confirmação de senha obrigatória";
  } else if (!isLoginMode && formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "As senhas não coincidem";
  }
  return errors;
};

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
