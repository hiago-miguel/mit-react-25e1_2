import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">
          <img src={logo} alt="Logo" width="50" />
        </NavbarBrand>
      </Container>
    </Navbar>
  );
};

export default Header;
