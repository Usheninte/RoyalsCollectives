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
          <Col sm={3}>
            <Col xs={12}>
              <Image src={'https://res.cloudinary.com/poetrique/image/upload/v1538098818/clients/RoyalsCollectives/final_eazi.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image src={''} rounded responsive />
            </Col>
          </Col>
          <Col sm={6}>
            <Image src={'https://res.cloudinary.com/poetrique/image/upload/v1538098816/clients/RoyalsCollectives/stop_trying_to_be_god-01.png'} rounded responsive />
          </Col>
          <Col sm={3}>
            <Col xs={12}>
              <Image src={'https://res.cloudinary.com/poetrique/image/upload/v1538098809/clients/RoyalsCollectives/da_slump_god.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image src={''} rounded responsive />
            </Col>
          </Col>
        </Grid>
        <Grid>
          <Col xsHidden sm={3}>
            <Image src={''} rounded responsive />
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