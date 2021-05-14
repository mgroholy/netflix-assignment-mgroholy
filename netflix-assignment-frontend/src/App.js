import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import VideoList from "./components/VideoList/VideoList";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={VideoList} />
          <Route path="/videos/:id" exact component={VideoDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
