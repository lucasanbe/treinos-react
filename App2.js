import { useState } from "react";
import "./App.css";
import CarDetails from "./src/components/CarDetails";
import ChangeMessageState from "./src/components/ChangeMessageState";
import ConditionalRender from "./src/components/ConditionalRender";
import Container from "./src/components/Container";
import ExecuteFunction from "./src/components/ExecuteFunction";
import ListRender from "./src/components/ListRender";
import ManageData from "./src/components/ManageData";
import Message from "./src/components/Message";
import ShowUserName from "./src/components/ShowUserName";

function App() {
  const name = "Joaquim"; //pode passar a props como variárvel
  const [userName] = useState("Maria"); //pode passar a props como useState
  //também pode passar de forma direta name={"João"}

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 35486 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 234 },
  ];

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/*props*/}
      <ShowUserName name={userName} />
      {/*destructuring props*/}
      <CarDetails brand="VW" color="Azul" km={10000} newCar={false} />
      {/*reaproveitando componentes*/}
      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
      {/*reaproveitando componentes*/}
      <CarDetails brand="Fiat" color="Branco" km={4500} newCar={false} />
      {/*loop em array de objetos*/}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/*prop children*/}
      <Container>
        <p>Este é o conteúdo!</p>
      </Container>
      {/*Executar função como prop*/}
      <ExecuteFunction myFunction={showMessage} />
      {/*Facelift*/}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}
export default App;
