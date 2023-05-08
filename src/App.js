import logo from './logo.svg';
import './App.css';
import FunctionComponent from './components/FunctionComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <FunctionComponent/>
      <hr/><hr/>
    <ClassComponent/>      
    </div>
  );
}

export default App;

