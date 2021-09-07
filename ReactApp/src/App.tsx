
import React, { Component,useEffect,useState } from "react";
import logo from './logo.svg';
import './App.scss';
import { SecureRoute, Security, LoginCallback } from '@okta/okta-react';
import { mediaPrefix } from './customExports'
import LoginPod from './login/loginPod'
import HomePod from './home/homePod';
import CheckoutPod from './checkout/checkoutPod';

import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { jsPDF } from "jspdf";
import {Link} from 'react-router-dom';


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

    let pdf = new jsPDF('p', 'mm', 'a4');
    let stat = 0;
    let [myPdf,setMyPdf] = useState({
        pdf:new jsPDF('p', 'mm', 'a4'),
        val:1
    });
    let [myStat,setStat] = useState(0)
    useEffect(()=>{
        console.log(myPdf.val)
    },[myStat,myPdf])

    let addImage = (a,b,c,d,e,f)=>{
        
        
        setMyPdf((prevPdf)=>{
            prevPdf.pdf.addImage(a,b,c,d,e,f);
            prevPdf.val +=1
            return prevPdf
        })
        setStat(() => {return 1});
        // setMyPdf(() => myPdf);
        history.push("/checkout")
        
    }

    let downloadPDF = ()=>{
        setMyPdf((prevPdf)=>{
            prevPdf.pdf.save("brochure.pdf")
            prevPdf.val +=1
            return prevPdf
        })        
        console.log(myPdf)
    }

    
    let consolePDF = ()=>{
        console.log(stat,myStat)
        console.log(myPdf)
    }

    return (
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
                        render={(props:any) => {

                            props.addImage = addImage;
                            props.changeRoute = changeRoute;
                            return <HomePod  {...props} />
                        }
                        }
                    />
                    
                    <Route
                    path="/checkout"
                    exact
                    render={(props:any) => {

                        props .changeRoute = changeRoute;
                        props .downloadPDF = downloadPDF;
                        props.consolePDF= consolePDF;
                        return <CheckoutPod  {...props} />
                    }
                    } />                        
                    
                </Switch>
            </ Security>     
    )
}
