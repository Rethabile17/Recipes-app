import React  from "react";
import { useNavigate } from "react-router-dom";


function Home() {

const navigate = useNavigate();

const onButtonClick = () => {
    console.log();
    navigate('/Registration')
}

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

            <div>
              <input type="text" placeholder="Search" />
              <input className="inputButton" type="button" value="search" />
            </div>

            <div className="categories">
               
            <div className="item">
                <imag src={"https://tse1.mm.bing.net/th?id=OIP.MqnnmaRAaaY8jcQJZAVs1AHaE8&pid=Api&P=0&h=220"} alt=""/>
                <input className="inputButton" type="button" value="Breakfast"/>
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
            <div className="item4">
              <img src={"https://tse4.mm.bing.net/th?id=OIP.2BRS-ZmE2ayvjMuJ0gW4UAHaEo&pid=Api&P=0&h=220"} alt="" />
              <input className="inputButton" type="button" value="meals" />
            </div>
          
            <div>
                <input className="inputButton2" type="button" onClick={ onButtonClick }  value="Logout"/>
                </div>
                
            </div>
    </div>
)
}

export default Home;

