import { 
  HashRouter as Router, 
  Switch,
  Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import SparkOfGenius from './pages/Projects/SparkOfGenius';
import Boddyssey from './pages/Projects/Boddyssey';
import Placempus from './pages/Projects/Placempus';
import Blog from './pages/Blog';

//Components
import Navigation from './components/Navigation';
import Social from './components/Social';
import AboutMeOverlay from './components/AboutMeOverlay';

const App = () => {

  return (
    <div>
    <Router>
      <Navigation /> 
      <Social />
      <AboutMeOverlay />

      <Switch>
        {/* START PAGE */}
        <Route exact path='/' component={Home} />

        {/* PROJECTS */}
        <Route path='/placempus' component={Placempus} />
        <Route path='/spark-of-genius' component={SparkOfGenius} />
        <Route path='/boddyssey' component={Boddyssey} />

        {/* BLOG */}
        <Route exact path='/blog' component={Blog} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
