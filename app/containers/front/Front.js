import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import style from './style.css';
import {
    Switch,
    Route
} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Menus from '../components/menu/Menus';
import Banner from '../components/banner/Banner';
import Home from '../home';
import {actions} from '../../reducers/adminManagerTags';
const {get_all_tags} =actions;
import {actions as FrontActions} from '../../reducers/frontReducer';
const {get_article_list} =FrontActions;

class Front extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.get_all_tags();
    }
    render(){
        const {url}=this.props.match;
        return(
            <div>
               <div>
                   <Menus getArticleList={(tag)=>this.props.get_article_list(tag,1)} categories={this.props.categories} history={this.props.history}/>
                   <Banner/>
               </div>
                <div className={style.container}>
                    <div className={style.contentContainer}>
                        <div className={style.content}>
                            <Switch>
                                <Route exact path={url} component={Home}/>
                                <Route path={`/:tag`} component={Home}/>
                            </Switch>
                        </div>
                        <div className={style.loginContainer}>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Front.defaultProps={
    categories:[]
};
Front.propTypes={
    categories:PropTypes.array.isRequired
};
function mapStateToProps(state) {
    return {
        categories:state.admin.tags
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get_all_tags:bindActionCreators(get_all_tags,dispatch),
        get_article_list:bindActionCreators(get_article_list,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Front);