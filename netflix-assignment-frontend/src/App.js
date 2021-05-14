import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import VideoList from "./VideoList/VideoList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/videos" component={VideoList} />
          <Route path="/video/:id" component={Fragment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
