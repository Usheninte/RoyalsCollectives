import React, { Component } from 'react';

import './Main.css';

const footerStyle = {
  textAlign: "center",
  marginTop: "2em"
};

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <h5>RoyalsCollectives &copy; 2018 - 2019 | All Rights Reserved</h5>
        <h6><a href="https://usheninte.xyz">Coded by Usheninte</a></h6>
      </div>
    );
  }
}
