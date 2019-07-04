import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from 'pages/AppBar';

const Template = ({ children }) => (
  <Container maxWidth="lg">
    <NavBar />
    {children}
  </Container>
);

export default Template;
