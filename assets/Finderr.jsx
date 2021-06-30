import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Languages from "./components/Languages";
import HourlyRate from "./components/HourlyRate";
import Navbar from "./components/Navbar";
import UserContext from "./context/UserContext";

const Finderr = () => {
  const {userCredentials, setUserCredentials} = useContext(UserContext);
  const handleDestroyCredentials = () =>{
    setUserCredentials(false);
  }
  return (
    <>
 {!userCredentials && 
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route path="/languages">
            <Languages />
          </Route>
          <Route path="/hourly-rate">
            <HourlyRate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
}
{userCredentials && 
  <>
  <p>Vous avez fait votre choix ?</p><button onClick={handleDestroyCredentials}>Annuler</button></>
}
    </>
  );
};

export default Finderr;
