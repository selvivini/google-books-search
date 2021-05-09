import React from 'react'
import {Navbar, Nav, NavLink} from 'react-bootstrap'

function NavBar() {
return (
 <Navbar style= {{backgroundColor: "purple"}} expand="lg" className="mt-3">
  <Navbar.Brand href="#home" className="text-light m-3"><h2>Google-books-Search</h2></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavLink href="/" className="m-3 text-white"><h4><u>Search</u></h4></NavLink>
      <NavLink href="/saved" className="m-3 text-white"><h4><u>Saved</u></h4></NavLink>
      </Nav>
   </Navbar.Collapse>
</Navbar>
    )
}

export default NavBar
