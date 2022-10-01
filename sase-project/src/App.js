import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import LiveData from './LiveData';

function App(){
  return(
    <div>
      <div className="container">
        <h1 className="header">Tiger Trax</h1>
        <button onClick={navigateToMap}>Live Map</button>
      </div>
    </div>
  );
}

export default App;

