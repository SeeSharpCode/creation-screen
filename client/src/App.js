import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import CharacterList from './character/CharacterList';
import CharacterDetail from './character/CharacterDetail';
import CreateCharacter from './character/CreateCharacter';
import characters from './character/mock-data';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { characters };
  }

  render() {
    return (
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Creation Screen</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="pl-0 mt-3">
          <Switch>
            <Route path="/create">
              <CreateCharacter addCharacter={(character) => this.setState({ characters: [character, ...this.state.characters] })} />
            </Route>
            <Route path="/:name">
              <CharacterDetail />
            </Route>
            <Route exact path="/" >
              <CharacterList characters={this.state.characters} />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
