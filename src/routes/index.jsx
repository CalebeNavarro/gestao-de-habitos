import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Dashboard from "../pages/Dashboard";
import SubscribedGroups from "../pages/SubscribedGroups";
import SearchGroups from "../pages/SearchGroups";
import CreateGroup from "../pages/CreateGroup";
import SpecificGroup from "../pages/SpecificGroup";
import NotFound from "../pages/NotFound";
import { useState, useEffect } from "react"

const Routes = () => {

  const [authenticated, setAuthenticated] = useState(false)

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem("@habits:token"))
    if (token) {
      return setAuthenticated(true)
    }
  },[authenticated])

  return (
    <Switch>
      <Route exact path="/">
        <Home authenticated={authenticated}/>
      </Route>
      <Route path="/signup">
        <SignUp authenticated={authenticated}/>
      </Route>
      <Route path="/login">
        <LogIn authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
      <Route path="/dashboard">
        <Dashboard authenticated={authenticated} setAuthenticated={setAuthenticated}/>
      </Route>
      <Route path="/subscribedgroups">
        <SubscribedGroups authenticated={authenticated}/>
      </Route>
      <Route path="/creategroup">
        <CreateGroup authenticated={authenticated}/>
      </Route>
      <Route exact path="/groups">
        <SearchGroups authenticated={authenticated}/>
      </Route>
      <Route path="/groups/:id">
        <SpecificGroup authenticated={authenticated}/>
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
};

export default Routes;
