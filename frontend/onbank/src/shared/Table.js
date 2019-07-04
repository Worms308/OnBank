import React from 'react';
import MUIDataTable from 'mui-datatables';

const Table = ({ data, columns }) => (
  <MUIDataTable
    data={data}
    columns={columns}
    options={{
      selectableRows: false,
      filterType: 'checkbox',
      print: false,
    }}
  />
);

export default Table;
