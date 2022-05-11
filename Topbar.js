import React from 'react';
import GoogleBtn from '../function/LoginBtn';
import styled from 'styled-components'

const TopbarStyle = styled.div`
    .Topbar_main_ul_1, .Topbar_main_ul_2{
        display: flex;
        flex-direction: column;
    }
    .Topbar_main_ul_1 > li, .Topbar_main_ul_2 > li{
        max-height: 0;
        overflow: hidden;
    }
    ul{
        list-style: none;
    }
    .Topbar_main_div_1{
        display: flex;
    }
`
const Topbar = () => {

    const hoverTitle = window.onload = function(n){
        console.log(n, document.getElementsByClassName(`li_${n}`).length)
        for(let i = 0; i < document.getElementsByClassName(`li_${n}`).length; i++){
            console.log(i)
            document.getElementsByClassName(`li_${n}`)[i].style.maxHeight = "100%";
        }
    }

    const outTitle = window.onload = function(n){
        console.log(n, document.getElementsByClassName(`li_${n}`).length)
        for(let i = 0; i < document.getElementsByClassName(`li_${n}`).length; i++){
            console.log(i)
            document.getElementsByClassName(`li_${n}`)[i].style.maxHeight = "0%";
        }
    }


    return (
        <TopbarStyle>
            <div className="Topbar_main_div_1">
            <GoogleBtn />
                <ul className="Topbar_main_ul_1">
                    <p className="Topbar_main_ul_1_title" onMouseOver={hoverTitle(1)} onMouseOut={outTitle(1)}>식자재관리</p>
                    <li className="li_1">육류</li>
                    <li className="li_1">채소류</li>
                    <li className="li_1">해산물류</li>
                </ul>
                <ul  className="Topbar_main_ul_2">
                    식자재발주
                    <li className="li_2">육류</li>
                    <li className="li_2">채소류</li>
                    <li className="li_2">해산물류</li>
                </ul>
            </div>
        </TopbarStyle>
    );
};

export default Topbar;