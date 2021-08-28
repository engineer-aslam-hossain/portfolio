import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AOS from "aos";
import HashLoader from "react-spinners/HashLoader";

const Home = lazy(() => import("./components/Home/Home"));

function App() {
  AOS.init();

  return (
    <Suspense
      fallback={
        <div className="loadingSpiner">
          <HashLoader color={"#766dff"} loading={true} size={100} />
        </div>
      }
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
