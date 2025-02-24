import React from 'react';
import ComplaintForm from '../components/ComplaintForm'; // Assuming the form is in a separate component
import { Container, Row, Col } from 'reactstrap';

const HomePage = () => {
  return (
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '80vh' }}
    >
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <h1>Submit Your Complaint</h1>
          <ComplaintForm />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
