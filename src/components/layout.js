import React, { Fragment } from "react"
import Helmet from 'react-helmet'
import { Link } from 'gatsby';

import GoOrganization from 'react-icons/lib/go/organization';

import "../styles/main.scss"

import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Nav,
  Collapse
} from 'reactstrap';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    }
  }
  toggle = () => {
    this.setState({ 
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    return (<Fragment>
      <Helmet title={this.props.title ? `${this.props.title} | Woodlands Tech` : 'Woodlands Tech'} />

      <Navbar color="light" expand="md" className="container">
        <NavbarBrand tag={Link} to="/">Woodlands Tech</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>

          <Nav>
            <NavItem>
              <NavLink tag={Link} to="/meetups">
                Meetups
                &nbsp;
                <GoOrganization />
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>


      {this.props.children}
    </Fragment>);
  }
}
