import styled from 'styled-components';
import background from '../../assets/imagem fundo 1.svg'
import {Link} from "react-router-dom"

export const Container = styled.div`
    //background: url("${background}");
    background: linear-gradient(104deg, rgba(9,4,156,0.8) 0%, rgba(225,225,225) 500%);
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

export const Image = styled.img`
    margin-top: 15px;
    width: 10rem;
`;
export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.2) 0.24%, rgba(255, 255, 255, 0.90) 0.15%, rgba(255, 255, 255, 0.01) 100%);
    border-radius: 51px 51px 0px 0px;
    padding: 25px 25px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    color: #000;
    margin-bottom: 80px;
`;



export const Button = styled(Link)`
    width: 342px;
    height: 60px;

    margin-top: 50px;
    background: transparent;
    border-radius: 14px;
    border: 1px solid #ffffff;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;

    color: #ffff;

    &:active{
        opacity: 0.5;
    }

    &:hover{
        opacity: 0.8;
    }

    img{
        transform: rotateY(180deg);
    }

`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 65px;
    margin-top: 20px;

    box-shadow: 0px 4px 4px 0px hsba(0, 0%, 0%, 0.25);
    border-radius: 14px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    
    width: 342px;
    height: 46px;

    border: none;
    outline: none;

    color: #000;

    p{
        font-size: 18px;
        font-weight: normal;
        line-height: 18px;
        color: #000;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`;