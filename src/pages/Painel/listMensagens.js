import React, { useState, useEffect } from 'react';
import { Container_mensagens, ItemContainerMensagnes, Input, Button, TextAreaMensagens } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsBase from '../../store/modules/backendreducer/actions';
import ToggleButton from './toggleButton';

export default function ListMensagens(){
    const dispatch = useDispatch();
    const items = useSelector(state => state.backendreducer.mensagens.result);
    const [statusSelect, setStatusSelect] = useState("");
    const [conteudoSelect, setConteudoSelect] = useState("");
    const [clientMessage, setClientMessage] = useState(false);
    const [itemSelect, setItemSelect] = useState({});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        dispatch(actionsBase.MENSAGEM_REQUEST());
    }, []);

    const handleAddItem = (item) => {
        dispatch(actionsBase.MENSAGEM_CADASTRAR_REQUEST(item));
    };

    const handleUpdate = (item) => {
        dispatch(actionsBase.MENSAGEM_EDITAR_REQUEST(item));
    };

    return (
        <Container_mensagens>
            {items.map(item => (
                <ItemContainerMensagnes key={item.id}>
                <Input style={{marginRight: 5, maxWidth: 200}}
                    value={item.status}
                    placeholder="Status"labels={{"true": "Cliente", "false": "Vendedor"}}
                    disabled
                />
                <ToggleButton labels={{"true": "Cliente", "false": "Vendedor"}} checked={item.client_status} disabled={true}/>
                <TextAreaMensagens
                    value={item.conteudo}
                    placeholder="conteudo"
                    disabled
                />
                <Button onClick={() => {
                    setStatusSelect(item.status);
                    setConteudoSelect(item.conteudo);
                    setClientMessage(item.client_status);
                    setItemSelect(item);
                    setEdit(true);
                }}>Ediar</Button>
                <Button onClick={(e) => {
                    dispatch(actionsBase.MENSAGEM_DELETAR_REQUEST({id: item.id}));
                    dispatch(actionsBase.MENSAGEM_REQUEST());
                }}>Deletar</Button>
                </ItemContainerMensagnes>
            ))}
            <ItemContainerMensagnes>
                <Input style={{marginRight: 5, maxWidth: 200}}
                    type="number"
                    value={statusSelect}
                    onChange={e => setStatusSelect(e.target.value)}
                    placeholder="Status"
                />
                <ToggleButton checked={clientMessage} onChange={() => {
                    setClientMessage(!clientMessage);
                }} labels={{"true": "Cliente", "false": "Vendedor"}}/>
                <TextAreaMensagens
                    value={conteudoSelect}
                    onChange={e => setConteudoSelect(e.target.value)}
                    placeholder="conteudo"
                />
            </ItemContainerMensagnes>
            <Button onClick={(e) => {
                e.preventDefault();
                if(edit){
                    handleUpdate({id: itemSelect.id, status: statusSelect, conteudo: conteudoSelect, client_status: clientMessage});
                }else{
                    handleAddItem({status: statusSelect, conteudo: conteudoSelect, client_status: clientMessage});
                }
                dispatch(actionsBase.MENSAGEM_REQUEST());
                setItemSelect({});
                setStatusSelect("");
                setConteudoSelect("");
                setClientMessage(false);
                setEdit(false);
            }}>Salvar</Button>
            {edit ? (
                <Button onClick={(e) => {
                    setItemSelect({});
                    setStatusSelect("");
                    setConteudoSelect("");
                    setClientMessage(false);
                    setEdit(false);
                }}>Cancelar</Button>
            ): null}
        </Container_mensagens>
    );
};
