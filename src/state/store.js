import { createStore } from 'redux';
// Set State
const initialState = {
  count: 0,
};
// Handling State based on type of action
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
      case 'NOCHECK':
        return {
          count: state.count + 1
        };
    default:
      return state;
  }
}

export default createStore(reducer);
