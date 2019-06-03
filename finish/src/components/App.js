import React from "react";
import TodoContainer from "../containers/TodoContainer";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
