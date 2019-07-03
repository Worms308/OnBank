import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Navigator extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <ul>
                    <li>
                        <Link to="/firstPage">FirstPage</Link>
                    </li>
                    <li>
                        <Link to="/secondPage">SecondPage</Link>
                    </li>
                    <li>
                        <Link to="/redux">Redux</Link>
                    </li>
                    <li>
                        <Link to="/transferList">Transfer List</Link>
                    </li>
            </ul>
            </div>
         );
    }
}
 
export default Navigator;