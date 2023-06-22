import logo from './logo.svg';
import './App.css';
import homin from './homin.gif';
import homin1 from './hominpee.gif';
function App() {
  return (
    <div className="App">
      <img src={homin} width={800} className='App-logo'/>
      <img src={homin1} width={600} className='App-logo'/>
      <img src={homin} width={800} className='App-logo'/>
      <img src={homin1} width={600} className='App-logo'/>
      <img src={homin} width={800} className='App-logo'/>
      <img src={homin1} width={600} className='App-logo'/>
      <br/><br/>
      {/* <h1 style={{fontSize:'30px'}} className='App-text'>도커 쉽다 ㅋ </h1> */}

    </div>
  );
}

export default App;
