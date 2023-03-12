import React from "react";
import {useState} from "react";
import hi from "../img/1.png";
import mi from "../img/2.png";
import li from "../img/3.png";

const Section1 =()=>{
    const [modal,setModal]=useState(false)
    return(
        <div className="Section1">
            <div className="container">
                <div className="Section1-logo">
                    <center> <button className='btn' onClick={()=>setModal(!modal)} >Смотреть все объекты</button></center>
                    <div style={{
                        display:modal?'block':"none"
                    }}>
                        <div className="menu3">
                            <img src={hi} alt=""/>
                            <h3>ЖК «Atlantis Deluxe»</h3>
                            <h5>от 33 000 000 руб. <br/>от 1 500 000 руб. за м2</h5>
                            <p>Доходность</p>
                            <h4>65,25%</h4>
                            <p>Риски</p>
                            <h4>22 года</h4>
                            <p>сроки</p> <h4>29%</h4>
                            <button>подробнее</button>
                        </div>
                        <div className="menu4">
                            <img src={mi} alt=""/>
                            <h3>ЖК «Atlantis Deluxe»</h3>
                            <h5>от 33 000 000 руб. <br/>от 1 500 000 руб. за м2</h5>
                            <p>Доходность</p>
                            <h4>65,25%</h4>
                            <p>Риски</p>
                            <h4>22 года</h4>
                            <p>сроки</p> <h4>29%</h4>
                            <button>подробнее</button>
                        </div>
                        <div className="menu5">
                            <img src={li} alt=""/>
                            <h3>ЖК «Atlantis Deluxe»</h3>
                            <h5>от 33 000 000 руб. <br/>от 1 500 000 руб. за м2</h5>
                            <p>Доходность</p>
                            <h4>65,25%</h4>
                            <p>Риски</p>
                            <h4>22 года</h4>
                            <p>сроки</p> <h4>29%</h4>
                            <button>подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section1;