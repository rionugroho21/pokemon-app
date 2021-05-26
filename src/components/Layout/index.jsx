import React, { Component } from 'react';
import { object } from 'prop-types'
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import Menu from '../Menu';

class Layout extends Component{
  static propTypes = {
    route: object
  };

  head(){
    return(
      <Helmet>
        <title>Pokemon App</title>
      </Helmet>
    )
  }

  render() {
    return (
      <React.Fragment>
        {this.head()}
        <Menu />
        <div className="content">
          {renderRoutes(this.props.route.routes)}
        </div>
      </React.Fragment>
    )
  }
}

export default Layout;
