import styled from "styled-components"

export const TopText = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-family: 'Roboto', sans-serif;
text-align: center;
height: 80px;
width: 100%;

`
export const Container = styled.div`
padding-top: 67px;
margin-bottom: 150px;
`
export const Footer = styled.div`height: 117px;
position: fixed;
display: flex;
bottom:0px;
left: 0px;
background-color: #DFE6ED;
width: 375px;
height: 100px;
border: 1px solid #9EADBA;
border-radius: 0px;
align-items: center;
h1{
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  margin-left: 10px;
}



`
export const Filme = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 89px;
width: 64px;
border-radius: 2px;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
margin-left: 10px;

img{  
height: 72px;
width: 48px;
}

`

export const Button = styled.button`
margin-left: 75px;
margin-top: 20px;
font-size: 16px;
height: 42px;
width: 225px;
border-radius: 3px;
background-color: #E8833A;
font-family: 'Roboto', sans-serif;
color: white;
`