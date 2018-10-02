import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const smallBox = {
  width: "400px",
  height: "400px"
}

const bigBox = {
  width: "600px",
  height: "600px"
}

export default class Portfolio extends Component {
  render() {
    return(
      <div>
        <h1>Portfolio</h1>
        <Grid>
          <Col sm={3}>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
          </Col>
          <Col sm={6}>
            <Col sm={12}>
              <Image style={bigBox} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098780/clients/RoyalsCollectives/6LACK-01.png'} rounded responsive />
            </Col>
            <Col sm={12}>
              <Image style={bigBox} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098753/clients/RoyalsCollectives/xxx-TENTACION.jpg'} rounded responsive />
            </Col>
            <Col sm={12}>
              <Image style={bigBox} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098752/clients/RoyalsCollectives/belly-01.png'} rounded responsive />
            </Col>
          </Col>
          <Col sm={3}>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={smallBox} src={''} rounded responsive />
            </Col>
          </Col>
        </Grid>
      </div>
    );
  }
}