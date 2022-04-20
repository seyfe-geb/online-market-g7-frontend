import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <div className="appdiv">
      <BrowserRouter>
          <div className="App">
              <Dashboard/>
          </div>
      </BrowserRouter>
      </div>
  );
}

export default App;
