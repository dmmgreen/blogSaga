import React,{Component,PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {notification} from 'antd';
import './reset.css';
import Front from './front/Front';
import Admin from './admin/Admin';
import {Loading} from './components/loading/Loading';
import NotFound from '../components/notFound/NotFound';
import {actions} from '../reducers';
const {clear_msg,user_auth}=actions;

class AppIndex extends Component{
    constructor(props){
        super(props);
        this.openNotification=this.openNotification.bind(this);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
        this.props.user_auth();
    }
    openNotification(type,message){
        let that=this;
        notification[type]({
            message:message,
            onClose:()=>{
                that.props.clear_msg();
            }
        });
        that.props.clear_msg();
    }
    render(){
        let {isFetching} =this.props;
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/404" component={NotFound}/>
                        <Route path="/admin" component={Admin}/>
                        <Route component={Front}/>
                    </Switch>
                    {isFetching && <Loading/>}
                    {
                        this.props.notification && this.props.notification.content ?
                            (this.props.notification.type === 1 ?
                                this.openNotification('success',this.props.notification.content):
                                this.openNotification('error',this.props.notification.content)):null
                    }
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        notification:state.globalState.msg,
        isFetching:state.globalState.isFetching,
        userInfo:state.globalState.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        clear_msg:bindActionCreators(clear_msg,dispatch),
        user_auth:bindActionCreators(user_auth,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppIndex);