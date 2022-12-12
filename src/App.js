import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap';
import Icon from "./components/Icon";
import { useState } from "react";


const mainGrid = new Array(9).fill("empty")




function App() {

  const [hasCross, sethasCross] = useState(false) // State to check if it has Cross Icon or not
  const [winnerMessage, setwinnerMessage] = useState("")


  // Check if game is won or draw before every turn
  const isGameWon = ()=> {
    
    if(mainGrid[0] !== "empty" && mainGrid[0] === mainGrid[1] && mainGrid[0] === mainGrid[2]){
      setwinnerMessage(`${mainGrid[0]} has won`); // all 3 in 1st row has same Icon

    }else if(mainGrid[3] !== "empty" && mainGrid[3] === mainGrid[4] && mainGrid[3] === mainGrid[5]){
      setwinnerMessage(`${mainGrid[3]} has won`); // all 3 in 2nd row has same Icon

    }else if(mainGrid[6] !== "empty" && mainGrid[6] === mainGrid[7] && mainGrid[6] === mainGrid[8]){
      setwinnerMessage(`${mainGrid[6]} has won`); // all 3 in 3rd row has same Icon

    }else if(mainGrid[0] !== "empty" && mainGrid[0] === mainGrid[3] && mainGrid[0] === mainGrid[6]){
      setwinnerMessage(`${mainGrid[0]} has won`); // all 3 in 1st column has same Icon

    }else if(mainGrid[1] !== "empty" && mainGrid[1] === mainGrid[4] && mainGrid[1] === mainGrid[7]){
      setwinnerMessage(`${mainGrid[1]} has won`); // all 3 in 2nd column has same Icon

    }else if(mainGrid[2] !== "empty" && mainGrid[2] === mainGrid[5] && mainGrid[2] === mainGrid[8]){
      setwinnerMessage(`${mainGrid[2]} has won`); // all 3 in 3rd column has same Icon

    }else if(mainGrid[0] !== "empty" && mainGrid[0] === mainGrid[4] && mainGrid[0] === mainGrid[8]){
      setwinnerMessage(`${mainGrid[0]} has won`); // all 3 in left to right diagonal has same Icon

    }
    else if(mainGrid[2] !== "empty" && mainGrid[0] === mainGrid[4] && mainGrid[0] === mainGrid[6]){
      setwinnerMessage(`${mainGrid[2]} has won`); // all 3 in right to left diagonal has same Icon

    }

    if(!mainGrid.includes("empty")){
      setwinnerMessage("Game draw");
    }
  }

  // reload complete game
  const reloadGame = ()=>{
    sethasCross(false);
    setwinnerMessage("");
    mainGrid.fill("empty",0,9)
  }




  const changeGrid = index=>{
    if(mainGrid[index] === "empty"){
      mainGrid[index] = hasCross ? "Cross" : "Circle";
      sethasCross(!hasCross)
    }else{
      console.log('else');
    }

    isGameWon();
  }
  return (
    <Container className="p-5">
      <Row>
        <Col md={6} className="offset-md-3">
      {
        winnerMessage? (
          <div className="mb-2 mt-2">
              <h1 className="text-light text-uppercase text-center">
                {winnerMessage}
              </h1>
           {/* reload game when all grids are filled */}
          <Button color="light" className="my-2" block onClick={reloadGame}> Reload game</Button> 
          </div>
        ):(
          //  Top message line 
      <h1 className="text-center text-light">
      {hasCross? "Cross": "Circle"} turns
     </h1>
        )
      }

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

      </Col>
      </Row>
    </Container>
  );
}

export default App;
