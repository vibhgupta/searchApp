import React, { Component } from 'react';
import { Grid,Jumbotron } from 'react-bootstrap';
import SearchFrom from './components/SearchForm';
import Results from './components/Results';
class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Grid>
            <h1>Search App</h1>
            <p>Simple Search App</p>
            <SearchFrom />
          </Grid>
        </Jumbotron>
        <Results />
      </div>
    );
  }
}

export default App;
