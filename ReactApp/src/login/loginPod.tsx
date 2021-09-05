import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix } from '../customExports'



export default class LoginPod extends Component {
    constructor(props: any) {
        super(props);

        this.login = this.login.bind(this)
    }


    login = async () => {
        (this.props as any).oktaAuth.signInWithRedirect({ originalUri: '/' });
    };



    render() {
        let {login} = this
        return (
            <div
                className="a_p_p_LoginView">
                <h1>Welcome to the Bengali New Year Brochure </h1>
                <button onClick={login}
                    className="a_p_p_LoginViewButton"
                >Login</button>
            </div>
        )
    }
}