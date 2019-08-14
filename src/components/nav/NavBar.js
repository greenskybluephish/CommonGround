import React, { Component } from "react"
import "./NavBar.css"
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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
       localStorage.clear();
       this.toggle();  
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
               <NavbarBrand tag={Link} to="/">Common Ground</NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
          <NavItem>
                <NavLink onClick={this.toggle} tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} tag={Link} to="/topartists">Top Artists</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={this.toggle} tag={Link} to="/shared">Share</NavLink>
              </NavItem>

              <NavItem>
                   <NavLink onClick={this.handleSubmit} tag={Link} to="/login">Log Out</NavLink>
              </NavItem>
               </Nav>
               </Collapse>
           </Navbar>
           </div>
       )
   }
}

export default NavBar