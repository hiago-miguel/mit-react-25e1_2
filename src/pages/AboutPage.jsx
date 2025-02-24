import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const AboutPage = () => {
  return (
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '80vh' }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <h1>About Us</h1>
          <p>This application allows users to file complaints against companies.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
