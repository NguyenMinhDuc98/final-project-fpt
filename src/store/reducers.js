import { combineReducers } from 'redux';
import login from '../features/Login/loginSlice';
import major from '../features/Major/majorSlice';

export default combineReducers({
    login,
    major
})