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

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <LogIn />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/subscribedgroups">
        <SubscribedGroups />
      </Route>
      <Route path="/searchgroups">
        <SearchGroups />
      </Route>
      <Route path="/creategroup">
        <CreateGroup />
      </Route>
      <Route path="/specificgroup">
        <SpecificGroup />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default Routes;
