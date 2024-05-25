import { combineReducers } from 'redux';
import backendreducer from './backendreducer/reducer';
import authreducer from './authReducer/reducer';

export default combineReducers({
    authreducer: authreducer,
    backendreducer: backendreducer,
});
