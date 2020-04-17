import React from "react";
import Navbar from "react-bootstrap/Navbar";
function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="fixed-top">
      <div className="container">
        <Navbar.Brand href="#home">bayuiqbal - COVID19</Navbar.Brand>
      </div>
    </Navbar>
  );
}

export default Navigation;
