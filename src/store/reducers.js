import { combineReducers } from 'redux';
import login from '../features/Login/loginSlice';
import major from '../features/Major/majorSlice';
import notVerifiedList from '../features/VerifyRepairer/verifySlice'

export default combineReducers({
    login,
    major,
    notVerifiedList
})