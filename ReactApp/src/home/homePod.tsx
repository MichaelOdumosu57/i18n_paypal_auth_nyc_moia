import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix,classPrefix } from '../customExports'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';
import PageOne from './pageOne'
import PageTwo from './pageTwo'
import html2canvas from 'html2canvas';
import { debug } from 'console';

type Props = {
    addImage:Function,
    changeRoute:Function,
    history:any,
    oktaAuth:any
}
let prefix = classPrefix({view:"Home"})

export default class HomePod extends Component<Props>{
    constructor(props: any) {
        super(props);        
        this.checkout.onClick = this.checkout.onClick.bind(this) 

    }

    checkout = {
        onClick:()=>{
            let target = document.querySelector(".a_p_p_HomePod2");

            
            html2canvas(
                (target as HTMLElement),
                {
                    logging:true,
                    backgroundColor:"#1a2632",
                    // height:1000,


                }
            )    
            .then((canvas)=>{
                console.log(canvas)
                var imgWidth = 205;
                // var imgHeight = canvas.height * imgWidth / canvas.width ;
                // imgHeight += 60;
                var imgHeight = 285.1243455497382;
                const contentDataURL = canvas.toDataURL('image/png')

                
                var x = 2;
                var y = 2;
                (this.props as any).addImage(
                    contentDataURL, 'PNG', x, y, imgWidth, imgHeight
                );
                
                // pdf.save('brochure.pdf');    
                // (this.props as any).changeRoute({route:"/checkout"});            
            });        
            
        }
    }

    logOut = {
        onClick : ()=>{
            this.props.oktaAuth.tokenManager.clear();
            this.props.history.push("/")
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
                    onClick={this.logOut.onClick}
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