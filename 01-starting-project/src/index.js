import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import store from './store/index'


// 불러온 store를 Provider의 store props에 설정
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
</Provider>);
