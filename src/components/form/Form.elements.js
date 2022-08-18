import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const Form = styled(FormikForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  gap: 1rem;
`;

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #000;
`;

export const Input = styled(Field)`
  width: 100%;
  padding: 5px 1rem;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const Textarea = styled.textarea`
  font-family: inherit;
  width: 100%;
  padding: 5px 1rem;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  &::placeholder {
    color: #202020;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 5px 1rem;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const ErrorLabel = styled.p`
  color: #f44336;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
`;

export const UploadFileButton = styled.button`
  width: 100%;
  height: 40px;
  padding: 0;
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`;

export const UploadFileInput = styled.input`
  display: none;
`;

export const UploadFileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #00a887;
  color: #fff;
  border-radius: 5px 0 0 5px;
  padding: 1rem;
  gap: 0.5rem;
`;

export const UploadFileLabel = styled.p`
  font-size: 16px;
  width: 100%;
  color: #404040;
  margin: 0;
`;
