import React, { Component } from "react"
import "./NavBar.css"
import "bootstrap/dist/css/bootstrap.min.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    // Container,
    // Row,
    // Col,
    // Jumbotron,
    Button
} from 'reactstrap';

class NavBar extends Component {
  state = {
      value: [],
      isOpen: false
   }
   
     handleChange = (event) => {
       this.setState({value: event.target.value});
     }
   
     handleSubmit = (event) => {
       sessionStorage.clear();   
     }
    
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }


   render() {
       return (
        <div>
           <Navbar color="#464EA3" dark expand="md">
               <NavbarBrand href="/">Common Ground</NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
          <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/topartists">Top Artists</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/share">Share</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/weather">Weather</NavLink>
              </NavItem>
              <NavItem>
                   <NavLink onClick={this.handleSubmit} href="/login">Log Out</NavLink>
              </NavItem>
               </Nav>
               </Collapse>
           </Navbar>
           </div>
       )
   }
}

export default NavBar