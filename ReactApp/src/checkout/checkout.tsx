import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix,classPrefix } from '../customExports'
import Cart from './cart'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

let prefix = classPrefix({view:"CheckoutPod2"})



export default class Checkout<Props extends any> extends Component<Props>{
    constructor(props: any) {
        super(props);
    }



    createOrder(data, actions) {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: "17.95",
              },
            },
          ],
        });
    }
    
    onApprove(data, actions) {
        alert("Payment Received");
        return actions.order.capture();
    }    
    

    info = {
        items:["Email","Contact Information","Pickup Information"]
        .map((x,i)=>{
            let h3 = <h3>{x}</h3>
            let h4= <h4>{
                ["emma@example.com","67621267792","Online PDF"][i]
                }</h4>
            return (
                <>
                {h3}{h4}
                </>
            )
        })
    }

    render(){
        let myPayPal = (this.props as any).myPayPal
        return (
            <div
            className={prefix({val:''})}
            >
                <h2>Checkout</h2>
                {this.info.items}
                <PayPalScriptProvider options={{ "client-id": "AelL-dzRE8xIwLKdAyOOulQkTqQ6bWEZUh8qgR-ZdAa4UYtKpTA2G3yNKHE42LyDWrJWJeLdE-VfpFBE" }}>
                    <PayPalButtons 
                    fundingSource={paypal.FUNDING.PAYPAL}
                    onApprove={this.onApprove}
                    createOrder={this.createOrder}                    
                    />
                </PayPalScriptProvider>
             
            </div>               
        )
    }
}