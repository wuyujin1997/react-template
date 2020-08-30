import React from 'react';

// 引入CSS
import '../assets/css/index.css';

// 引入图片资源
import icon3 from '../assets/img/icon-3.png';
import icon48 from '../assets/img/icon-48.png';

export default class ResourceImportDemo extends React.Component {
    render() {
        return (
            <div>
                <h2>样式文件引入 图片资源引入测试</h2>
                <img src="https://img.alicdn.com/tfs/TB1qEwuzrj1gK0jSZFOXXc7GpXa-32-32.ico" alt="支付宝icon"/>
                <img src={icon3}/>
                <img src={icon48}/>
            </div>
        );
    }
}