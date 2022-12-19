import React, { Component } from "react";
import Header from "./Header";

import { userContext } from "./context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "Nikola Tesla",
        avatar_url: "https://avatars3.githubusercontent.com/u10001",
      },
    };
  }
  render() {
    return (
      <userContext.Provider value={this.state.userData}>
        <div className="page">
          <Header />
        </div>
      </userContext.Provider>
    );
  }
}

export default App;
