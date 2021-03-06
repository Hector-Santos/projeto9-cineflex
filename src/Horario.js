import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import React from "react"
import axios from "axios"
import { TopText, Container, Footer, Filme } from "./Styled"



export default function Horario(){
    const {idFilme} = useParams()
    const [horarios, setHorarios] = React.useState([])
    const [fime, setFilme] = React.useState([])
    React.useEffect(() => {
    
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`)
    
        promise.then(response => {
          
          setHorarios(response.data)
        })
        
      }, [])
        console.log(horarios)
    return(
    <> <Container>
        <TopText>
        Selecione o Horario
        </TopText>
        {horarios.days?.map(horario =><>
        <Data><h1>{horario.weekday} - {horario.date}</h1></Data> 
        <Times>{horario.showtimes.map(time =>
        <Link to={`/assentos/${time.id}`}>
        <Time>{time.name}</Time>
        </Link>)}</Times>
        </>
        
        )}
        <Footer>
          <Filme>
         <img src={horarios.posterURL}/>
         </Filme>
         <div>
         <h1>{horarios.title}</h1>
         <h1>{horarios.title}</h1>
         </div>
        </Footer>
          
        </Container>

    </>)
}

const Data = styled.div`
h1{
font-size: 20px;
margin-left: 20px;
font-family: 'Roboto', sans-serif;
}
`
const Time = styled.div`
background-color: #E8833A;
width: 83px;
height: 43px;
border-radius: 3px;
display: flex;
align-items: center;
justify-content: center;
color: white;
margin-left: 20px;
font-family: 'Roboto', sans-serif;


`
const Times = styled.div`
display: flex;
justify-content: flex-start;
margin-top: 30px;
margin-bottom: 30px;

`


