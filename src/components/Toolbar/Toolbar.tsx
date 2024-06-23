import React from 'react';
import {Button, Container, Nav, Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

interface Props{
  isAdmin:boolean;
  getAdmin:React.MouseEventHandler
}
const Toolbar:React.FC<Props> = ({
  isAdmin,
  getAdmin
}) => {
  let btnText = 'User';
  if(isAdmin){
    btnText = 'Admin'
  }
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to="/">
         Lllogo
        </NavLink>

        <Nav className="me-auto">
          <NavLink className='nav-link' to="/">Home</NavLink>
          <NavLink className='nav-link' to="/products">Products</NavLink>
          <NavLink className='nav-link' to="/about-us">About us</NavLink>
          <NavLink className='nav-link' to="/contacts">Contacts</NavLink>
        </Nav>
        <Nav>
          <Button variant="success" onClick={getAdmin}>Now {btnText}</Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Toolbar;