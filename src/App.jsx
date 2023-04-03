import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import Details from '../src/pages/Details';

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Homepage} />
        <Route path="/categories/:idc" component={Details} />
      </Router>
    </div>
  );
}

export default App;
