import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="bg-dark text-light">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
