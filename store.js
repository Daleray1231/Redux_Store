// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Assuming you have a rootReducer file

const store = createStore(rootReducer);

export default store;