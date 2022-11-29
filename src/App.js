import Nav from './components/Nav/Nav.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Technologies from './components/Technologies/Technologies.jsx';
import Projects from './components/Projects/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';



function App() {

  return (
  <div className='App'>
    <Nav/>
    <Home/>
    <About/>
    <Technologies/>
    <Projects/>
    <Footer/>
  </div>
  )
}

export default App;
