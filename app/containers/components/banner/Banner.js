import React,{Component} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import style from './style.css';
import {Carousel} from 'antd';
const carsouelImgs=[
    require('./banner_1.png'),
    require('./banner_2.png'),
    require('./banner_3.png')
];


export default class Banner extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    renderCarousel(imgs){
        return imgs.map((item,index)=>(
            <div key={index} className={style.carouselImgContainer}>
                <div className={style.pic} style={{backgroundImage: 'url(' + item + ')'}} alt={index}/>
            </div>
        ))
    }
    render(){
        return (
            <Carousel>
                {this.renderCarousel(carsouelImgs)}
            </Carousel>
        )
    }
}