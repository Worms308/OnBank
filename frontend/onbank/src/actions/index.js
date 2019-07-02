export const SUCCESS = 'SUCCESS';

export const getText = itemType => dispatch => {
  dispatch({type: SUCCESS, payload:{ itemType, text: 'Hello Onwelo'}});
}