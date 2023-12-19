import React from "react";
import { Container, Navbar } from "react-bootstrap";
const NavBar = () => {
  return (
    <div>
      <Navbar expand="sm" className="text-bg-dark p-1">
        <Container>
          <h3>Home</h3>
          <h3>Store</h3>
          <h3>About</h3>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
