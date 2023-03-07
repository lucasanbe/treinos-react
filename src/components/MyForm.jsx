import { useState } from "react";
import "./MyForm.css";

const MyForm = ({ user }) => {
  //3 - gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const [bio, setBio] = useState("");

  const [role, setRole] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  //   console.log(name);
  //   console.log(email);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);
    //Limpar form após envio
    setName("");
    setEmail("");
    setBio("");
  };

  return (
    <div>
      {/*5 - Envio de Form */}
      {/*1 - Criação de Form */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={handleName}
            value={name}
          />
        </div>
        {/*2 - Label envolvendo input e state inline*/}
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        {/*Textarea*/}
        <span>Bio:</span>
        <textarea
          name="bio"
          placeholder="Descrição do usuário"
          onChange={(e) => setBio(e.target.value)}
          value={bio}
        ></textarea>
        {/*Select*/}
        <label>
          <span>Função do Sistema</span>
          <select name="role" onChange={(e) => setRole(e.target.value)}>
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default MyForm;
