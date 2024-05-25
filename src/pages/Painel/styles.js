import styled, { keyframes } from "styled-components";

export const ContainerTimer = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Display = styled.div`
  font-size: 4em;
  margin-bottom: 20px;
`;

export const ButtonTimer = styled.button`
  padding: 10px 20px;
  margin: 5px;
  font-size: 1em;
  cursor: pointer;
`;

export const ToggleLabel = styled.label`
  margin-right: 5px;
`;

export const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  min-width: 60px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
  }
`;

export const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Slider} {
    background-color: #2196F3;
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }

  &:checked + ${Slider}:before {
    transform: translateX(26px);
  }
`;

export const Container_mensagens = styled.div`
  padding: 20px;
  width: 100%;
`;

export const ItemContainerMensagnes = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const TextAreaMensagens = styled.textarea`
    border: 1px solid #050A30;
    border-radius: 10px;
    min-width: 400px;
    width: 210px;
    min-height: 50px;
    max-height: 220px;
    padding: 10px;
    width: 100%;
`;

export const ButtonMensagens = styled.button`
  margin-left: 10px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #22dd88;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${rotate} 1s infinite linear;
`;

export const Form = styled.div`
    margin-top: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    max-width: 1000px;
    width: 100%;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.3);
`;


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    overflow-x: hidden;
    background-color: white;
`;

export const Title = styled.h1`
    text-align: center;
    margin: auto;
    color: #050A30;
    margin-top: 7px;
    font-weight: bolder;
    font-size: 1.5em;
    font-size: 30px;
`;


export const Button = styled.button`
    width: 25%;
    height: 40px;
    cursor: pointer;
    background-color: #050A30;
    color: white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    border:0;
    border-radius: 10px;
    margin-top: 10px;
    margin-left: 10px;

    :hover{
        cursor: pointer;
        background-color: #233DFF;
    }
`;

export const Input = styled.input`
    border: 1px solid #050A30;
    border-radius: 10px;
    width: 210px;
    height: 40px;
    padding: 10px;
    width: 100%;
`;

export const Label = styled.label`
    color: black;
    min-width: 100%;
    font-weight: bolder;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;


export const ListContainer = styled.div`
  width: 100%;
  max-height: 600px;
  margin: 20px auto;
  padding: 10px;
  background-color: #f3f3f3;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

export const ListItem = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); // Ajuste conforme o número de colunas que você tem
  justify-items: start;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  &:last-child {
    border-bottom: none;
  }
`;

export const ItemText = styled.span`
  font-size: 16px;
  color: #333;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: row;
`;

export const Container_qrcode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  align-self: center;
  width: 600px;
  height: 300px;
`;

export const StatusMessage = styled.div`
  margin-top: 20px;
  font-size: 26px;
  color: #4CAF50;
  display: flex;
  align-items: center;
`;

export const CheckIcon = styled.span`
  color: green;
  margin-left: 10px;
  font-size: 24px;

  &:before {
    content: '✓';
  }
`;
