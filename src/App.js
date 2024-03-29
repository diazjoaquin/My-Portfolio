import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Projects from './components/Projects/Projects.jsx';
import Technologies from './components/Technologies/Technologies.jsx';
import Contact from './components/Contact/Contact.jsx';
import { Route } from 'react-router-dom';



function App() {

  return (
  <div className='App'>

    <Route
    exact path={'/'}
    component={Home}
    />
    <Route
    exact path={'/about'}
    component={About}
    />
    <Route
    exact path={'/projects'}
    component={Projects}
    />
    <Route
    exact path={'/technologies'}
    component={Technologies}
    />
    <Route
    exact path={'/contact'}
    component={Contact}/>
  </div>
  )
}

export default App;
