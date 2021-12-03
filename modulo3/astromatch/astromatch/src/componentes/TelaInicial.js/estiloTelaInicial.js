import styled from 'styled-components'

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Logo = styled.div`
    justify-content: center;
`

export const Perfil = styled.div` 
    display: flex;
    flex-direction: column;
    align-items:center;
`

export const CardFooter = styled.div`
    display:flex;
    justify-content: space-around;
`

export const Photo = styled.img`
    height: 350px;  
    width: 300px; 
    box-shadow: rgb(117 117 117 / 77%) 0px 2px 10px 0px;
    border-radius: 5px;

`

export const CardContainer = styled.div`
    
`
export const LikeButton = styled.button`
    background-color: white;
    border-radius:50%;
    width: 60px;
    height: 60px;
    color: red;
    font-size:50px;
    :hover{background-color: black}

`
export const UnlikeButton = styled.button`
    background-color: white;
    border-radius:50%;
    width: 60px;
    height: 60px;
    font-size:50px;
    color: red;
    :hover{background-color: black}
`
