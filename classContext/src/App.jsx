import React from "react";
import "./index.scss";
import ThemedButton from "./ThemedButton";
import { ThemeContext, themes } from "./themes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    const newTheme =
      this.state.theme === themes.light ? themes.dark : themes.light;

    this.setState({
      theme: newTheme,
    });
  }

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <ThemedButton onClick={this.toggleTheme}>Dynamic Theme</ThemedButton>
        </ThemeContext.Provider>
        <ThemedButton onClick={this.toggleTheme}>Default Theme</ThemedButton>
      </div>
    );
  }
}
export default App;
