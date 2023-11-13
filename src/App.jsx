import logo from './logo.svg';
import './App.css';
import Cabecera from './components/Cabecera';
import ContadorPropsDrilling from './components/props-drilling/ContadorPropsDrilling';

function App() {
  return (
    <div className="border mx-auto text-center p-3">
      <Cabecera titulo= "Curso React: Redux" />
      <main className="container">
        <ContadorPropsDrilling/>
        </main>
    </div>
  );
}

export default App;
