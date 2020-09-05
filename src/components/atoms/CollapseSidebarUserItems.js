import React  from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { routes } from "routes/index.js";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

function CollapseSidebarUserItem() {

  return (
    <div>
    <BrowserRouter>
      <Route
        path="/"
        render={(history) => (
            <Tabs
            orientation="vertical"
            variant="scrollable"
              value={
                history.location.pathname !== "/card" &&  "/"
                  ? history.location.pathname
                  : false
              }
            >
              <Tab
                value={routes.profile}
                label="Profile"
                component={Link}
                to={routes.profile}
              />
               <Tab
                value={routes.settings}
                label="Account Settings"
                component={Link}
                to={routes.settings}
              />
               <Tab
                value={routes.password}
                label="Password"
                component={Link}
                to={routes.password}
              />
              <Tab
                value={routes.billings}
                label="Billing"
                component={Link}
                to={routes.billings}
              />
            </Tabs>
        )}
      />

    
      <Switch>
        <Route path="/profile" />
        <Route path="/billings"/>
        <Route path="/password"/>
        <Route path="/settings"/>
        <Route path="/card"/>
      </Switch>
    </BrowserRouter>
  </div>
  );
}

export default CollapseSidebarUserItem;