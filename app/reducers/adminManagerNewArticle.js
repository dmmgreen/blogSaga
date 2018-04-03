const initialState={
    title:'',
    content:'',
    tags:[],
    id:''
};

export const actionTypes={
    UPDATE_TITLE:'UPDATE_TITLE',
    UPDATE_CONTENT:'UPDATE_CONTENT',
    UPDATE_TAGS:'UPDATE_TAGS',
    SAVE_ARTICLE:'SAVE_ARTICLE',
    SET_ARTICLE_ID:'SET_ARTICLE_ID'
};


export const actions={
    update_title:function (title) {
        return {
            type:actionTypes.UPDATE_TITLE,
            title
        }
    },
    update_content:function (content) {
        return {
            type:actionTypes.UPDATE_CONTENT,
            content
        }
    },
    update_tags:function (tags) {
        return {
            type:actionTypes.UPDATE_TAGS,
            tags
        }
    },
    save_article:function (data) {
        return {
            type:actionTypes.SAVE_ARTICLE,
            data
        }
    }
};


export function reducer(state = initialState, action) {
    switch (action.type){
        case actionTypes.UPDATE_TITLE:
            return {
                ...state,title:action.title
            };
        case actionTypes.UPDATE_CONTENT:
            return {
                ...state,content:action.content
            };
        case actionTypes.UPDATE_TAGS:
            return {
                ...state,tags:action.tags
            };
        case actionTypes.SET_ARTICLE_ID:
            return {
                ...state,id:action.id
            };
        default:
            return state;
    }
}