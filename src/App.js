import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Card, CardBody, Container } from 'reactstrap';
import Icon from "./components/Icon";
import { useState } from "react";


const mainGrid = new Array(9).fill("empty")




function App() {

  const [hasCross, sethasCross] = useState(false)

  const changeGrid = index=>{
    if(mainGrid[index] === "empty"){
      mainGrid[index] = hasCross ? "Circle" : "Cross";
      sethasCross(!hasCross)
    }else{
      console.log('else');
    }
  }
  return (
    <Container className="p-5">
      {/* Top message line */}
      <h1 className="text-center text-light">
       {hasCross? "Cross": "Circle"} turns
      </h1>

      {/* Play area */}
     <div className="grid">
     {mainGrid.map((item, index)=>(
      <Card key={index} color="light" onClick={()=> changeGrid(index)}>
        <CardBody className="box">
          <Icon name={item}/>
          
        </CardBody>
        </Card>
     ))}
     
      
        </div>
    </Container>
  );
}

export default App;
