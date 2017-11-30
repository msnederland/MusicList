import React from 'react';
import 'whatwg-fetch';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cypotodata: {},
    };

    //this._isMounted = false;
    this.getCryptoData = this.getCryptoData.bind(this);
  }

  componentWillMount() {
    console.log('will mount');
    //this._isMounted = true;
    this.getCryptoData();
    console.log('done will');
  }

  getCryptoData() {
    console.log('crypto data function called');
    //console.log('spinning');

    fetch(
      // where to contact
      '/api/crypto',
      // what to send
      {
        method: 'GET',
        credentials: 'same-origin',
      },
    )
    .then((response) => {
      if (response.status === 200) {
        console.log('Response status: ', response.status);
        return response.json();
      }
      console.log('FAIL!!');
      return null;
    })
    .then((json) => {
      if (json) {
        console.log('setting state');
        this.setState({
          cryptodata: json,
        });
      }
      return json;
    });
    console.log('end of async');
  }

  render() {
    const data = this.state.cypotodata || '';
    console.log('render');
    return (
      <Sidebar cryptodata={data} />
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(SidebarContainer);
