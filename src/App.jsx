import { 
  BrowserRouter as Router, 
  Switch,
  Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import SparkOfGenius from './pages/Projects/SparkOfGenius';
import Boddyssey from './pages/Projects/Boddyssey';
import Placempus from './pages/Projects/Placempus';
import Blog from './pages/Blog';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* START PAGE */}
        <Route exact path='/' component={Home} />

        {/* PROJECTS */}
        <Route exact path='/placempus' component={Placempus} />
        <Route exact path='/spark-of-genius' component={SparkOfGenius} />
        <Route exact path='/boddyssey' component={Boddyssey} />

        {/* BLOG */}
        <Route exact path='/blog' component={Blog} />
      </Switch>
    </Router>
  );
}

export default App;
