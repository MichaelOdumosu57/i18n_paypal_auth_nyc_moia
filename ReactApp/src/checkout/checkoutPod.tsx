import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix,classPrefix } from '../customExports'
import Cart from './cart'
import Checkout from './checkout'

let prefix = classPrefix({view:"Checkout"})

export default class CheckoutPod extends Component{
    constructor(props: any) {
        super(props);
    }



    render (){
        let r = document.querySelector(':root');
        let rs = getComputedStyle((r as unknown as HTMLElement));
        let color3 = rs.getPropertyValue("--color3")        
        return (
        <div
            className={prefix({val:'View'})}
            >
                <div
                className={prefix({val:'MainPod'})}
                >
                    <div
                    className={prefix({val:'Pod0'})}
                    >
                        <h1>Checkout </h1>
                        <div
                        className={prefix({val:'Pod0Img0'})}
                        ></div>
                    </div>
                    <Cart changeRoute={(this.props as any).changeRoute}/>
                    <Checkout  />                 
                </div>
                
            </div>
        )
    }
}