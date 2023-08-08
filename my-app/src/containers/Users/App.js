import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

import People from "../../assets/People talking.png";
import Seta from "../../assets/seta.svg";
import Lixeira from "../../assets/lixeira.svg";

import { Container, H1, Image, ContainerItens, Button, User } from "./styles";

function Users() {
  //const users = [];
  const [users, setUsers] = useState([]); // assim que cria uma estado no React E UM REACT HOOKS

  const navigate = useNavigate();

  /* Para fazer que funcione o codigo cadastrando um usuario,
        e depois outro usaremos o SPREAD OPERATION -> ...
    */
  // Vamos aprender um REACT HOOK => useEffect (Efeito Colateral)
  // Temos dois jeitos de usar o useEffect
  // 1- A minha aplicação( A PAGINÁ CARREGOU, O useEffect é chamado)
  // 2- Quando um estado que está no array de dependencia do useEffect é alterado

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUser } = await axios.get("http://localhost:3003/users");

      setUsers(newUser);
    }

    fetchUsers();
  }, []);

  function goBackPage() {
    navigate("/");
  }

  async function deleterUser(userId) {
    await axios.delete(`http://localhost:3003/users/${userId}`);

    const newUser = users.filter((user) => user.id !== userId);

    setUsers(newUser);
  }

  return (
    <Container>
      <Image alt="Logo-Imagem" src={People} />
      <ContainerItens>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id} user={user}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleterUser(user.id)}>
                <img src={Lixeira} alt="Lata-Lixo" />
              </button>
            </User>
          ))}
        </ul>

        <Button onClick={goBackPage}>
          <img alt="seta" src={Seta} /> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Users;

// button onClick={() => deleterUser(user.id)}
//Esse trecho so é chamado assim pra funçaõ noa entrar direto
