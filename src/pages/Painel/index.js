import React, { useEffect, useState } from "react";
import { ApiPort, baseURL, Socket_port } from "../../config/appConfig";
import { Form, Container, ListContainer, ListItem, ItemText, Title, Button, Container_qrcode, StatusMessage, CheckIcon } from "./styles";
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import * as actionsBase from '../../store/modules/backendreducer/actions';
import { QRCodeCanvas } from 'qrcode.react';
import { useNavigate } from "react-router-dom";
import SocketIoClient from 'socket.io-client';
import LoadingSpinner from "./loader";
import ListMensagens from "./listMensagens";
import Timer from "./Timer";

export default function Painel(){
    const user = useSelector(state => state.authreducer ?? {});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const historico = useSelector(state => state.backendreducer.historico.result);
    const [ws, setWs] = useState(SocketIoClient);
    const [whatsappOn, setWhatsappOn] = useState(false);
    const [qr_text, setQr_text] = useState("");

    useEffect(() => {
        if(!user.isLoggedIn){
            navigate('login');
        }
    }, [user]);

    useEffect(() => {
        // let update_historic = setInterval(() => {
            // dispatch(actionsBase.HISTORICO_REQUEST());
            // dispatch(actionsBase.MENSAGEM_REQUEST());
        // }, 5000);

        const ws_aux = SocketIoClient(`http://${baseURL}:${ApiPort}/`);

        ws_aux.connect();

        setWs(ws_aux);

        ws_aux.on("client_ready", (data) => {
            setWhatsappOn(data); 
        })

        ws_aux.on("qr_code", (data) => {
            setQr_text(data);
        })

        return () => {
            // clearInterval(update_historic);
        }
    }, []);

    function limitString(str="", maxLength=0) {
        if (str.length > maxLength) {
          return str.substring(0, maxLength - 3) + '...';
        }
        return str;
    }

    return (
        <Container>
            <Form>
                <Title>Monitoramento será feito em:</Title>
                <Timer onCompletion={() => {
                    dispatch(actionsBase.MONITORAMENTO_REQUEST());
                    dispatch(actionsBase.HISTORICO_REQUEST());
                    dispatch(actionsBase.MENSAGEM_REQUEST());
                }}></Timer>
            </Form>
            <Form>
               <Title>Historico de mensagens</Title>
               <ListContainer>
                        <ListItem>
                        <ItemText>Telefone</ItemText>
                        <ItemText>Nome do cliente</ItemText>
                        <ItemText>Status</ItemText>
                        <ItemText>Pedido</ItemText>
                        <ItemText>Mensagem</ItemText>
                        <ItemText>Enviado</ItemText>
                        </ListItem>
                    {historico.map((item, index) => (
                        <ListItem key={index}>
                        <ItemText>{String(item.telefone).replace(/\D/g, "")}</ItemText>
                        <ItemText title={item.nome_cliente}>{limitString(item.nome_cliente, 15)}</ItemText>
                        <ItemText>{item.status}</ItemText>
                        <ItemText>{item.pedido}</ItemText>
                        <ItemText title={item.conteudo}>{limitString(item.conteudo, 15)}</ItemText>
                        <ItemText>{item.send ? "Sim" : "Não"}<FaWindowClose style={{display: "flex",  alignSelf: 'flex-end', marginLeft: 20}} cursor={"pointer"} size={20} onClick={() => {
                            dispatch(actionsBase.HISTORICO_DELETAR_REQUEST({id: item.id}));
                            dispatch(actionsBase.HISTORICO_REQUEST());
                        }}></FaWindowClose></ItemText>
                        </ListItem>
                    ))}
                </ListContainer>
                <Button onClick={(e) => {
                    e.preventDefault();
                    dispatch(actionsBase.MONITORAMENTO_REQUEST());
                }}>Monitoramento</Button>
            </Form>
            <Form>
                <Title>QR Code</Title>
                <Container_qrcode>
                    {whatsappOn ? (
                        <StatusMessage>
                            Usuario: {user.user.nome}<br></br>
                            WHATSAPP CONECTADO
                        <CheckIcon />
                        </StatusMessage>
                    ) : (
                        qr_text ? (
                            <QRCodeCanvas value={qr_text} size={256} />
                        ):(
                            <LoadingSpinner></LoadingSpinner>
                        )
                        
                    )}
                </Container_qrcode>
            </Form>
            <Form>
                <Title>Mensagens cadastradas</Title>
                <ListMensagens></ListMensagens>
            </Form>
        </Container>
    );
}

