import React from "react";
import routes from "./routes";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

// Import Scss
import "./theme.scss";

//Import Icon Css
import "./assets/css/materialdesignicons.min.css";
import Index1 from "./pages/Index1/Index1";
const getRoutes = (allRoutes) =>
allRoutes.map((route) => {
  if (route.collapse) {
    return getRoutes(route.collapse);
  }

  if (route.route) {
    return <Route exact path={route.route} element={route.component} key={route.key} />;
  }

  return null;
});



const App = () => {
  return (
    <React.Fragment>
       <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Index1 to="" />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
