import React, { Component } from "react";

import MatchService from "../services/matches.service";
// import Input from "react-validation/build/input";

export default class Prediction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: MatchService.getAllCurrentMatches()
    };
  }

  componentDidMount() {
    debugger;
    // MatchService.getAllCurrentMatches().then(
    //   response => {
    //     debugger;
    //     this.setState({
    //       content: response.data
    //     });
    //   },
    //   error => {
    //     this.setState({
    //       content:
    //         (error.response && error.response.data) ||
    //         error.message ||
    //         error.toString()
    //     });
    //   }
    // );
  }

  render() {
    return (
      <div className="container">
        {/* {this.state.content[0].team_A} */}
        {/* <header className="jumbotron">
          <h3>Match Prediction</h3>
        </header> */}
        {this.state.content.map(match => {
            return (
            <><div key={match.id} class="row">
                    <div class="col-md-4">
                        <h2>{match.team_A}</h2>
                    </div>
                    <div class="col-md-4">
                        <h2>Vs</h2>
                    </div>
                    <div class="col-md-4">
                        <h2>{match.team_B}</h2>
                    </div>
                </div>
                <div key={match.id} class="row">
                    {/* <div class="form-check-inline">
                        <label class="form-check-label">
                            <Input type="radio" class="form-check-input" name="optradio">Option 1</Input>
                        </label>
                        </div>
                        <div class="form-check-inline">
                        <label class="form-check-label">
                            <Input type="radio" class="form-check-input" name="optradio">Option 2</Input>
                        </label>
                        </div>
                        <div class="form-check-inline disabled">
                        <label class="form-check-label">
                            <Input type="radio" class="form-check-input" name="optradio" disabled>Option 3</Input>
                        </label>
                    </div> */}
                    <hr />
                </div></>
            );
        })}
      </div>
    );
  }
}
