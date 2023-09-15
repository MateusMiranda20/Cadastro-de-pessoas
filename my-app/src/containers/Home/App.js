import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import People from "../../assets/people.png";
import Seta from "../../assets/seta.svg";

import H1 from "../../components/Title/styles";
import ContainerItens from "../../components/ContainerItens/App";

import {
  Container,
  Image,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  //const users = [];
  const [users, setUsers] = useState([]); // assim que cria uma estado no React E UM REACT HOOKS
  const inputName = useRef();
  const inputAge = useRef();

  const navigate = useNavigate();

  async function addNewUser() {
    const { data: newUsers } = await axios.post("http://localhost:3005/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    console.log(newUsers);

    setUsers([...users, newUsers]);

    
    navigate("/usuarios")
    /* Para fazer que funcione o codigo cadastrando um usuario,
        e depois outro usaremos o SPREAD OPERATION -> ...
    */
    // Vamos aprender um REACT HOOK => useEffect (Efeito Colateral)
    // Temos dois jeitos de usar o useEffect
    // 1- A minha aplicação( A PAGINÁ CARREGOU, O useEffect é chamado)
    // 2- Quando um estado que está no array de dependencia do useEffect é alterado
  }

  // Props -> Propriedade
  return (
    <Container>
      <Image alt="Logo-Imagem" src={People} />
      <ContainerItens>
        <H1 anacate={"Meu nome não e"}>Olá</H1>

        <InputLabel>Name</InputLabel>
        <Input ref={inputName} placeholder="Name" />

        <InputLabel>Age</InputLabel>
        <Input ref={inputAge} placeholder="Age" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Seta} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default App;

// button onClick={() => deleterUser(user.id)}
//Esse trecho so é chamado assim pra funçaõ noa entrar direto
