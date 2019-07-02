import React, { Component } from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

class FirstPage extends Component {
  state = {};

  clicked() {
    window.alert('Teraz jesteś użytkownikiem premium!');
  }

  render() {
    return (
      <div>
        <h1>Witaj na stronie głownej</h1>
        <MyButton onClick={this.clicked.bind(this)}>Użytkownik premium!</MyButton>
      </div>
    );
  }
}

export default FirstPage;
