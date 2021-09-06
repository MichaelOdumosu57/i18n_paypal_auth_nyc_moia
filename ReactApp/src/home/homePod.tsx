import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix,classPrefix } from '../customExports'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import PageOne from './pageOne'
import PageTwo from './pageTwo'

let prefix = classPrefix({view:"Home"})

export default class HomePod extends Component{
    constructor(props: any) {
        super(props);
    }

    checkout = {
        onClick:()=>{
            (this.props as any).changeRoute({route:"/checkout"})
        }
    }

    languages = {
        items:[
            "English","Spanish", "Chinese", "Russian", "French", "Bengali", "Korean", "Arabic", "Urdu", "Polish", "Haitian Creole"
        ].map((x,i)=>{
            return <button
            key={i}
            className={prefix({val:"Pod1Button"})}
            >{x}</button>
        })
    }

    brochure ={
        items:[
            {
                img0:{
                    src:"home0.PNG"
                }
            }
        ]
    }

    render (){
        let {checkout} = this
        return (
            <div
            className={"a_p_p_SpecificView " + prefix({val:"View"})}
            >
                <nav
                className={prefix({val:"Pod0"})}
                >


                    <button
                    className={prefix({val:"Pod0Button"})}
                    >Log Out</button>

                    <button
                    className={prefix({val:"Pod0Button"})}
                    onClick={this.checkout.onClick}
                    >Checkout
                    </button>                    

                </nav>
                <nav
                className={prefix({val:'Pod1'})}
                >
                    {/* {this.languages.items} */}
                </nav>
                <div
                className={prefix({val:'Pod2'})}
                >
                    <div
                    className={prefix({val:'Pod2Page0'})}
                    >
                        <div
                        className={prefix({val:'Pod2Page0Img0'})}
                        ></div>
                        <div
                        className={prefix({val:'Pod2Page0Item0'})}
                        >
                            <h1
                            className={prefix({val:'Pod2Page0Title0'})}
                            >Pohela</h1>
                            <h1
                            className={prefix({val:'Pod2Page0Title1'})}
                            >Boishakh</h1>   
                        </div>    
                        <div
                        className={prefix({val:'Pod2Page0Img1'})}
                        ></div>       
                        <div
                        className={prefix({val:'Pod2Page0Img2'})}
                        >
                            <h1
                            className={prefix({val:'Pod2Page0Title2'})}
                            >EXPLORE</h1>                        
                        </div>  
                        <h3
                        className={prefix({val:'Pod2Page0Text0'})}
                        >
                            www.bangladeshsocietyinc.com
                        </h3>                  
                    </div>

                    <PageOne />
                    <PageTwo />
                </div>


            </div>
        )
    }
}