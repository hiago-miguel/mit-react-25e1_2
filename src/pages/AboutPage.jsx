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
          <h1 className="text-center mb-4">About me</h1>
          Hey there! I'm Hiago, a DevOps Engineer. <br/> I live in Natal (Brazil) and I work at Cloud++, a Netherlands Company. |
          <a href="https://www.linkedin.com/in/hiago-miguel-44a627102/"> Follow me on linkedin!</a>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutPage;
