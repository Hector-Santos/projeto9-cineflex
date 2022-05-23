
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function Sucesso({reserva}){
    let navigate = useNavigate()
    function retornaHome(){
    navigate("/")
    }
    return(
    <Container>
    <TopText>
     Pedido feito com sucesso
    </TopText>
    <Msg>
     <h2>Filme e sessão</h2>
     <h1>{reserva.filme}</h1>
     <h1>{reserva.data} {reserva.horario}</h1>
    </Msg>
    <Msg>
    <h2>Ingressos</h2>

    {reserva.assentos.map(assento => <h1>Assento {assento}</h1>)}
    </Msg>
    <Msg>
    <h2>Comprador</h2>
    <h1>{reserva.nome}</h1>
    <h1>{reserva.cpf}</h1>
    </Msg>
     <Button onClick={()=> retornaHome()}>
         Voltar para a home
     </Button>
    </Container>
    )
}

const TopText = styled.div`
display: flex;
justify-content: center;
font-weight:600;
color:#247A6B;
align-items: center;
font-size: 20px;
font-family: 'Roboto', sans-serif;
text-align: center;
height: 80px;
width: 100%;

`
const Msg = styled.div`
margin-top: 30px;
font-weight:600;
font-size: 20px;
font-family: 'Roboto', sans-serif;

h1{
font-family: 'Roboto', sans-serif;
font-size: 20px; 
font-weight:400;

}
h2{
    margin-bottom: 10px;
}

`
const Container = styled.div`
padding-top: 67px;
margin-bottom: 150px;
padding-left: 20px;
`
export const Button = styled.button`
margin-left: 50px;
margin-top: 40px;
font-size: 16px;
height: 42px;
width: 225px;
border-radius: 3px;
background-color: #E8833A;
font-family: 'Roboto', sans-serif;
color: white;
`