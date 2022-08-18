import { useRef } from 'react';
import { ErrorMessage } from 'formik';
import { AiOutlineUpload } from 'react-icons/ai';
import PropTypes from 'prop-types';
import * as S from '../Form.elements';

const InputFile = ({ label, id, name, file, handleChange, errors }) => {
  const inputRef = useRef(null);

  const openFileDialog = () => {
    inputRef.current.click();
  };

  return (
    <S.InputGroup>
      <S.Label htmlFor={id}>{label}</S.Label>
      <S.UploadFileButton onClick={openFileDialog} type="button">
        <S.UploadFileInput
          id={id}
          type="file"
          name={name}
          onChange={handleChange}
          accept="image/*"
          ref={inputRef}
          style={{ display: 'none' }}
        />
        <S.UploadFileIcon>
          <AiOutlineUpload size={24} />
          Subir archivo
        </S.UploadFileIcon>
        <S.UploadFileLabel>
          {!file && 'Selecciona un archivo'}
          {file && '1 archivo seleccionado'}
        </S.UploadFileLabel>
      </S.UploadFileButton>
      <ErrorMessage
        name={name}
        component={() => <S.ErrorLabel>{errors[name]}</S.ErrorLabel>}
      />
    </S.InputGroup>
  );
};

InputFile.propTypes = {
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  file: PropTypes.object,
  errors: PropTypes.object.isRequired
};

export default InputFile;
