
import React, { Component } from 'react';
import Fixtures from './components/fixtures';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      predictions: {}
    }
  }


  componentDidMount() {
    fetch("https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "football-prediction-api.p.rapidapi.com",
        "x-rapidapi-key": "6c2959b2d1msh898657065a254ecp107e42jsn7f3f1e40fa18"
      }
    }).then(Response => Response.json())
      .then((data) => {
        console.log(data);
        this.setState({ predictions: data })
      }).catch(console.log)
  }


  render() {
    return (
      <Fixtures fixtures={this.state.predictions.data && this.state.predictions.data} />
    );
  }


}


export default App;
