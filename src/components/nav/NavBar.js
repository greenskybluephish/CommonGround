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
    // Button
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
       event.preventDefault();
       this.props.searches(this.state.value);
       if(event.type === "click") {
           let form = event.target.parentNode.parentNode
           form.reset();
       } else {
       let form = event.target
       form.reset();
       }
     }
    
    toggle() {
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
                <NavLink href="/home">Home</NavLink>
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
                   {/* <Form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
                   <label>
                   Search:
                   <input type="text" onChange={this.handleChange} className="form-control mr-sm-2" />
                       </label>
                   <Button  onClick={this.handleSubmit} value="Submit">Search</Button>
                   </Form>  */}
               </Nav>
               </Collapse>
           </Navbar>
           </div>
       )
   }
}

export default NavBar