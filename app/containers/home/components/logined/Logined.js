import React,{Component} from 'react';
import {Button} from 'antd';
import style from './style.css';

export default class Logined extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={style.container}>
                <img src={require('./timg.jpeg')}/>
                <p>欢迎：{this.props.userInfo.username}</p>
                <p className={style.centerP}>光临我的博客~</p>
                {this.props.userInfo.userType === 'admin' ?
                    <Button onClick={() => this.props.history.push('/admin')} type="primary">点击进入管理页面</Button> : null}
            </div>
        )
    }
};