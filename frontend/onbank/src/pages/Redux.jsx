import React from 'react';
import { connect } from 'react-redux';
import { getText as getTextAction } from '../actions';

const TestRedux = ({ text, getText }) => (
  <>
      <h1>{text}</h1>
    <button onClick={() => getText()} >Test</button>
  </>
);

const mapStateToProps = state => {
  const { text } = state;
  console.log(text);
  return text;
};

const mapDispatchToProps = dispatch => ({
  getText: () => dispatch(getTextAction('text'))
});

TestRedux.defaultProps = {
    text: ''
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestRedux);
