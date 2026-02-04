import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar title="Simple Calculator"/>
    <Calculator title="Simple Calculator" mylabel="First Number" mylabel1="Second Number" mylabel2="Operation" cal="Calculate" clear="Clear"/>
  
    </>
  );
}

export default App;
