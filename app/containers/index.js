import React,{Component,PropTypes} from 'react';
import PureRenderMixiin from 'react-addons-pure-render-mixin';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './reset.css';
import Front from './front/Front';

class AppIndex extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate=PureRenderMixiin.shouldComponentUpdate.bind(this);
    }
    render(){
        return (
            <Router>
                <div>
                    <Switch>
                        <Route component={Front}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}


export default AppIndex;