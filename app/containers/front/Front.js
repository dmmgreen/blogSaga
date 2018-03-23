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
import {actions} from '../../reducers/adminManagerTags';
const {get_all_tags} =actions;

class Front extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.get_all_tags();
    }
    render(){
        return(
            <div>
               <div>
                   <Menus categories={this.props.categories}/>
                   <Banner/>
               </div>
                <div className={style.container}>
                    <div className={style.contentContainer}>
                        <div className={style.content}>

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
        get_all_tags:bindActionCreators(get_all_tags,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Front);