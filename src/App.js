import React from 'react';
import './App.css';
import Home from './components/home';
import NavBar from './components/navBar';
import Cart from './components/cart';
import ItemDetailContainer from './components/itemDetailContainer';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { ListCartProvider } from './context/contextCart';

function App() {
  return (
      <BrowserRouter>
        <NavBar/>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route exact path='/item/:id'>
            <ItemDetailContainer/>
          </Route>
          <ListCartProvider>
            <Route exact path='/cart'>
              <Cart/>
            </Route>
          </ListCartProvider>
        </Switch>
      </BrowserRouter>
)};

export default App;
