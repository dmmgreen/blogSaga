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
    handleClick = (e) => {
        if(e.key === '首页'){
            this.props.getArticleList('');
        }else{
            this.props.getArticleList(e.key);
        }
        let toPath=e.key === '首页' ? '/':'/'+e.key;
        this.setState({
            current:e.key
        });
        this.props.history.push(toPath);
    };
    componentDidMount(){
        this.setState({
            current:this.props.history.location.pathname.replace('\/','') || '首页'
        });
    }
    render(){
        return (
            <Menu
                selectedKeys={[this.state.current]}
                mode="horizontal"
                className={style.MenuContainer}
                onClick={this.handleClick}
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