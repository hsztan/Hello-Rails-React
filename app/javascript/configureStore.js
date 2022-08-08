import { createStore } from 'redux';

const initialState = {
  greeting: 'Hi',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GREETING':
      return {
        ...state,
        greeting: action.payload,
      };
    default:
      return state;
  }
}

export default function configureStore() {
  return createStore(rootReducer, initialState);
}
