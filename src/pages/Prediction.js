import React, { Component } from "react";

import MatchService from "../services/matches.service";
// import Input from "react-validation/build/input";
import AuthService from "../services/auth.service";

export default class Prediction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: []
    };
  }

  componentDidMount() {
    debugger;
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
    MatchService.getAllCurrentMatches().then(
      response => {
        debugger;
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        {/* {this.state.content[0].team_A} */}
        {/* <header className="jumbotron">
          <h3>Match Prediction</h3>
        </header> */}
        {this.state.content.map(match => {
            var imageSrcTeamA='https://countryflagsapi.com/png/'+match.team_A
            var imageSrcTeamB='https://countryflagsapi.com/png/'+match.team_B
            return (
            <>
            <div key={match.id} class="row">
              <div class="card col-md-3">
                <img src={imageSrcTeamA} className="card-img-top" alt={match.team_A} width="100" height="100"></img>
                  <div className="card-body text-center">
                    <p className="card-text"><h2 className="text-center">{match.team_A}</h2></p>
                  </div>
              </div>
              <div class="card col-md-2" style={{'border':'None', 'background-color':'white', 'box-shadow':'none'}}>
                <div class="card-body text-center">
                  <p class="card-text text-center"><h1>Vs</h1></p>
                </div>
              </div>
              <div class="card col-md-3">
                <img src={imageSrcTeamB} className="card-img-top" alt={match.team_B} width="100" height="100"></img>
                  <div className="card-body text-center">
                    <p className="card-text"><h2 className="text-center">{match.team_B}</h2></p>
                  </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-md-4 text-center">
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                      <label class="form-check-label" for="inlineRadio1">{match.team_A} Winner</label>
                  </div>
                </div>
                <div class="col-md-4 text-center">
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                      <label class="form-check-label" for="inlineRadio2">Draw</label>
                  </div>
                </div>
                <div class="col-md-4 text-center">
                  <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input>
                      <label class="form-check-label" for="inlineRadio3">{match.team_B} Winner</label>
                  </div>
                </div>
            </div>
            <div class="form-group row">
            </div>
            </>
            );
        })}
      </div>
    );
  }
}
