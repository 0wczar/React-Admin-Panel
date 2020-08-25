import React from "react";
import Sidebar from "components/organisms/Sidebar.js";
import Profile from "components/organisms/Profile.js";
import Settings from "components/atoms/Settings.js";
import Billings from "components/organisms/Billings.js";
import { routes } from "routes/index.js";
import BillingCard from "components/molecules/BillingCard.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Sidebar />
        <Switch>
          <Route exact path={'/'} component={Sidebar} />
          <Route path={routes.profile} component={Profile} />
          <Route path={routes.settings} component={Settings} />
          <Route path={routes.billings} component={Billings} />
          <Route path={routes.card} component={BillingCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
