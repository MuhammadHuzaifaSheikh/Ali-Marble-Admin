import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch, Redirect
} from "react-router-dom";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminPanel from "./Components/Admin/AdminPannal";
// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample() {
    return (
        <Router>
            <div>

                <Switch>

                    <Route  path="/login" render={() => {
                        return localStorage.getItem('userId') ? <Redirect to={'/admin'}/> : <AdminLogin/>
                    }}>
                    </Route>
                    <Route  path="/admin" render={() => {
                        return localStorage.getItem('userId') ? <AdminPanel/> : <Redirect to={'/login'}/>
                    }}>
                    </Route>



                    <Route exact path="/" render={() => {
                        return localStorage.getItem('userId') ? <Redirect to={'/admin'}/>   : <Redirect to={'/login'}/>
                    }}>
                    </Route>
                </Switch>
                {/*<Switch>*/}
                {/*    <Route exact path="/">*/}
                {/*        <AdminLogin />*/}
                {/*    </Route>*/}
                {/*    <Route path="/admin">*/}
                {/*        <AdminPanel />*/}
                {/*    </Route>*/}
                {/*</Switch>*/}
            </div>
        </Router>
    );
}
