import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import React from "react"
import axios from "axios"
import { TopText, Container } from "./Styled"

function Seat({number, id, isAvailable}){
    
    const [estadoAssento, setEstadoAssento] = React.useState(0)
   React.useEffect(() => {
       if(!isAvailable)
        setEstadoAssento(2)
         }, [])
    function clickhandler(){

            if(estadoAssento == 1){
                setEstadoAssento(0)
            }
            else if(estadoAssento == 0)
            setEstadoAssento(1)
       
        console.log(estadoAssento)
    }
    
    const colorselected = "#8DD7CF"
    const coloravailable = "#C3CFD9"
    const colorUnavailable = "#FBE192"

    return( <StyledSeat estadoAssento ={estadoAssento} colorselected={colorselected}
        coloravailable = {coloravailable} colorUnavailable={colorUnavailable} 
        onClick={() => clickhandler()}>
        {number}
        </StyledSeat>)
}

export default function Assentos(){
    const {idSessao} = useParams()
    const [assentos, setAssentos] = React.useState([])
    

    React.useEffect(() => {

        const promise = 
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
    
        promise.then(response => {
          setAssentos(response.data.seats)
        })
        
      }, [])

      console.log(assentos)

    return(<Container>
        <TopText>
        Selecione os Assentos
        </TopText>
        <Seats>
        {assentos.map((assento) =>
        <Seat number={assento.name} id= {assento.id} isAvailable = {assento.isAvailable} ></Seat>)}
        <Samples>
        <CircleText>
        <Selecionado></Selecionado>
         <h1>Selecionado</h1>
        </CircleText>
        <CircleText>
        <Disponivel></Disponivel>
        <h1>Disponível</h1>
        </CircleText>
        <CircleText>
        <Indisponivel></Indisponivel>
        <h1>Indisponível</h1>
        </CircleText>
        </Samples>
        </Seats>
        </Container>)
        
}



const Selecionado = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #8DD7CF ;
 
height: 26px;
width: 26px;
border-radius: 12px;
margin-left: 10px;
margin-top: 20px;
`
const Disponivel = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #C3CFD9 ;
 
height: 26px;
width: 26px;
border-radius: 12px;
margin-left: 10px;
margin-top: 20px;
`
const Indisponivel= styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #FBE192 ;
 
height: 26px;
width: 26px;
border-radius: 12px;
margin-left: 10px;
margin-top: 20px;
`

const StyledSeat = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: ${props => props.estadoAssento == 2 ? 
                             props.colorUnavailable :
                             props.estadoAssento == 0 ?
                             props.coloravailable : props.colorselected };
 
height: 26px;
width: 26px;
border-radius: 12px;
margin-left: 10px;
margin-top: 20px;
font-family: 'Roboto', sans-serif;
`
const Samples = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
flex-wrap: wrap;
`

const Seats = styled.div`
display: flex;
flex-wrap: wrap;
`
const CircleText = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin-left: 30px;

h1{
    font-family: 'Roboto', sans-serif;
}
`