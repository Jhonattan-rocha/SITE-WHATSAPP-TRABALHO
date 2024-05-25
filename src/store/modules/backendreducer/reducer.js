import * as type from '../types';
import {toast} from 'react-toastify';

const initialState = {
  historico: {result: []},
  mensagens: {result: []}
} 
// caso precise de mais de um reducer, usar a função combineReducer

export default function recuder(state = initialState, action){
    switch (action.type) {
      case type.HISTORICO_SUCCESS: {
        const newState = {...state}
        newState.historico = action.payload;
        return newState;
      }
      case type.HISTORICO_FALURE: {
        toast.error(`Erro ao buscar os dados do historico: ${action.payload.erro}`)
        return state;
      }
      case type.HISTORICO_CADASTRAR_SUCCESS: {
        toast.error(`Historico cadastrado`);
        return state;
      }
      case type.HISTORICO_CADASTRAR_FALURE: {
        toast.error(`Erro ao cadastrar o historico: ${action.payload.erro}`);
        return state;
      }
      case type.HISTORICO_EDITAR_SUCCESS: {
        toast.error(`Historico editado`);
        return state;
      }
      case type.HISTORICO_EDITAR_FALURE: {
        toast.error(`Erro ao editar o historico: ${action.payload.erro}`);
        return state;
      }
      case type.HISTORICO_DELETAR_SUCCESS: {
        toast.success(`Historico deletado`);
        return state;
      }
      case type.HISTORICO_DELETAR_FALURE: {
        toast.error(`Erro ao deletar o historico: ${action.payload.erro}`);
        return state;
      }
      case type.MONITORAMENTO_SUCCESS: {
        toast.success(`Monitoramento realizado com sucesso`);
        return state;
      }
      case type.MONITORAMENTO_FALURE: {
        toast.error(`Erro ao executar o monitoramento: ${action.payload.erro}`);
        return state;
      }
      case type.MENSAGEM_SUCCESS: {
        const newState = {...state};
        newState.mensagens = action.payload;
        return newState;
      }
      case type.MENSAGEM_CADASTRAR_SUCCESS: {
        toast.success(`Mensagem cadastrada com sucesso`);
        return state;
      }
      case type.MENSAGEM_EDITAR_SUCCESS: {
        toast.success(`Mensagem editada com sucesso`);
        return state;
      }
      case type.MENSAGEM_DELETAR_SUCCESS: {
        toast.success(`Mensagem deletada com sucesso`);
        return state;
      }
      default:
        return state;
    }
};
