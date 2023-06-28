import styled from 'styled-components';
import background from './assets/imagem fundo 1.svg'

export const Container = styled.div`
    background: url("${background}");
    background-size: cover;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;
export const ContainerItens = styled.div`
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    border-radius: 51px 51px 0px 0px;
    padding: 50px 36px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    text-align: center;
    color: #ffff;
    margin-bottom: 80px;
`;
export const InputLabel = styled.p`
    font-style: normal;
    font-weight: bold;
    font-size: 18;
    line-height: 22px;

    margin-left: 25px;

    color: #eeeeee;
`;

export const Input = styled.input`
    background: hsba(0, 0%, 100%, 0.25);
    box-shadow: 0px 4px 4px 0px hsba(0, 0%, 0%, 0.25);
    border-radius: 14px;
    background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    
    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 24px;

    border: none;
    outline: none;

    font-size: 18px;
    font-weight: normal;
    line-height: 18px;
    
    color: #ffff;

`;

export const Button = styled.button`
    width: 342px;
    height: 74px;

    background: rgba(0, 0, 0, 0.8);
    border-radius: 14px;
    border: none;

    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 28px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    color: #ffff
    ;
`;