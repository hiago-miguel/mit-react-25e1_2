import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ComplaintPage from './pages/ComplaintPage';
// import ComplaintForm from './components/ComplaintForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/submit-complaint" element={<ComplaintPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
