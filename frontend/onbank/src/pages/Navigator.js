import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { paths } from 'routes/paths';

class Navigator extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to={paths.transactions}>Transactions</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navigator;
