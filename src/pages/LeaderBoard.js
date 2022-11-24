import React, { Component } from "react";

import AuthService from "../services/auth.service";
import LeaderboardService from "../services/leaderboard.service";

export default class LeaderBoard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: []
        };
    }

    componentDidMount() {
        const currentUser = AuthService.getCurrentUser();

        if (!currentUser) this.setState({ redirect: "/home" });
        this.setState({ currentUser: currentUser, userReady: true })
        LeaderboardService.getLeaderBoard().then(
          response => {
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
                <h2>Leader Board</h2>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.content && this.state.content.map(user => {
                            return <tr>
                                <td>{user.fname}</td>
                                <td>{user.lname}</td>
                                <td>{user.points}</td>
                            </tr>
                        }
                        )}
                        {this.state.content &&
                            <span className="text-left">No data</span>
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
