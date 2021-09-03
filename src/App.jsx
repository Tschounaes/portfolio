import { 
  HashRouter as Router, 
  Switch, Link,
  Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import SparkOfGenius from './pages/Projects/SparkOfGenius';
import Boddyssey from './pages/Projects/Boddyssey';
import Placempus from './pages/Projects/Placempus';
import Blog from './pages/Blog';

const App = () => {


  return (
    <div>
    <Router basename='/portfolio/'>
    <nav>
         <ul id="navigation">
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/placempus">Placempus</Link>
             </li>
             <li>
                 <Link to="/boddyssey">Boddyssey</Link>
             </li>
         </ul>
     </nav>
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
