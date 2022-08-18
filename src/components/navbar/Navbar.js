import { useState } from 'react';
import { Link } from 'wouter';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
  Nav,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  LogoLinkText,
  MenuWrapper
} from './Navbar.elements';
import useAuth from '../../hooks/auth/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleClick = () => {
    if (window.innerWidth <= 960) {
      setIsOpen(!isOpen);
    }
  };
  const closeMobileMenu = () => setIsOpen(false);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Link href="/" onClick={closeMobileMenu}>
            <LogoLinkText onClick={() => setIsOpen(false)}>
              <img alt="Vaova logo" src="/img/Logo.png"></img>
            </LogoLinkText>
          </Link>

          <MobileIcon onClick={handleClick}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <MenuWrapper>
            <NavMenu onClick={handleClick} isOpen={isOpen}>
              {!isAuthenticated && (
                <NavItem>
                  <Link href={'/auth/login'}>
                    <NavLinks>Ingresar</NavLinks>
                  </Link>
                </NavItem>
              )}
              {isAuthenticated && (
                <>
                  <NavItem>
                    <Link href={'/hotels'}>
                      <NavLinks>Hoteles</NavLinks>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <NavLinks onClick={logout}>Salir</NavLinks>
                  </NavItem>
                </>
              )}
            </NavMenu>
          </MenuWrapper>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
