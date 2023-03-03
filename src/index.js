import React from "react";
import ReactDOM from "react-dom";
// App 컴포넌트를 가져오기위해 import
import App from './App.js';

// ReactDOM 라이브러리의 render 함수에 의해
// index.html의 태그들 중 id가 app인 요소에
// 해당 컴포넌트를 표시함
// render(컴포넌트, 표시위치)
ReactDOM.render(
    <React.StrictMode>
        <h1>Just React</h1>
    </React.StrictMode>,
    document.querySelector('#app')
);

ReactDOM.render(
    <React.StrictMode>
       <App />
    </React.StrictMode>,
    document.querySelector('#root')
);