
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
