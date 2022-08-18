import styled from 'styled-components';
export const Nav = styled.nav`
  background: #00a887;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

export const LogoLinkText = styled.a`
  color: white;
  text-decoration: none;
  padding: 1rem;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  vertical-align: middle;
`;

export const MobileIcon = styled.div`
  pointer-events: all;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-40%, 80%);
  font-size: 24px;
  cursor: pointer;
  color: white;

  @media screen and (min-width: 960px) {
    display: none;
    pointer-events: none;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: 2rem;
  align-items: center;
  list-style: none;
  margin: 0;
  touch-action: none;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ isOpen }) => (isOpen ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #00dec5;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  border-bottom: 1px solid transparent;

  &:hover {
    border: none;
    color: white;
  }
  @media screen and (min-width: 960px) {
    &:hover {
      border-bottom: 1px solid white;
      color: white;
    }
  }
`;

export const NavLinks = styled.a`
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0.5rem;
  text-decoration: none !important;
  justify-content: center;
  cursor: pointer;
  &:hover {
    text-decoration: none !important;
    color: white;
    transition: all 0.3s ease;
  }
`;
