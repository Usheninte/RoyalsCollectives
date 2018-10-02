import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default class Portfolio extends Component {
  render() {
    return(
      <div>
        <h1>Portfolio</h1>
        <Grid>
          <Col xsHidden sm={3}>
            <Image src={'https://res.cloudinary.com/poetrique/image/upload/v1538098818/clients/RoyalsCollectives/final_eazi.png'} rounded responsive />
          </Col>
          <Col sm={6}>
            <Image src={''} rounded responsive />
          </Col>
          <Col xsHidden sm={3}>
            <Image src={''} rounded responsive />
          </Col>
        </Grid>
      </div>
    );
  }
}