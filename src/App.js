import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'
import Projects from './components/pages/Projects'

import Container from './components/layouts/Container'
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height">
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
          <Route path="/company" exact>
            <Company/>
          </Route>
          <Route path="/projects" exact>
            <Projects/>
          </Route>
          <Route path="/newproject" exact>
            <NewProject/>
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
