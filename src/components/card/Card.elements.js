import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CardContent = styled.div`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid #e8e8e8;
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  align-self: flex-end;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Toolbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-top: 1px solid #d9d9d9;

  & > *:not(:last-child) {
    border-right: 1px solid #d9d9d9;
  }
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: #212121;
`;

export const CardSubtitle = styled.h3`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #212121;
`;

export const StarsCount = styled.div`
  width: 100%;
  font-size: 18px;
  color: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  background-color: transparent;
  color: #212121;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;
  &:hover {
    opacity: 0.8;
    color: ${({ hoverColor }) => hoverColor};
  }
`;
