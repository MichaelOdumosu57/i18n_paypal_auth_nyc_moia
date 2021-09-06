import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix,classPrefix } from '../customExports'
import PropTypes from "prop-types";

let prefix = classPrefix({view:"CheckoutPod1"})
interface MyProps{
    changeRoute:Function
}
export default class Cart<Props extends MyProps> extends Component<Props>{
    constructor(props: any) {
        super(props);
    }

    shoppingInfo = {
        onClick:()=>{
            (this.props as any).changeRoute({route:"/home"})
        }
    }

    render(){
        let r = document.querySelector(':root');
        let rs = getComputedStyle((r as unknown as HTMLElement));
        let color3 = rs.getPropertyValue("--color3");               
        return (
            <div
            className={prefix({val:''})}
            >
                <h2>Shopping Cart</h2>
                <h3
                style={{color:color3}}
                onClick={this.shoppingInfo.onClick}
                >Back to Brochure</h3>
                <div
                className={prefix({val:'Item0'})}
                >
                    <div
                    className={prefix({val:'Img0'})}
                    ></div>
                    <p>1 Item</p>
                </div>
                <div
                className={prefix({val:'Item1'})}
                >
                    <h2>TOTAL</h2>
                    <h2>$17.95</h2>
                </div>
            </div>
                    
        )
    }

}

