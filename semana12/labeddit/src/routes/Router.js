import React from 'react';
import {
    BrowserRouter as Browser,
    Switch,
    Route
} from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import FeedPage from '../pages/FeedPage';
import PostPage from '../pages/PostPage';

const Router = () => {
    return (
        <Browser>
            <Switch>
                <Route exact path='/'>
                    <LoginPage />
                </Route>

                <Route exact path='/signup'>
                    <SignUpPage />
                </Route>

                <Route exact path='/feed'>
                    <FeedPage />
                </Route>

                <Route exact path='/feed/:id'>
                    <PostPage />
                </Route>

                <Route>
                    <div>Página não encontrada</div>
                </Route>
            </Switch>
        </Browser>
    );
}

export default Router;