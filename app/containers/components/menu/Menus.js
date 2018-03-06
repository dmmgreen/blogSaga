import React,{Component} from 'react';
import {Menu} from 'antd';
import style from './style.css';

export default class Menus extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Menu
                mode="horizontal"
                className={style.MenuContainer}
            >
            </Menu>
        )
    }
}