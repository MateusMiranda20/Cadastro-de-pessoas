import React from "react";

import People from './assets/people.png'
import Seta from './assets/seta.svg'
import Lixeira from './assets/lixeira.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User
} from "./styles";

function App() {
  const users = [
    { id: Math.random(), name: "Rodolfo", age: 28 },
    { id: Math.random(), name: "Maria", age: 23 },
  ];

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>
          Cadastrar
          <img alt="seta" src={Seta} />
        </Button>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button><img src={Lixeira} alt="lixeira" /></button>
            </User>
          ))
          }
        </ul>
      </ContainerItens>
    </Container >
  );
}

export default App
