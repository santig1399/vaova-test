import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  padding: ${({ padding }) => padding};

  @media screen and (min-width: 768px) {
    flex-direction: ${({ direction }) => direction};
    align-items: flex-start;
    justify-content: flex-start;
  }
`;
