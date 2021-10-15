import { Link, Route, Switch } from "react-router-dom";
import Work from "./pages/Work";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./css/main.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/work" component={Work} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
