import React from 'react'
import {Switch,Route} from "react-router-dom";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
export default function AppRouter() {
    return (
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/posts">
            <Posts/>
          </Route>
          <Route path="/error">
            <Error/>
          </Route>
        </Switch>
    )
}
