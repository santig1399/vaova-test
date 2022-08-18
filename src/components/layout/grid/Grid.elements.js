import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(${({ md }) => md}, 1fr);
  }

  @media (min-width: 960px) {
    grid-template-columns: repeat(${({ lg }) => lg}, 1fr);
  }
`;
