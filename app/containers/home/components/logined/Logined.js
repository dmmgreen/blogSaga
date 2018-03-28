import React from 'react';
import {Button} from 'antd';
import style from './style.css';


export const Logined = (props) => (
    <div className={style.container}>
        <img src={require('./timg.jpeg')}/>
        <p>欢迎：{props.userInfo.username}</p>
        <p className={style.centerP}>光临我的博客~</p>
        {props.userInfo.userType === 'admin' ?
            <Button onClick={() => props.history.push('/admin')} type="primary">点击进入管理页面</Button> : null}
    </div>
);