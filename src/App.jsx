import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import Details from '../src/pages/Details';
import Cart from '../src/pages/Cart';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/categories/:idc" component={Details} />
        <Route path="/cart" component={Cart} />
      </Router>
    </div>
  );
}

export default App;
