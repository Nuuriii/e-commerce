import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import Details from '../src/pages/Details';
import Cart from '../src/pages/Cart';
import Congratulation from '../src/pages/Congratulation';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/categories/:idc" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/congratulation" component={Congratulation} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
