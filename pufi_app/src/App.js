
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home/Home';
import ShopProduct from './components/ShopProduct/ShopProduct';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Route exact path="/" component={Home} />
      <Route path="/product/:name">
        <NavBar/>
        <ShopProduct/>
        <Footer/>
      </Route>
    </div>
  );
}

export default App;
