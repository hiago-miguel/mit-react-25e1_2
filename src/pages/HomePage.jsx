import { Button, Container, Row, Col } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToComplaintPage = () => {
    navigate('/submit-complaint');
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
      <Row className="w-100 justify-content-center">
        <Col md={8} lg={6} xl={5}>
          <h1 className="text-center mb-4">Submit Your Complaint</h1>

          <Button color="primary" onClick={handleGoToComplaintPage} block>
            Go to Complaint Form
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
