import React, { useEffect } from 'react';
import './Topcategories.css';
import { Container, Row, Image, Col, Card } from 'react-bootstrap';
export default function Topcategories() {
  return (
    <div className="wrapper">
      <h1>Top Categories</h1>
      <Container className="top-cat">
        <Row>
          <Col xs={6} md={4} lg={3}>
            <Card>
              <Image
                className="top-cat__images"
                src={require('../../assets/logo.png')}
                rounded
              />
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card>
              <Image
                className="top-cat__images"
                src={require('../../assets/logo.png')}
                rounded
              />
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card>
              <Image
                className="top-cat__images"
                src={require('../../assets/logo.png')}
                rounded
              />
            </Card>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <Card>
              <Image
                className="top-cat__images"
                src={require('../../assets/logo.png')}
                rounded
              />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
