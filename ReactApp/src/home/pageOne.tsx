import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import React, { Component } from "react";
import logo from './logo.svg';
import '../App.scss';
import { mediaPrefix,classPrefix } from '../customExports'
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

let prefix = classPrefix({view:"HomePod2Page1"})

export default class PageOne extends Component{
    constructor(props:any){
        super(props)
    }

    

    render (){
        let r = document.querySelector(':root');
        let rs = getComputedStyle((r as unknown as HTMLElement));
        let color0 = rs.getPropertyValue("--color0")
        return(
            <div
            className={prefix({val:''})}
            >
                <div
                className={prefix({val:'Sect0'})}
                >
                    <div
                    className={prefix({val:'Sect0Img0'})}
                    ></div>
                    <h3>Explore the History of Pohela Boishakh</h3>
                    <p
                    >
                    Bengali New Year, also known as 'Shubho Nabo Barsho' or 'Pohela Boishakh' 
                    is the first day in the Bengali calendar.
                    Poila means ‘first’ and Boishakh is the first month of the Bengali calendar                        
                    </p>
                    <div
                    className={prefix({val:'Sect0Img1'})}
                    ></div>
                    <p
                    className={prefix({val:'Sect0Text0'})}
                    >
                    Mughal Emperor Akbar introduced the Bengali calendar in 1556 (Gregorian calendar) 
                    to make the collection of land tax easier in 'Subah Bangla', 
                    much of which is now in Bangladesh.
                    </p>
                    <p
                    >
                    As it is based on a solar calendar it occurs on April 14th in the Gregorian calendar each year.
                    It is a public holiday in Bangladesh , it is a public holiday in several states and may be celebrated by Bengali communities elsewhere in India.
                    </p>
                    <div
                    className={prefix({val:'Sect0Img2'})}
                    ></div>   
                    <p
                    className={prefix({val:'Sect0Text1'})}
                    >
                    It is celebrated at the time as many other new years in the region. 
                    It is marked by the sun moving from Pieces to Aries. This is an ancient 
                    festival and when it was first observed, the movement of the sun into Aries
                    would have been closer to the Vernal Equinox which marks the arrival of spring 
                    in the northern hemisphere. The dates of these events differ today due to
                    the wobble of the earth on its axis over a 25,000 cycle - known as procession.                        
                    </p>                 
                </div>  

                <div
                className={prefix({val:'Sect1'})}
                >
                    <div
                    className={prefix({val:'Sect1Img0'})}
                    ></div>   
                    <h3>Explore the Culture of Pohela Boishakh</h3>    
                    <p
                    
                    >
                    Pahela Baishakh now is a universal phenomenon among Bangalis. 
                    The first day of the Bangla calendar
                    is celebrated in big cities with much fanfare, music and a 
                    feast of various local cuisines, and with high hopes that the Bangla 
                    new year will bring prosperity and happiness for all.     
                    </p>          
                    <p
                    className={prefix({val:'Sect1Text0'})}
                    >
                    The TSC area of Dhaka University vibrates with music and 
                    thousands of men and women, mostly young, hanging around 
                    in groups wearing colorful dresses. Women prefer green 
                    saris with red lining, and men green and red Punjabis, 
                    reflecting the colors of Bangladesh’s national flag.
                    </p>        
                    <div
                    className={prefix({val:'Sect1Img1'})}
                    ></div>  
                    <div
                    className={prefix({val:'Sect1Img2'})}
                    ></div>          
                    <p
                    className={prefix({val:'Sect1Text1'})}
                    >
                    The alpona is more significant now and Bangladesh has even made a record for having the world’s 
                    largest alpona on Pohela Boishakh. This occasion is simply a harmonious collaboration of 
                    Hindu and Muslim culture which together gives Bengali their identity.
                    </p>                                                    
                </div>  

                <div
                className={prefix({val:'Sect2'})}
                >
                    <div
                    className={prefix({val:'Sect2Img0'})}
                    ></div>  
                    <h3>Famous Dishes of Pohela Boishakh </h3>   
                    <p
                    className={prefix({val:'Sect2Text0'})}
                    >
                    Traditionally, panta, leftover rice soaked in water and Ilish bhaaja 
                    a.k.a fried Hilsha with different kinds of bhorta is the food of choice 
                    to mark the Noboborsho festivities in Bangladesh.  A hint of salt, 
                    lime and chili and most Bengalis will start salivating over this rice.                        
                    </p>
                    <div
                    className={prefix({val:'Sect2Img1'})}
                    ></div>  
                    <div
                    className={prefix({val:'Sect2Img2'})}
                    ></div>                               
                    <p
                    className={prefix({val:'Sect2Text1'})}
                    >
                        Bhortas, the ultimate comfort food of Bangladesh is a must with panta bhaat.  Bhortas are delicious, smooth, fiery and flavorful mashed goodies made with variety of vegetables, dried fish mixed with mustard oil, onion, garlic and red chili.    
                    </p>        
                    <p
                    className={prefix({val:'Sect2Text2'})}
                    >
                    Lobongo Lotika, a traditional Bengali stuffed sweet small parcel which is secured by a lobongo or cloves, and hugged by thick sugar syrup. Lobongo (clove) is the star ingredient here as it keeps the parcel in place.                        
                    </p>        
                    <div
                    className={prefix({val:'Sect2Img3'})}
                    ></div>                               
                </div>                                                                        
            </div>            
        )
    }
}