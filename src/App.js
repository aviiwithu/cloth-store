import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Children from './Components/Children';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import Login from './Components/Login';
import Men from './Components/Men';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/Reusable/ProductDetails';
import Women from './Components/Women';
import Cart from './Components/Cart';

const App = () => {
  
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/men" component={Men} />
      <Route exact path="/women" component={Women} />
      <Route exact path="/children" component={Children} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/detail/:id" component={ProductDetails} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
      <Footer/>
  
      
    </>
  )
}

export default App