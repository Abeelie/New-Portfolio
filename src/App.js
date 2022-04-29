import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from './components/routes/router';
import Loader from "./components/Loader/Loader";


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        {document.readyState === "complete" ? 
          <Router /> : <Loader /> 
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
