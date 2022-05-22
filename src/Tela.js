import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from "react"
import Horario from "./Horario.js"
import Assentos from "./Assentos.js"
import Sucesso from "./Sucesso.js"
import Filmes from "./Filmes.js"
import styled from 'styled-components'
export default function Tela(){
   return(
    <BrowserRouter>
    <Topbar>
        CINEFLEX
    </Topbar>
    
    <Routes>
     <Route path="/" element={<Filmes />}/>
     <Route path="/sessoes/:idFilme" element={<Horario />}/>
     <Route path="/assentos/:idSessao" element={<Assentos />}/>
     <Route path="/sucesso" element={<Sucesso />}/>
    </Routes>
    </BrowserRouter>
     
     )
     
}

const Topbar = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
font-size: 30px;
font-family: 'Roboto', sans-serif;
position: fixed;
height: 67px;
width: 375px;
left: 0px;
top: 0px;
background-color: #C3CFD9;
color: #E8833A
`