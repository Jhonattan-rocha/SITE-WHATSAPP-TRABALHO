import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../GlobalComponents/header";
import Login from "../pages/Login";
import NoPage from "../pages/NoPage";
import Painel from "../pages/Painel";
import Protected from './Protected';

export default function Rotas(){


    return (
        <>
            <Header></Header>
                <Routes>
                    <Route path="/" element={
                        <Painel></Painel>
                    }/>
                    <Route path="/login" index element={<Login></Login>}/>
                    <Route path="*" element={<NoPage/>}/>
                </Routes>
        </>
    );
};
