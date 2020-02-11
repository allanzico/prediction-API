
import React, { Component } from 'react';
import Predictions from './components/predictions';


class App extends Component {
  state = {
    predictions: {}
  }

  componentDidMount() {
    fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/date/2020-02-06", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "fdc81b8c93msh5db28ab6f2c8da6p1858ebjsnc97fa5269d0e"
      }
    }).then(Response => Response.json())
      .then((data) => {
        console.log(data);
        this.setState({ predictions: data })
      }).catch(console.log)
  }


  render() {
    return (
      <Predictions predictions={this.state.predictions} />
    );
  }
}
export default App;
