import React from 'react';
import MUIDataTable from 'mui-datatables';

const Table = ({ data, columns, options }) => (
  <MUIDataTable data={data} columns={columns} options={options} />
);

export default Table;
