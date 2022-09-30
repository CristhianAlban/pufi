
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import ShopProduct from './components/ShopProduct/ShopProduct';


function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/product/:name" component={ShopProduct}/>
    </div>
  );
}

export default App;
