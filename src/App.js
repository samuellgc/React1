import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import NewClient from './pages/NewClient';
import ListClient from './pages/ListClient';
import NewCategory from './pages/NewCategory';
import ListCategory from './pages/ListCategory';
import NewProduct from './pages/NewProduct';
import ListProduct from './pages/ListProduct';
import Dashboard from './pages/Dashboard';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound"; 


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    
      <Switch>
      <Route path="/add-cliente" component={NewClient}/>
      <Route path="/lista-clientes" component={ListClient}/>
      <Route path="/add-categoria" component={NewCategory}/>
      <Route path="/lista-categorias" component={ListCategory}/>
      <Route path="/add-produto" component={NewProduct}/>
      <Route path="/lista-produtos" component={ListProduct}/>
      <Route path="/dashboard" component={Dashboard}/>

      <Route path="/*" component={NotFound}/>
      </Switch>
    
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
