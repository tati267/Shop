import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, Link } from "react-router-dom";

const HatsPage = () => (
  <div>
    <Link to="/topics">Topics</Link>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
