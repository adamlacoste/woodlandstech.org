import React, { Fragment } from "react"
import Helmet from 'react-helmet'
import { Link } from 'gatsby';

import GoOrganization from 'react-icons/lib/go/organization';
import GoInfo from 'react-icons/lib/go/info';
import GoThreeBars from 'react-icons/lib/go/three-bars';

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
    return (
      <Fragment>
        <Helmet
          title={this.props.title ? `${this.props.title} | Woodlands Tech` : 'Woodlands Tech'}
        />

        <Navbar expand="md" className="container">
          <NavbarBrand tag={Link} to="/">Woodlands Tech</NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            Menu&nbsp;<GoThreeBars />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav>
              <NavItem>
                <NavLink tag={Link} to="/meetups">
                  Meetups
                  &nbsp;
                  <GoOrganization />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink tag={Link} to="/about">
                  About
                  &nbsp;
                  <GoInfo />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>


        {this.props.children}
      </Fragment>
    );
  }
}
