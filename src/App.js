
import { Switch, Route} from 'react-router-dom';
import Order from './component/Order';
import User from './component/User';
import Product from './component/Product';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
    <Switch>
      <Route exact path="/" component={Product} />
      <Route exact path="/user" component={User} />
      <Route exact path="/order" component={Order} />
     
    </Switch>
    </>
  );
}

export default App;
