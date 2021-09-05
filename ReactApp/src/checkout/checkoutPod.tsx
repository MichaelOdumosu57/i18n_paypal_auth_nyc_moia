import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix } from '../customExports'


export default class CheckoutPod extends Component{
    constructor(props: any) {
        super(props);
    }

    render (){
        return (
            <div
            className="a_p_p_CheckoutView"
            >
                <h1>Checkout Page</h1>
            </div>
        )
    }
}