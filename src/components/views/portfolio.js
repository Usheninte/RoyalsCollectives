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
              <Image src={''} rounded responsive />
            </Col>
          </Col>
          <Col sm={6}>
            <Col sm={12}>
              <Image src={''} rounded responsive />
            </Col>
          </Col>
          <Col sm={3}>
            <Col xs={12}>
              <Image src={''} rounded responsive />
            </Col>
          </Col>
        </Grid>
      </div>
    );
  }
}