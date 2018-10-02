import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const imgSpace = {
  marginBottom: "3px"
}

export default class Portfolio extends Component {
  render() {
    return(
      <div>
        <h1>Portfolio</h1>
        <Grid>
          <Col sm={3}>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098780/clients/RoyalsCollectives/6LACK-01.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098811/clients/RoyalsCollectives/kanyeee-01_1.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098807/clients/RoyalsCollectives/zendaya_pink-01.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098789/clients/RoyalsCollectives/pusha_T-01.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098773/clients/RoyalsCollectives/mayorkun-01.png'} rounded responsive />
            </Col>
          </Col>
          <Col sm={6}>
            <Col sm={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098753/clients/RoyalsCollectives/xxx-TENTACION.jpg'} rounded responsive />
            </Col>
            <Col sm={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098818/clients/RoyalsCollectives/final_eazi.png'} rounded responsive />
            <Col sm={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098757/clients/RoyalsCollectives/football.jpg'} rounded responsive />
            </Col>
            </Col>
          </Col>
          <Col sm={3}>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098752/clients/RoyalsCollectives/belly-01.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098784/clients/RoyalsCollectives/wiz-01.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098816/clients/RoyalsCollectives/stop_trying_to_be_god-01.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098774/clients/RoyalsCollectives/travis_scott_astro_2wrld018-01.png'} rounded responsive />
            </Col>
            <Col xs={12}>
              <Image style={imgSpace} src={'https://res.cloudinary.com/poetrique/image/upload/v1538098809/clients/RoyalsCollectives/da_slump_god.png'} rounded responsive />
            </Col>
          </Col>
        </Grid>
      </div>
    );
  }
}