import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {AppContainer} from 'react-hot-loader';
import configureStore from './configureStore';
import IndexApp from './containers';

const div=document.createElement('div');
div.setAttribute('id','root');
document.body.appendChild(div);

const store=configureStore();
render(
   <AppContainer>
       <Provider store={store}>
           <IndexApp/>
       </Provider>
   </AppContainer>,
    div
);

if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept();
}