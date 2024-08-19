import React ,{ useState } from "react";

import "./About.css"


function About() {
return (
    <div className="mainContainer">
        <div>
            <div className={"titleContainer"}>
                Welcome!
            </div>
            <div className="site">
                <div>Delicious food site</div>
                <h1>categories of meat</h1>
            </div>
            <div className="categories">
               
            <div className="item">
                <imag src={"https://tse1.mm.bing.net/th?id=OIP.MqnnmaRAaaY8jcQJZAVs1AHaE8&pid=Api&P=0&h=220"} alt=""/>
                <input className="inputButton" type="button"value="Breakfast"/>
            </div>
            <div className="item2">
            <imag  src={"https://tse4.mm.bing.net/th?id=OIP.tUQYQcOOKUiJmMyYYEfC7wAAAA&pid=Api&P=0&h=220"}/>
                <input className="inputButton" type="button" value="lunch"/>
            </div>
            <div className="item3">
            <imag  src={"https://tse2.mm.bing.net/th?id=OIP.BBBFktSIlFxr2ftuvB33rgHaE8&pid=Api&P=0&h=220"} alt="" />
                <input className="inputButton" type="button" value="Dinner"/>  
                </div> 
            </div>
                <input className="inputButton2" type="button" value="Logout"/>
            </div>
    </div>
)
}

export default About;