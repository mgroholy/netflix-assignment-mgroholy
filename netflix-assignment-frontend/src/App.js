import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/videos" component={Fragment} />
          <Route path="/video/:id" component={Fragment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
