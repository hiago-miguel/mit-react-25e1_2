import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row, Alert, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
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
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false); // New modal state
  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstname) formErrors.firstname = 'First name is required';
    if (!formData.lastname) formErrors.lastname = 'Last name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.country) formErrors.country = 'Please select a country';
    if (!formData.company) formErrors.company = 'Please select a company';
    if (!formData.description) formErrors.description = 'Please insert details about your complaint!';
    else if (formData.description.length < 100) formErrors.description = 'Description must be at least 100 characters long';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsConfirmationModalOpen(true); // Open confirmation modal
    }
  };

  const handleConfirm = () => {
    alert('Complaint submitted successfully!');
    setIsConfirmationModalOpen(false); // Close confirmation modal
    navigate('/'); // Redirect to Home Page after submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
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
              invalid={errors.firstname ? true : false}
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
              invalid={errors.lastname ? true : false}
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
          invalid={errors.email ? true : false}
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
          invalid={errors.country ? true : false}
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
          invalid={errors.company ? true : false}
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

      {/* Updated Description Field with Larger Box and Min Length of 100 */}
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="textarea"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          invalid={errors.description ? true : false}
          style={{ minHeight: '150px' }} // Larger box for the description field
        />
        {errors.description && <Alert color="danger">{errors.description}</Alert>}
      </FormGroup>

      <Button color="primary">Submit</Button>

      {/* Confirmation Modal */}
      <Modal isOpen={isConfirmationModalOpen} toggle={() => setIsConfirmationModalOpen(false)}>
        <ModalHeader toggle={() => setIsConfirmationModalOpen(false)}>
          Confirm Submission
        </ModalHeader>
        <ModalBody>
          <p>Are you sure you want to submit this complaint?</p>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={() => setIsConfirmationModalOpen(false)}>Cancel</Button>
          <Button color="primary" onClick={handleConfirm}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </Form>
  );
};

export default ComplaintForm;
