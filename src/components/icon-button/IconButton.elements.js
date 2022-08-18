import styled from 'styled-components';
import { Link } from 'wouter';

export const IconButton = styled(Link)`
  width: 100%;
  max-width: 300px;
  margin: 1rem;
  padding: 1rem;
  font-size: 18px;
  color: #00a887;
  background: none;
  border: 1px solid #00a887;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  // set widto to 100% for all children of type Link

  &:hover {
    background: #00a887;
    color: #fff;
  }
`;
