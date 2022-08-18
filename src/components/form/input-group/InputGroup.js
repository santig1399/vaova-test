import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as S from '../Form.elements';

const InputGroup = ({ id, label, name, errors, placeholder, type, as }) => {
  return (
    <S.InputGroup>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        as={as}
      />
      <ErrorMessage
        name={name}
        component={() => <S.ErrorLabel>{errors[name]}</S.ErrorLabel>}
      />
    </S.InputGroup>
  );
};

InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  as: PropTypes.string
};

export default InputGroup;
