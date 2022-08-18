import { Formik } from 'formik';
import { Link } from 'wouter';
import { registerValidationSchema } from '../../../validations/authSchemas';
import InputGroup from '../../form/input-group/InputGroup';
import useAuth from '../../../hooks/auth/useAuth';
import * as S from '../Auth.elements';

const Register = () => {
  const { registerWithEmailAndPassword, signInWithGoogle } = useAuth();

  const handleSubmit = (values) => {
    registerWithEmailAndPassword(values.name, values.email, values.password);
  };

  return (
    <S.Wrapper>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        onSubmit={handleSubmit}
        validationSchema={registerValidationSchema}
        validateOnBlur
      >
        {({ errors }) => (
          <S.Form>
            <S.Headline>Crea una cuenta</S.Headline>
            <S.Button
              type="button"
              color="#fff"
              background="#1A73E8"
              onClick={signInWithGoogle}
            >
              <S.GoogleIcon />
              Regístrate con Google
            </S.Button>

            <S.Divider />

            <InputGroup
              id="name"
              type="text"
              label="Nombre"
              name="name"
              placeholder="Nombre completo"
              errors={errors}
            />

            <InputGroup
              id="email"
              type="email"
              label="Correo electrónico"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              errors={errors}
            />

            <InputGroup
              id="password"
              type="password"
              label="Contraseña"
              name="password"
              placeholder="Ingresa tu contraseña"
              errors={errors}
            />

            <Link to="/auth/forgot-password">
              <S.LinkText>¿Olvidaste la contraseña?</S.LinkText>
            </Link>

            <S.Button type="submit">Crear cuenta</S.Button>

            <div>
              ¿Ya tienes una cuenta?{' '}
              <Link to="/auth/login">
                <S.LinkText>Inicia sesión</S.LinkText>
              </Link>
            </div>
          </S.Form>
        )}
      </Formik>
    </S.Wrapper>
  );
};

export default Register;
