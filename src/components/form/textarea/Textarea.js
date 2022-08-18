import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';
import * as S from '../Form.elements';

const Textarea = ({ id, label, name, placeholder, cols, rows, errors }) => {
  const [field] = useField({
    name
  });

  return (
    <S.InputGroup>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Textarea
        as={'textarea'}
        id={id}
        label={label}
        {...field}
        placeholder={placeholder}
        cols={cols}
        rows={rows}
      />
      <ErrorMessage
        name={name}
        component={() => <S.ErrorLabel>{errors[name]}</S.ErrorLabel>}
      />
    </S.InputGroup>
  );
};

Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  cols: PropTypes.number.isRequired,
  rows: PropTypes.number.isRequired,
  errors: PropTypes.object.isRequired
};

export default Textarea;
