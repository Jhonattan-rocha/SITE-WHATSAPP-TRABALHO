import {all} from 'redux-saga/effects';

import LoginSagas from './authReducer/sagas';
import BackEnd from './backendreducer/sagas';

export default function* rootSaga(){
    return yield all([LoginSagas, BackEnd]);
}
