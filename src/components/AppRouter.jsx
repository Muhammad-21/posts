import React from 'react'
import {Switch,Route,Redirect} from "react-router-dom";
import About from "../pages/About";
import PostIdPages from '../pages/PostIdPages';
import Posts from "../pages/Posts";
export default function AppRouter() {
    return (
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/posts">
            <Posts/>
          </Route>
          <Route exact path="/posts/:id">
            <PostIdPages/>
          </Route>
          <Redirect to="/posts"/>
        </Switch>
    )
}
