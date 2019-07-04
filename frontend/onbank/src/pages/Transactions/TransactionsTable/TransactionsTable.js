import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Paper, Tab, Tabs } from '@material-ui/core';
import { paths } from 'routes/paths';

const Table = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      console.log(paths.completedTransactions);
      return <Redirect to={paths.completedTransactions} />;
    }
    if (newValue === 1) {
      console.log(paths.pendingTransactions);
      return <Redirect to={paths.pendingTransactions} />;
    }
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
          </Tabs>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Table;
