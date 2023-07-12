import React, { useState, useRef } from "react";

import axios from 'axios'

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
  const inputName = useRef()
  const inputAge = useRef()
  //Um estado no React é imutavel

  //ESTADO -> VARIAVEL 

  //REACT HOOKS -> FERRAMENTAS AUXILIARES 

  async function AddNewUser() {

    const data = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value
    });

    console.log(data)

    //setUsers([
    // ...users,
    //{
    //   id: Math.random(),
    //  name: inputName.current.value,
    //  age: inputAge.current.value,
    //  },
    //]);

  };
  /* Para fazer que funcione o codigo cadastrand -o um usuario,
    e depois outro usaremos o SPREAD OPERATION -> ...
  */
  function deleterUser(userId) {
    const newUser = users.filter((user) => user.id !== userId)
    setUsers(newUser)
  };


  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={AddNewUser}>
          Cadastrar
          <img alt="seta" src={Seta} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleterUser(user.id)} >
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

// button onClick={() => deleterUser(user.id)}
//Esse trecho so é chamado assim pra funçaõ noa entrar direto