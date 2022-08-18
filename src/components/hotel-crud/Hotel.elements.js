import styled from 'styled-components';
import { Form as FormikForm, Field } from 'formik';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Headline = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

export const Form = styled(FormikForm)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  gap: 1rem;
`;

export const Group = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: ${({ direction }) => direction || 'row'};
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
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

export const Checkbox = styled(Field)`
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid #ccc;
  accent-color: #00dec5;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 18px;
  height: 40px;
  border: none;
  border-radius: 5px;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${({ color }) => color || '#fff'};
  background-color: ${({ background }) => background || '#00A887'};
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  &:hover {
    opacity: 0.8;
  }
`;
