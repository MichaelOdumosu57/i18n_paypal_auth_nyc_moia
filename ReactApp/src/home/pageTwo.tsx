import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix,classPrefix } from '../customExports'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

let prefix = classPrefix({view:"HomePod2Page2"})



export default class PageTwo extends Component{
    constructor(props:any){
        super(props)
    }

    render(){
        let r = document.querySelector(':root');
        let rs = getComputedStyle((r as unknown as HTMLElement));
        let color0 = rs.getPropertyValue("--color0")
        return(
            <div
            className={prefix({val:''})}
            >
                <div
                className={prefix({val:'Img0'})}
                ></div>
                <div
                >
                    <h1
                    className={prefix({val:'Title0'})}
                    >Pohela</h1>
                    <h1
                    className={prefix({val:'Title1'})}
                    >Boishakh</h1>   
                </div>    
                <div
                className={prefix({val:'Img1'})}
                ></div>       
                <p 
                className={prefix({val:'Text0'})}
                >
                <h3>
                    www.bangladeshsocietyinc.com 
                </h3>
                your entry point to the Bengali culture. Explore restaurants, shops,tours, events and much more
                </p>
                <div
                className={prefix({val:'Item0'})}
                >
                    <div
                    className={prefix({val:'Img2'})}
                    ></div>
                    <div
                    className={prefix({val:'Img3'})}
                    ></div>         
                    <div
                    className={prefix({val:'Img4'})}
                    ></div>                                        
                </div>
                <div
                className={prefix({val:'Img5'})}
                ></div>                     
                
            </div>

        )
    }
}