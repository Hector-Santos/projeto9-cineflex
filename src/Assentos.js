import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import React from "react"
import axios from "axios"
import { TopText, Container, Footer, Filme } from "./Styled"
import { useNavigate } from "react-router-dom"

function Seat({number, id, isAvailable, selecionados}){
    
    const [estadoAssento, setEstadoAssento] = React.useState(0)
    
   React.useEffect(() => {
       if(!isAvailable)
        setEstadoAssento(2)
         }, [])
    function clickhandler(){

            if(estadoAssento == 1){
                
                setEstadoAssento(0)
                const index = selecionados.indexOf(id);
                selecionados.splice(index, 1)
                console.log(selecionados) 
            }
            else if(estadoAssento == 0){
                setEstadoAssento(1)
                selecionados.push(id)
                console.log(selecionados) 
        }
       
        console.log(estadoAssento)
    }
    
    const colorselected = "#8DD7CF"
    const coloravailable = "#C3CFD9"
    const colorUnavailable = "#FBE192"
    const ringSelected = "#45BDB0"
    const ringAvailable = "#808F9D"
    const ringUnavailable ="#F7C52B"

    return( <StyledSeat estadoAssento ={estadoAssento} colorselected={colorselected}
        coloravailable = {coloravailable} colorUnavailable={colorUnavailable} 
        ringAvailable = {ringAvailable} ringSelected = {ringSelected}
         ringUnavailable = {ringUnavailable}
        onClick={() => clickhandler()}>
        {number}
        </StyledSeat>)
}

export default function Assentos(){
    const {idSessao} = useParams()
    const [assentos, setAssentos] = React.useState([])
    const [cpf, setCpf] = React.useState([])
    const [nome, setNome] = React.useState([])
    let navigate = useNavigate()
    

    function enviar (){
    
    navigate("/sucesso")
    }
    const selecionados = []
    let dados = {
        ids: selecionados,
        name: nome,
        cpf: cpf
    }


    React.useEffect(() => {

        const promise = 
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`)
    
        promise.then(response => {
          setAssentos(response.data)
        })
        
      }, [])

      console.log(assentos)

    return(<Container>
        <TopText>
        Selecione os Assentos
        </TopText>
        <Seats>
        {assentos.seats?.map((assento) =>
        <Seat number={assento.name} id= {assento.id} isAvailable = {assento.isAvailable} selecionados={selecionados} ></Seat>)}
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
        <form>
        <Item>
        <h1>Nome do Comprador</h1>
        <input onChange={event => setNome(event.target.value)}placeholder="Digite Seu Nome..."/>
        </Item>
        <Item>
        <h1>CPF do Comprador</h1>
        <input onChange={event => setCpf(event.target.value)} placeholder="Digite Seu CPF..."/>
        </Item>
        </form>
        <EnviaAssentos>

        </EnviaAssentos>
        <Footer>
          <Filme>
         <img src={assentos.movie?.posterURL}/>
         </Filme>
         <div>
         <h1>{assentos.movie?.title}</h1>
         <h1>{assentos.day?.date} - {assentos.day?.weekday}</h1>
         </div>
        </Footer>
        </Container>)
        
}



const Selecionado = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #8DD7CF ;
border:1px solid #45BDB0; 
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
border:1px solid #808F9D;
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
border:1px solid #F7C52B; 
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
margin-left: 7px;
margin-top: 20px;
border:1px solid ${props => props.estadoAssento == 2 ? 
                             props.ringUnavailable :
                             props.estadoAssento == 0 ?
                             props.ringAvailable : props.ringSelected };
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
margin-left: 10px;
margin-bottom: 40px

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
const Item = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
font-family: 'Roboto', sans-serif;

h1{
    font-size: 18px;
    margin-left: 50px;
}
input{
height: 40px;
width: 280px;
border-radius: 3px;
margin-left: 50px;
border: 1px solid #D4D4D4;

}
input::placeholder {
    font-size: 18px;
    font-style: italic;
}

`

const EnviaAssentos = styled.button`


`