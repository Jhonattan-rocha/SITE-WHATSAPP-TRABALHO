import { call, put, all, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* Historico({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.get, `/historics/`, payload);
        
        yield put(actions.HISTORICO_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.HISTORICO_FALURE({erro: error}));
    } 
}

function* CadHistorico({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.post, `/historic/`, payload);
        yield put(actions.HISTORICO_CADASTRAR_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.HISTORICO_CADASTRAR_FALURE({erro: error}));
    } 
}

function* UpdateHistorico({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.patch, `/historic/${payload.id}`, payload);
        yield put(actions.HISTORICO_EDITAR_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.HISTORICO_EDITAR_FALURE({erro: error}));
    } 
}

function* DeleteHistorico({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.delete, `/historic/${payload.id}`, payload);
        yield put(actions.HISTORICO_DELETAR_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.HISTORICO_DELETAR_FALURE({erro: error}));
    }
}

function* Monitoramento({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.get, `/monitoring/`, payload);
        
        yield put(actions.MONITORAMENTO_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.MONITORAMENTO_FALURE({erro: error}));
    } 
}

//------


function* Mensagem({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.get, `/mensagens/`, payload);
        yield put(actions.MENSAGEM_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.MENSAGEM_FALURE({erro: error}));
    } 
}

function* CadMensagem({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.post, `/mensagem/`, payload);
        yield put(actions.MENSAGEM_CADASTRAR_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.MENSAGEM_CADASTRAR_FALURE({erro: error}));
    } 
}

function* UpdateMensagem({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.patch, `/mensagem/${payload.id}`, payload);
        yield put(actions.MENSAGEM_EDITAR_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.MENSAGEM_EDITAR_FALURE({erro: error}));
    } 
}

function* DeleteMensagem({payload}){
    try{
        const token = yield select(state => state.authreducer.token);
        axios.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        };
        const response = yield call(axios.delete, `/mensagem/${payload.id}`, payload);
        yield put(actions.MENSAGEM_DELETAR_SUCCESS({...response.data}));
    }catch(error){
        yield put(actions.MENSAGEM_DELETAR_FALURE({erro: error}));
    }
}

export default all([
    takeLatest(types.HISTORICO_REQUEST, Historico),
    takeLatest(types.HISTORICO_CADASTRAR_REQUEST, CadHistorico),
    takeLatest(types.HISTORICO_EDITAR_REQUEST, UpdateHistorico),
    takeLatest(types.HISTORICO_DELETAR_REQUEST, DeleteHistorico),
    takeLatest(types.MONITORAMENTO_REQUEST, Monitoramento),
    takeLatest(types.MENSAGEM_REQUEST, Mensagem),
    takeLatest(types.MENSAGEM_CADASTRAR_REQUEST, CadMensagem),
    takeLatest(types.MENSAGEM_EDITAR_REQUEST, UpdateMensagem),
    takeLatest(types.MENSAGEM_DELETAR_REQUEST, DeleteMensagem)
]);
