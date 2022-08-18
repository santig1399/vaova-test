import { Link } from 'wouter';
import { Formik } from 'formik';
import { loginValidationSchema } from '../../../validations/authSchemas';
import useAuth from '../../../hooks/auth/useAuth';
import InputGroup from '../../form/input-group/InputGroup';
import * as S from '../Auth.elements';

const Login = () => {
  const { logInWithEmailAndPassword, signInWithGoogle } = useAuth();

  const handleSubmit = (values) => {
    logInWithEmailAndPassword(values.email, values.password);
  };

  return (
    <S.Wrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
        validateOnBlur
      >
        {({ errors }) => (
          <S.Form>
            <S.Headline>Ingresa a tu cuenta</S.Headline>

            <S.Button
              type="button"
              color="#fff"
              background="#1A73E8"
              onClick={signInWithGoogle}
            >
              <S.GoogleIcon size={24} />
              Ingresa con Google
            </S.Button>

            <S.Divider />

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
            <S.Button type="submit">Ingresar</S.Button>

            <div>
              ¿No tienes una cuenta?{' '}
              <Link to="/auth/register">
                <S.LinkText>Regístrate</S.LinkText>
              </Link>
            </div>
          </S.Form>
        )}
      </Formik>
    </S.Wrapper>
  );
};

export default Login;
