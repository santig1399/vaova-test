import * as Yup from 'yup';

export const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('El correo no es válido')
    .required('El correo es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
});

export const registerValidationSchema = Yup.object().shape({
  name: Yup.string().required('El nombre es requerido'),
  email: Yup.string()
    .email('El correo no es válido')
    .required('El correo es requerido'),
  password: Yup.string()
    .required('La contraseña es requerida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
});

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('El correo no es válido')
    .required('El correo es requerido')
});
