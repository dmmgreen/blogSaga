import React,{Component} from 'react';
import {Menu} from 'antd';
import style from './style.css';

export default class Menus extends Component{
    constructor(props){
        super(props);
        this.state={
            current:this.props.categories[0]
        }
    }
    render(){
        return (
            <Menu
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className={style.MenuContainer}
            >
                {
                    this.props.categories.map((item,index)=>(
                        <Menu.Item key={item}>
                            {item}
                        </Menu.Item>
                    ))
                }
            </Menu>
        )
    }
}