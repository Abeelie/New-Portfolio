import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from './components/routes/router';



const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
