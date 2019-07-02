import React from 'react';
import { connect } from 'react-redux';
import { changeValue as change } from 'actions';

const TestRedux = ({ value, changeValue }) => (
  <>
    <h1>Counter: {value}</h1>
    <button onClick={() => changeValue(-1)} type="button">
      Decrement
    </button>
    <button onClick={() => changeValue(1)} type="button">
      Increment
    </button>
  </>
);
const mapStateToProps = state => {
  const { value } = state;
  return { value };
};

const mapDispatchToProps = dispatch => ({
  changeValue: value => dispatch(change(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestRedux);
