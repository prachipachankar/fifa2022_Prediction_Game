import React, { Component } from "react";

// import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    // UserService.getAllMatches().then(
    //   response => {
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
        <div className="card">
          <div class="card-header"><h2>FIFA'22 WorldCup result prediction game for Mix Tooling team.</h2></div>
          <img src="fifa22.png" className="mx-auto d-block" alt="Fifa2022" width="400px" height="400px"></img>
          <div className="card-body">
            <p className="card-text">
              What to do?
              <div class="row">
                <div class="col-md-12">
                  <ol>
                    <li>Sign up with Nuance EmailId, First Name, Last Name and a difficult password.</li>
                    <li>Then Sign In every day before the start of the match and predict the result of the match
                      <ul>
                        <li>For group stages you get 10 points for the right prediction (Win for Team A, Win for Team B, Draw)</li>
                        <li>For pre-quarterfinal stages you get 15 points for the right prediction (Win for Team A, Win for Team B, Draw)</li>
                        <li>For quarterfinal stages you get 20 points for the right prediction (Win for Team A, Win for Team B, Draw)</li>
                        <li>For semifinal stages & 3rd and 4th place match you get 25 points for the right prediction (Win for Team A, Win for Team B, Draw)</li>
                        <li> For final stages you get 30 points for the right prediction (Win for Team A, Win for Team B, Draw)</li>
                      </ul>
                    </li>
                    <li>Make you predictions before the match start of each day.</li>
                    <li>Only the match to be played in next 24 hrs will be displayed on the Prediction page</li>
                    <li>Check your position on the Leaderboard</li>
                  </ol>
                </div>
              </div>
              <h3 className="text-center">All the Best!</h3>
            </p>
          </div>
        </div>

      </div>
    );
  }
}
