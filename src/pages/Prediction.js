import React, { Component } from "react";

import MatchService from "../services/matches.service";
// import Input from "react-validation/build/input";
import AuthService from "../services/auth.service";
import PredictionService from "../services/prediction.service";

export default class Prediction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: [],
      matchPredictions: [],
      userPredictedMatches: {}
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
    MatchService.getAllCurrentMatches().then(
      response => {
        this.setState({
          content: response.data
        });
        this.getmatchedPRedictedByUser(currentUser.userId)
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

  getmatchedPRedictedByUser(userId) {
    PredictionService.getAllPredictionByUser(userId).then(
      preditionResponse => {
        this.setState({
          userPredictedMatches: preditionResponse.data
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

  submitPrediction(e, matchId, prediction) {
    const userId = AuthService.getCurrentUser().userId;
    PredictionService.postPrediction(userId, matchId, this.state.matchPredictions).then(
      response => {
        alert("Prediction submitted succesfully")
        window.location.reload()
      },
      error => {
        alert("Error occured while submitting prediction : " + error.message)
      }
    );
  }

  handleOnChange(e, matchId) {
    console.log('selected option', e.target.value);
    var newState = {};
    if (!this.state.matchPredictions.length) {
      newState[matchId] = e.target.value
    } else {
      newState = this.state.matchPredictions.map(obj => {
        var newObj = {}
        if (obj.matchId === matchId) {
          return newObj[matchId] = e.target.value;
        }
        return newObj[matchId] = e.target.value;
      });
    }
    this.setState({ matchPredictions: [newState] });
  }

  checkifMatchAlreadyPredictedByUser(matchId) {
    var res = this.state.userPredictedMatches.hasOwnProperty(matchId) ? this.state.userPredictedMatches[matchId] : 0
    return res;
  }


  checkifMatchStarted(matchStartTime) {
    var startDate = Date.now(); //new Date(matchStartTime);
    const currentTime = Date.now();
    var isTimeUp = (currentTime.getTime() >= startDate.getTime());
    return isTimeUp;
  }

  render() {
    return (
      <div className="container">
        {this.state.content.map(match => {
          var imageSrcTeamA = 'https://countryflagsapi.com/png/' + match.team_A
          var imageSrcTeamB = 'https://countryflagsapi.com/png/' + match.team_B
          const PREDICTION_OPTION_NAME = match.matchId + '_matchPrediction'

          return (
            <>
              <div key={match.matchId} className="row">
                <div className="card col-md-3">
                  <img src={imageSrcTeamA} className="card-img-top" alt={match.team_A} width="100" height="100"></img>
                  <div className="card-body text-center">
                    <h2 className="card-text"><span className="text-center">{match.team_A}</span></h2>
                  </div>
                </div>
                <div className="card col-md-2" style={{ 'border': 'None', 'backgroundColor': 'white', 'boxShadow': 'none' }}>
                  <div className="card-body text-center">
                    <h1 className="card-text text-center">Vs</h1>
                  </div>
                </div>
                <div className="card col-md-3">
                  <img src={imageSrcTeamB} className="card-img-top" alt={match.team_B} width="100" height="100"></img>
                  <div className="card-body text-center">
                    <h2 className="card-text"><span className="text-center">{match.team_B}</span></h2>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                {/* { this.checkifMatchStarted(match.matchTs) &&
              <div className="col-md-12 text-center">
                <p>You can not predict this match as match is already started or finished</p>
              </div>
            } */}
                {this.checkifMatchAlreadyPredictedByUser(match.matchId) !== 0 &&
                  <div className="col-md-12 text-center">
                    <p>You Already submitted prediction as {this.checkifMatchAlreadyPredictedByUser(match.matchId) === 1 ? match.team_A + ' is Winner' : this.checkifMatchAlreadyPredictedByUser(match.matchId) === 2 ? 'Draw' : match.team_B + ' is Winner'}
                    </p>
                  </div>
                }
                {this.checkifMatchAlreadyPredictedByUser(match.matchId) === 0 &&
                  <><div className="col-md-3 text-center">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="radio" name={PREDICTION_OPTION_NAME} id={match.matchId + "matchPrediction1"} value="1" defaultChecked={this.checkifMatchAlreadyPredictedByUser(match.matchId) === 1} disabled={this.checkifMatchAlreadyPredictedByUser(match.matchId) !== 0} onChange={event => this.handleOnChange(event, match.matchId)}></input>
                      <label className="form-check-label" htmlFor="matchPrediction1">{match.team_A} Winner</label>
                    </div>
                  </div><div className="col-md-3 text-center">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name={PREDICTION_OPTION_NAME} id={match.matchId + "matchPrediction2"} value="2" defaultChecked={this.checkifMatchAlreadyPredictedByUser(match.matchId) === 2} disabled={this.checkifMatchAlreadyPredictedByUser(match.matchId) !== 0} onChange={event => this.handleOnChange(event, match.matchId)}></input>
                        <label className="form-check-label" htmlFor="matchPrediction2">Draw</label>
                      </div>
                    </div><div className="col-md-3 text-center">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name={PREDICTION_OPTION_NAME} id={match.matchId + "matchPrediction3"} value="3" defaultChecked={this.checkifMatchAlreadyPredictedByUser(match.matchId) === 3} disabled={this.checkifMatchAlreadyPredictedByUser(match.matchId) !== 0} onChange={event => this.handleOnChange(event, match.matchId)}></input>
                        <label className="form-check-label" htmlFor="matchPrediction3">{match.team_B} Winner</label>
                      </div>
                    </div><div className="col-md-3 text-center">
                      <div className="form-check form-check-inline">
                        <button type="button" className="btn btn-primary btn-sm" style={{ "marginLeft": "5px", "marginRight": "5px" }} onClick={event => this.submitPrediction(event, match.matchId, this.state.matchPredictions)} disabled={this.checkifMatchAlreadyPredictedByUser(match.matchId) !== 0}>Submit Prediction</button>
                        {/* <button type="button" className="btn btn-primary btn-sm" style={{"marginLeft": "5px","marginRight": "5px"}}>Cancel</button> */}
                      </div>
                    </div></>

                }
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
