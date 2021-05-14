import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import VideoList from "./components/VideoList/VideoList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={VideoList} />
          <Route path="/video/:id" component={Fragment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
