import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Error from "../pages/Error/Error"
import Feed from "../pages/feed/Feed"
import Login from "../pages/login/Login"
import Post from "../pages/post/Post"
import SignUp from "../pages/signup/Signup"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Feed />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/post">
                    <Post />
                </Route>
                <Route>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router