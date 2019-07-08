import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Tab, Tabs } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import { paths } from 'routes/paths';

const Wrapper = styled('div')({
  backgroundColor: '#fff',
  borderBottom: '1px solid #D7DADD',
  marginTop: '24px',
  boxShadow:
    '-5px 0 5px -5px rgba(0,0,0,0.2), 5px 0 5px -5px rgba(0,0,0,0.2), 0 -5px 5px -5px rgba(0,0,0,0.2)',
});

const TransactionsTable = () => {
  const [value, setValue] = React.useState(0);
  const [redirect, setRedirect] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setRedirect(paths.completedTransactions);
    }
    if (newValue === 1) {
      setRedirect(paths.pendingTransactions);
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Wrapper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Zrealizowane" />
            <Tab label="Oczekujące/Blokady" />
          </Tabs>
          {redirect && <Redirect to={redirect} />}
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default TransactionsTable;
