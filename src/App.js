import logo from './logo.svg';
import './App.css';
import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Dashboard/>
          </div>
      </BrowserRouter>
  );
}

export default App;
