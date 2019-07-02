import { SUCCESS } from '../actions';

const initialState = {
    text: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SUCCESS:
        return {
            ...state,
            [action.payload.itemType]: action.payload.text,
        }
        default:
            return state;
    }
}

export default reducer;