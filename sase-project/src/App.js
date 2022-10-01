import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

function App(){
  const navigate = useNavigate();

  const navigateToMap = () => {
    navigate('/LiveData');
  }

  const navigateHome = () => {
    navigate('/');
  }

  return(
    <div>
      <div className="container">
        <h1 className="header">Tiger</h1>
        <button onClick={navigateToMap}>Live Map</button>
      </div>

      <Routes>
        <Route path="/LiveData" element={<LiveData/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

