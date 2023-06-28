import React, { useState } from "react";

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
  User,
} from "./styles";

function App() {
  //const users = [];

  const [users, setUsers] = useState([]);
  const [name,setName] = useState();
  const [age, setAge] = useState();
  //Um estado no React é imutavel

  //ESTADO -> VARIAVEL 

  //REACT HOOKS -> FERRAMENTAS AUXILIARES 

  function AddNewUser() {
  setUsers([... users,{id: Math.random(), name, age}])
    
  };
  /* Para fazer que funcione o codigo cadastrand -o um usuario,
    e depois outro usaremos o SPREAD OPERATION -> ...
  */
  function changeName(event) {
    setName(event.target.value)
  };

  function changeAge(event) {
    setAge(event.target.value)
  };



  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeAge} placeholder="Idade" />

        <Button onClick={AddNewUser}>
          Cadastrar
          <img alt="seta" src={Seta} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button>
                <img src={Lixeira} alt="lixeira" />
              </button>
            </User>
          ))
          }
        </ul>
      </ContainerItens>
    </Container >
  );
}

export default App
