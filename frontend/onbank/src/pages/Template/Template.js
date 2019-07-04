import React from 'react';
import Container from '@material-ui/core/Container';
import NavBar from 'pages/AppBar';
import { Box } from '@material-ui/core';

const Template = ({ children }) => (
  <Container maxWidth="lg">
    <Box style={{ backgroundColor: '#ECF0F1' }}>
      <NavBar />
      {children}
    </Box>
  </Container>
);

export default Template;
