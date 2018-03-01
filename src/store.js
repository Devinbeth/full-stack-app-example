import { createStore } from 'redux';
import reducer from './ducks/users.js';

export default createStore(reducer);