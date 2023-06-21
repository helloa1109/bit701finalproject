import logo from './logo.svg';
import './App.css';
import homin from './homin.gif';
function App() {
  return (
    <div className="App">
      <img src={homin} width={800}/>
      <br/><br/>
      <h1 style={{fontSize:'150px'}}>도커 쉽다 ㅋ </h1>
    </div>
  );
}

export default App;
