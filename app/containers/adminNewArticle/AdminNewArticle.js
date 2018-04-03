import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Switch,Route,Redirect} from 'react-router-dom';
import style from './style.css';
import remark from 'remark';
import reactRenderer from 'remark-react';
import {Input,Select,Button,Modal} from 'antd';
import dateFormat from 'dateformat';
import {actions} from '../../reducers/adminManagerNewArticle';
import {actions as tagActions} from '../../reducers/adminManagerTags';

const {get_all_tags}=tagActions;
const {update_title,update_content,update_tags,save_article}=actions;
const Option=Select.Option;


class AdminNewArticle extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate=PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            options:[],
            modalVisible:false
        }
    }
    componentDidMount(){
        this.props.get_all_tags();
    }
    onChanges(e){
        this.props.update_content(e.target.value);
    }
    titleOnChange(e){
        this.props.update_title(e.target.value);
    }
    selectTags(value){
        this.props.update_tags(value);
    }
    preView(){
        this.setState({
            modalVisible:true
        });
    }
    publishArticle(){
        let articleData={};
        articleData.title=this.props.title;
        articleData.content=this.props.content;
        articleData.tags=this.props.tags;
        articleData.time=dateFormat(new Date(),'yyyy-mm-dd HH:MM:ss');
        articleData.isPublish=true;
        this.props.save_article(articleData);
    }
    //保存
    saveArticle() {
        let articleData = {};
        articleData.title = this.props.title;
        articleData.content = this.props.content;
        articleData.tags = this.props.tags;
        articleData.time = dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
        articleData.isPublish = false;
        this.props.save_article(articleData);
    };
    handleOk(){
        this.setState({
            modalVisible:false
        })
    }
    render(){
        return (
            <div>
                <h2>发文</h2>
                <div className={style.container}>
                    <span className={style.subTitle}>标题</span>
                    <Input
                        className={style.titleInput}
                        placeholder={'请输入文章标题'}
                        type='text'
                        value={this.props.title}
                        onChange={(e)=>this.titleOnChange(e)}/>
                    <span className={style.subTitle}>正文</span>
                    <textarea
                        className={style.textArea}
                        value={this.props.content}
                        onChange={e=>this.onChanges(e)}/>
                    <span className={style.subTitle}>分类</span>
                    <Select
                        mode="multiple"
                        className={style.titleInput}
                        placeholder="请选择分类"
                        onChange={e=>this.selectTags(e)}
                        value={this.props.tags}
                    >
                        {
                            this.props.tagsBase.map((item) => (
                                <Option key={item}>{item}</Option>
                            ))
                        }
                    </Select>
                    <div className={style.bottomContainer}>
                        <Button type="primary" onClick={e=>this.publishArticle(e)}
                                className={style.buttonStyle}>发布</Button>
                        <Button type="primary" onClick={e=>this.saveArticle(e)}
                                className={style.buttonStyle}>保存</Button>
                        <Button type="primary" onClick={e=>this.preView(e)}
                                className={style.buttonStyle}>预览</Button>
                    </div>
                </div>
                <Modal
                    visible={this.state.modalVisible}
                    title="文章预览"
                    onOk={this.handleOk.bind(this)}
                    width={'900px'}
                    onCancel={this.handleOk.bind(this)}
                    footer={null}
                >
                    <div className={style.modalContainer}>
                        <div id='preview' className={style.testCode}>
                            {remark().use(reactRenderer).processSync(this.props.content).contents}
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}


AdminNewArticle.propTypes={
    title:PropTypes.string,
    content:PropTypes.string,
    tags:PropTypes.array,
    tagsBase:PropTypes.array
};

AdminNewArticle.defaultProps={
    title:'',
    content:'',
    tags:[],
    tagsBase:[]
};

function mapStateToProps(state) {
    const {title,content,tags}=state.admin.newArticle;
    let tempArr=state.admin.tags;
    for(let i=0;i<tempArr.length;i++){
        if(tempArr[i]==='首页'){
            tempArr.splice(i,1);
        }
    }
    return {
        title,
        content,
        tags,
        tagsBase: tempArr
    }
}

function mapDispatchToProps(dispatch) {
    return {
        update_tags: bindActionCreators(update_tags, dispatch),
        update_title: bindActionCreators(update_title, dispatch),
        update_content: bindActionCreators(update_content, dispatch),
        get_all_tags: bindActionCreators(get_all_tags, dispatch),
        save_article: bindActionCreators(save_article, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminNewArticle)