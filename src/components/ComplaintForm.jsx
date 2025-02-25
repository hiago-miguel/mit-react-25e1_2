import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import countriesAndCompanies from '../data/countriesAndCompanies.json';

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    country: '',
    company: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstname) formErrors.firstname = 'First name is required';
    if (!formData.lastname) formErrors.lastname = 'Last name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.country) formErrors.country = 'Please select a country';
    if (!formData.company) formErrors.company = 'Please select a company';
    if (!formData.description) formErrors.description = 'Please insert details about your complaint!';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    setIsSubmitted(true);

    setTimeout(() => {
      setIsModalOpen(false);
      navigate('/'); // Redirect to Home Page after 2s
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form 
      onSubmit={handleSubmit}
      className="complaint-form"
      style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}
    >
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input
              type="text"
              name="firstname"
              id="firstname"
              value={formData.firstname}
              onChange={handleChange}
              invalid={!!errors.firstname}
            />
            {errors.firstname && <Alert color="danger">{errors.firstname}</Alert>}
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input
              type="text"
              name="lastname"
              id="lastname"
              value={formData.lastname}
              onChange={handleChange}
              invalid={!!errors.lastname}
            />
            {errors.lastname && <Alert color="danger">{errors.lastname}</Alert>}
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          invalid={!!errors.email}
        />
        {errors.email && <Alert color="danger">{errors.email}</Alert>}
      </FormGroup>

      <FormGroup>
        <Label for="country">Country</Label>
        <Input
          type="select"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
          invalid={!!errors.country}
        >
          <option value="">Select Country</option>
          {countriesAndCompanies.countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </Input>
        {errors.country && <Alert color="danger">{errors.country}</Alert>}
      </FormGroup>

      <FormGroup>
        <Label for="company">Company</Label>
        <Input
          type="select"
          name="company"
          id="company"
          value={formData.company}
          onChange={handleChange}
          invalid={!!errors.company}
        >
          <option value="">Select Company</option>
          {countriesAndCompanies.companies.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </Input>
        {errors.company && <Alert color="danger">{errors.company}</Alert>}
      </FormGroup>

      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          invalid={!!errors.description}
        />
        {errors.description && <Alert color="danger">{errors.description}</Alert>}
      </FormGroup>

      <Button color="primary">Submit</Button>

      <Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(!isModalOpen)}>
        <ModalHeader toggle={() => setIsModalOpen(!isModalOpen)}>
          {isSubmitted ? 'Success!' : 'Confirm Submission'}
        </ModalHeader>
        <ModalBody className="text-center">
          {isSubmitted ? (
            <>
              <FaCheckCircle size={50} color="green" />
              <h5 className="mt-3 text-success">Complaint submitted successfully!</h5>
            </>
          ) : (
            'Are you sure you want to submit this complaint?'
          )}
        </ModalBody>
        <ModalFooter>
          {!isSubmitted && (
            <>
              <Button color="secondary" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button color="primary" onClick={handleConfirm}>
                Confirm
              </Button>
            </>
          )}
        </ModalFooter>
      </Modal>
    </Form>
  );
};

export default ComplaintForm;
