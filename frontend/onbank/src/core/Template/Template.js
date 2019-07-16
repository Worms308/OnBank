import React from 'react';
import Container from '@material-ui/core/Container';
import NavigationBar from 'core/NavigationBar';

const Template = ({ children }) => (
  <Container maxWidth="lg">
    <NavigationBar />
    {children}
  </Container>
);

export default Template;
