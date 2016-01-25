import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

//reducer

//最初的状态是"Hello"
const initialState = {
  text: 'Hello'
}

function myApp(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text:state.text=='Hello'?'Stark':'Hello'
      }
    case 'BUTTON_CLICK':
      return {
        text: 'You just click button'
      }
    default:
      return {
        text:'Hello'
      }
  }
}

let store = createStore(myApp);


//Provider是react-redux直接提供的
//store是我们在第3步中生成的

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)