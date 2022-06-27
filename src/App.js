import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layouts/Container'


function App() {
  return (
    <Router>
      <Link to="/">HOME</Link>
      <Link to="/contact">CONTATO</Link>
      <Link to="/company">EMPRESA</Link>
      <Link to="/newproject">NOVO PROJETO</Link>
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
          <Route path="/newproject" exact>
            <NewProject/>
          </Route>
        </Container>
      </Switch>
      <p>Footer</p>
    </Router>
  );
}

export default App;
