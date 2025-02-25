import React from 'react';
import { Container } from 'reactstrap';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container className="d-flex justify-content-between align-items-center">
        <a 
          href="https://github.com/hiago-miguel/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-light"
        >
          <FaGithub size={25} title="GitHub" />
        </a>

        <p className="mb-0 text-center flex-grow-1">
          Infnet Fullstack Developer MIT | Project Interfaces with React 25E1_2
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
