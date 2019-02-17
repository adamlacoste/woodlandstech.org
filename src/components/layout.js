import React, { Fragment } from "react"
import Helmet from 'react-helmet'
import { Link } from 'gatsby';

import GoOrganization from 'react-icons/lib/go/organization';
import GoInfo from 'react-icons/lib/go/info';
import GoThreeBars from 'react-icons/lib/go/three-bars';

import "../styles/main.scss"

import { Header } from './Header';

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

        <Header />

        {this.props.children}

      </Fragment>
    );
  }
}
