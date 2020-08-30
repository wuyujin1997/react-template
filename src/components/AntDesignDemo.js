import React from 'react';

// 引入Antd组件
import {
    DatePicker,
    Button,
    version,
    Divider,
} from 'antd';

// 引入Antd图标库
import { DesktopOutlined } from '@ant-design/icons';

// 引入Antd样式文件
// import 'antd/dist/antd.css';

class AntDesignDemo extends React.Component {
    render() {
        return (
            <div>
                <h1>antd 版本： {version}</h1>
                <Button type="primary">按钮</Button> <Divider type="vertical" />
                <Button><DesktopOutlined />图标测试</Button> <Divider type="vertical" />
                <DatePicker /> <Divider type="vertical" />
            </div>
        );
    }
}

export default AntDesignDemo;