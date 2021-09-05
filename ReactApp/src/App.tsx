
import React, { Component } from "react";
import logo from './logo.svg';
import './App.scss';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import { mediaPrefix } from './customExports'
import LoginPod from './login/loginPod'
import HomePod from './home/homePod';
import CheckoutPod from './checkout/checkoutPod';

import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

let oktaAuth = new OktaAuth({
    issuer: 'https://outlookwindmillcode.okta.com',
    clientId: '0oa1otkhea2S5ToVx696',
    redirectUri: window.location.origin + '/home',
    pkce:true
})



export default function App() {

    let  history = useHistory();
    let  restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl("checkout" || '/', window.location.origin));
    };
    let myRequired=(info)=>{
        console.log(history)
    }

    let changeRoute = (devObj)=>{
        let {route} = devObj
        window.location.href = window.location.origin+route
    }

    return (
        <BrowserRouter>
            <Security 
            oktaAuth={oktaAuth} 
            restoreOriginalUri={restoreOriginalUri}
            // onAuthRequired={myRequired} 
            >
                <Switch>
                    <Route path="/"
                        exact
                        render={(props) => {

                            (props as any).oktaAuth = oktaAuth
                            return <LoginPod  {...props} />
                        }
                        } />
                    <Route 
                        path="/home"
                        render={(props) => {

                            (props as any).changeRoute = changeRoute
                            return <HomePod  {...props} />
                        }
                        }
                    />
                    
                    <Route
                    path="/checkout"
                    exact
                    component={CheckoutPod} />                        
                    
                </Switch>
            </ Security>        
        </BrowserRouter>
    )
}
