import {combineReducers} from 'redux';
import {reducer as tags} from './adminManagerTags';


const initialState={
    url:'/'
};

export function reducer(state = initialState, action) {
    switch(action.type){
        default:
            return state;
    }
}

const admin=combineReducers({
    tags
});

export default admin;