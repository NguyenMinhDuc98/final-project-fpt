import { combineReducers } from 'redux';
import login from '../features/Login/loginSlice';
import major from '../features/Major/majorSlice';
import service from '../features/Service/serviceSlice';
import notVerifiedList from '../features/VerifyRepairer/verifySlice';
import customer from '../features/Customer/customerSlice';
import repairer from '../features/Repairer/repairerSlice';
import request from '../features/Request/requestSlice';

export default combineReducers({
    login,
    major,
    notVerifiedList,
    service,
    customer,
    repairer,
    request
})