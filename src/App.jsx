import { 
  HashRouter as Router, 
  Switch,
  Route } from 'react-router-dom';

import { useEffect } from 'react';
//import useRootOverflow from './hooks/useRootOverflow';

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
import Footer from './components/Footer';

const App = () => {
  //const overflow = useRootOverflow();

  useEffect(() => {
    document.getElementById('root').style.height = window.innerHeight + 'px';

    const setViewportHeight = () => {
      document.getElementById('root').style.height = '100vh';
    }

    window.addEventListener('load', setViewportHeight);
    return () => window.removeEventListener('load', setViewportHeight)
  },[])
 
  return (
    <Router>
      <Navigation /> 
      <Social />
      <AboutMeOverlay />
      <Footer/>

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
  );
}

export default App;
