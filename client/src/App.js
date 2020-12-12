import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CharacterList from './character/CharacterList';
import CharacterDetail from './character/CharacterDetail';
import CreateCharacter from './character/CreateCharacter';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Creation Screen</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="pl-0 mt-3">
          <Switch>
            <Route path="/create">
              <CreateCharacter />
            </Route>
            <Route path="/:name">
              <CharacterDetail />
            </Route>
            <Route exact path="/" >
              <CharacterList />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
