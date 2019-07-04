import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Paper, Tab, Tabs } from '@material-ui/core';
import { paths } from 'routes/paths';

const TransactionsTable = () => {
  const [value, setValue] = React.useState(0);
  const [redirect, setRedirect] = React.useState('');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      console.log(paths.completedTransactions);
      setRedirect(paths.completedTransactions);
    }
    if (newValue === 1) {
      console.log(paths.pendingTransactions);
      setRedirect(paths.pendingTransactions);
    }
    console.log(redirect);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Paper>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Zrealizowane" />
            <Tab label="Oczekujące/Blokady" />
            {redirect && <Redirect to={redirect}/>}
          </Tabs>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TransactionsTable;
