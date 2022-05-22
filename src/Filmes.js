import React from "react"
import axios from "axios"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { TopText, Container } from "./Styled"

export default function Filmes(){
  const [filmes, setFilmes] = React.useState([])
 
  React.useEffect(() => {
    
    const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies")

    promise.then(response => {
      setFilmes(response.data)
    })
    
  }, [])

    return(
    <>
    <Container>
    < TopText>
        Selecione o filme 
    </TopText>
    <ListaFilmes>
    {filmes.length === 0 ? 'Carregando' :
            filmes.map(filme => 
            <Filme>
            <Link to={`/sessoes/${filme.id}`}>
            <img src= {filme.posterURL}></img>
            </Link>
            </Filme>)
          } 
    </ListaFilmes>
    </Container>
    </>
    
    )
}

const Filme = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 145px;
height: 209px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
margin-bottom: 15px;
  
img{
height: 193px;
width: 129px;
}
`
const ListaFilmes = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
width: 95%;
padding-left:-10px;
`
