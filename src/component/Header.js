import React from "react";
import hi from "../img/1.png"
import mi from "../img/2.png"
import li from "../img/3.png"
const Header = ()=>{
    return(
        <div id='header'>
<div className='container'>
    <div className='header-logo'>
<h1>Наши лучшие инвестиционные предложения </h1>
        <p>Мы отобрали, проверили и рассчитали прибыльность каждого объекта</p>
        <div className="menu">
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
        <div className="menu1">
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
        <div className="menu2">
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
    )
}
export default Header;