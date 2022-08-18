import PropTypes from 'prop-types';
import { ErrorMessage, useField } from 'formik';
import * as S from '../Form.elements';
const Select = ({ id, label, name, type, options, placeholder, errors }) => {
  const [field] = useField(name);
  return (
    <S.InputGroup>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.Select
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        {...field}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </S.Select>
      <ErrorMessage
        name={name}
        component={() => <S.ErrorLabel>{errors[name]}</S.ErrorLabel>}
      />
    </S.InputGroup>
  );
};

Select.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Select;
