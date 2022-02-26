// READ ME **************************************************

// All the constant components like Header navigation, sub navigation are inside the Constants folder
// All the page components are given inside the Pages folder
// Components related to the pages are inside the components -> respective page components folder
// api calls from node are in the helper folder.
// exported company logo is on the creative folder.
// All the css are provided inline mostly.

// READ ME **************************************************


// react import
import React from "react";

//react router dom import since this is a multipage app
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

//getting the consultation page route
import Consultation from "./Pages/Consultation"

//getting the dashboard page route
import Dashboard from "./Pages/Dashboard";

//All routes
//Note : Routes will be rendered on the ReactDOM.render in index.js
//not App.js
function Routes() {
  return (    
    <BrowserRouter>
        <Switch>
        <React.Fragment>
            <Route exact path='/' element={<Consultation />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
        </React.Fragment>                 
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;