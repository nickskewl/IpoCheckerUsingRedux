import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import IpoState from "./context/IPO/IpoState";

const App = () => {
  return (
    <IpoState>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
          {/* <IPODetail /> */}
        </div>
      </BrowserRouter>
    </IpoState>
  );
};

export default App;
