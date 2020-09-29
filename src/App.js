import React from 'react';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import Cart from './components/cart';
import ItemDetailContainer from './components/itemDetailContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { ListCartProvider } from './context/contextCart';

const categories = [{name: 'Remeras', id: 'remeras'}, {name: 'Pantalones', id: 'pantalones'}, {name: 'Gorras', id: 'gorras'}, ]
 
function App() {
  return (
    <ListCartProvider>
      <BrowserRouter>
        
        <NavBar categories={categories}/>
        
        <Switch>
          
          <Route exact path='/'>
            <Home/>
          </Route>
          
          <Route exact path='/categories/:categoryId'>
            <Home/>
          </Route>
          
          <Route exact path='/item/:id'>
            <ItemDetailContainer/>
          </Route>
          
          <Route exact path='/cart'>
            <Cart/>
          </Route>
        
        </Switch>
      
      </BrowserRouter>
    </ListCartProvider>

)};

export default App;
