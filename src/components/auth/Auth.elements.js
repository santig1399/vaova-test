import styled from 'styled-components';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Form as FormikForm } from 'formik';
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
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
  gap: 1rem;
`;

export const Divider = styled.hr`
  width: 100%;
  margin-top: 1.5rem;
  padding: 0;
  overflow: visible;
  border: none;
  border-top: 1px solid #e0e0e0;
  color: #6e6d7a;
  text-align: center;

  &::after {
    content: 'Ó';
    display: inline-block;
    position: relative;
    top: -12px;
    padding: 0 1rem;
    background-color: #fff;
  }
`;

export const LinkText = styled.a`
  font-size: 16px;
  font-weight: 400;
  color: #00a887;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const GoogleIcon = styled(AiOutlineGoogle)`
  font-size: 24px;
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
