import React from 'react'
import {NavLink} from "react-router-dom";
import './Header.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


function Header() {

    return (
        <div className={"popUpMenuContainer"}>
            <div className={"popUpMenuContent"}>
                <NavLink className={({isActive}) => {
                    return isActive ? "act-link" : "def-link";
                }} to={'/pre-junior'}>Pre-Junior</NavLink>
                <NavLink className={({isActive}) => {
                    return isActive ? "act-link" : "def-link";
                }} to={'/junior'}>Junior</NavLink>
                <NavLink className={({isActive}) => {
                    return isActive ? "act-link" : "def-link";
                }} to={'/junior_plus'}>Junior+</NavLink>
            </div>
            <SuperButton className="popUpMenu">Homeworks levels</SuperButton>
        </div>
    )
}

export default Header

