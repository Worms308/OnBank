import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Paper, Tab, Tabs } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { paths } from 'routes/paths';

const StyledTabs = withStyles({
  root: {
    borderBottom: '1px solid #D7DADD',
  },
  indicator: {
    backgroundColor: '#27AE60',
  },
})(Tabs);

const StyledTab = withStyles({
  root: {
    '&$selected': {
      color: '#27AE60',
    },
  },
  selected: {},
})(Tab);

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
        <>
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
        </>
      </Grid>
    </Grid>
  );
};

export default Table;
