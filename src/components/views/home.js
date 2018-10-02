import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return(
      <div>
        <h1>Home</h1>
        <Grid>
          <Col xsHidden sm={3}></Col>
          <Col sm={6}>
            <Image src={'https://res.cloudinary.com/poetrique/image/upload/v1538462357/clients/RoyalsCollectives/RoyalsCollectives.jpg'} rounded responsive />
          </Col>
          <Col xsHidden sm={3}></Col>
        </Grid>
      </div>
    );
  }
}