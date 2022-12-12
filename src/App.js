import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import { Card, CardBody } from 'reactstrap';


const singleGrid = new Array(9).fill("empty")

function App() {
  return (
    <div className="App">
     <div className="grid">
      
     {singleGrid.map((grid, index)=>(
      <Card key={index} color="warning">
        <CardBody className="box">

        </CardBody>
        </Card>
     ))}
      
        </div>
    </div>
  );
}

export default App;
