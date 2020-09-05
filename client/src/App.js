import React, { Component } from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Switch, Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import CharacterList from './character/CharacterList';
import CharacterDetail from './character/CharacterDetail';
import { games } from './game/game-service';
import skyrimIcon from './game/skyrim.png';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Creation Screen</Navbar.Brand>
            <Nav className="mr-auto">
              <Dropdown as={NavItem}>
                <Dropdown.Toggle as={NavLink}>
                  <Image className="mr-1" src={skyrimIcon} height="32" /> Skyrim
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.ItemText>More games coming soon!</Dropdown.ItemText>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>

              {/* <NavDropdown id="basic-nav-dropdown">
                {games.map(game => (
                  <NavDropdown.Item href={`/${game.name.toLowerCase()}`}>
                    <Image className="mr-1" src={game.image} height="32" /> {game.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown> */}
            </Nav>
          </Container>
        </Navbar>

        <Container className="pl-0 mt-3">
          <Switch>
            <Route path="/:game/characters/:name">
              <CharacterDetail />
            </Route>
            <Route path="/:game/characters">
              <CharacterList />
            </Route>
            <Route exact path="/" >
              <Redirect to="/skyrim/characters" />
            </Route>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
