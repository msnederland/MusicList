import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Sidebar />
    );
  }
}

export default connect()(SidebarContainer);
