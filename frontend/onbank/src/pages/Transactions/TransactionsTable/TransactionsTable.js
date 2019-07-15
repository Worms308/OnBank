import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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

const TransactionsTable = ({ location }) => {
  const pathname =
    location.pathname === paths.transactions ? paths.completedTransactions : location.pathname;
  return (
    <Grid container>
      <Grid item xs={12}>
        <Wrapper>
          <Tabs value={pathname} indicatorColor="primary" textColor="primary" centered>
            <Tab
              label="Zrealizowane"
              value={paths.completedTransactions}
              component={Link}
              to={paths.completedTransactions}
            />
            <Tab
              label="Oczekujące/Blokady"
              value={paths.pendingTransactions}
              component={Link}
              to={paths.pendingTransactions}
            />
          </Tabs>
        </Wrapper>
      </Grid>
    </Grid>
  );
};

export default withRouter(TransactionsTable);
