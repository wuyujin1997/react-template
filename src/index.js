import React from 'react';
import ReactDOM from 'react-dom';

// 为避免每编写一个组件都要引入antd的样式文件，在入口处引入一次即可。
import 'antd/dist/antd.css';

import AntDesignDemo from './components/AntDesignDemo';
import ResourceImportDemo from './components/ResourceImportDemo';


var element = ( <AntDesignDemo />);
// var element = ( <ResourceImportDemo /> );

const container = document.getElementById('root');
ReactDOM.render(element, container);