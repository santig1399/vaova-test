import { Formik } from 'formik';
import { Link } from 'wouter';
import { forgotPasswordValidationSchema } from '../../../validations/authSchemas';
import InputGroup from '../../form/input-group/InputGroup';
import useAuth from '../../../hooks/auth/useAuth';
import * as S from '../Auth.elements';

const ForgotPassword = () => {
  const { sendPasswordReset } = useAuth();

  const handleSubmit = (values) => {
    sendPasswordReset(values.email);
  };

  return (
    <S.Wrapper>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{ email: '' }}
        validationSchema={forgotPasswordValidationSchema}
        validateOnBlur
      >
        {({ errors }) => (
          <S.Form>
            <S.Headline>Recuperar contraseña</S.Headline>
            <InputGroup
              id="email"
              type="email"
              label="Correo electrónico"
              name="email"
              placeholder="Correo electrónico"
              errors={errors}
            />

            <S.Button type="submit">Enviar correo de recuperación</S.Button>

            <div>
              ¿No tienes una cuenta?
              <Link to="/auth/register">
                <S.LinkText> Regístrate</S.LinkText>
              </Link>
            </div>
          </S.Form>
        )}
      </Formik>
    </S.Wrapper>
  );
};

export default ForgotPassword;
