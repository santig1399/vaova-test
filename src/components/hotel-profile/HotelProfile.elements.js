import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 1rem;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 1rem;
  margin: 2rem 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

export const Headline = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 0.5rem;
  color: #202020;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  gap: 0.5rem;
`;

export const ProfileImage = styled.div`
  width: 100%;
  max-width: 450px;
  height: auto;
  aspect-ratio: 1/1;
  border-radius: 5px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
`;

export const ProfileScore = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  & > *:not(:last-child) {
    border-right: 1px solid #d9d9d9;
  }
`;

export const ProfileRooms = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  & > *:not(:last-child) {
    border-right: 1px solid #d9d9d9;
  }
`;

export const ProfileScoreItem = styled.p`
  width: 100%;
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #202020;
`;

export const ProfileAddress = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: #202020;
`;

export const ProfileDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProfileName = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: #404040;
`;

export const Toolbar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  gap: 0.5rem;
  margin-top: 0.5rem;
  & > *:not(:last-child) {
    border-right: 1px solid #d9d9d9;
  }
`;

export const ActionButton = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  background-color: transparent;
  color: #202020;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  gap: 0.5rem;

  border: 1px solid #d9d9d9;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${({ hoverFg }) => hoverFg};
    background-color: ${({ hoverBg }) => hoverBg};
  }
`;
