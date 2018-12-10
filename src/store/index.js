//store入口文件
import { createStore } from 'redux';
import reducer from './reducer'
const store = createStore(reducer);

export default store;
