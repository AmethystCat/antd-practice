import React from 'react'; 

import 'antd/dist/antd.css';
import '../style/style.less';

import { Menu, Icon } from 'antd';
import BrowserDemo from './BrowserDemo.jsx';
import TabPanes from '../tabs/main.jsx';

class Frame extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
             <BrowserDemo>
                <div className="ant-layout-topaside">
                    <div className="ant-layout-header">
                        <div className="ant-layout-wrapper">
                            <div className="ant-layout-logo"></div>
                            <Menu theme="dark" mode="horizontal"
                                  defaultSelectedKeys={['2']} style={{lineHeight: '64px'}}>
                                <Menu.Item key="1">导航一</Menu.Item>
                                <Menu.Item key="2">导航二</Menu.Item>
                                <Menu.Item key="3">导航三</Menu.Item>
                            </Menu>
                        </div>
                    </div>
                    <div className="ant-layout-wrapper">
                        <div className="ant-layout-container">
                            <aside className="ant-layout-sider">
                                <Menu mode="inline">
                                    <Menu.Item key="1">
                                        <Icon type="mail" />商户录入
                                    </Menu.Item>            
                                    <Menu.Item key="2">
                                        <Icon type="setting" />商户列表
                                    </Menu.Item>            
                                </Menu>
                            </aside>
                            <div className="ant-layout-content">
                                <div style={{ height: 240 }}>
                                    <div style={{clear: 'both'}}>
                                        <TabPanes />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ant-layout-footer">
                            homer
                        </div>
                    </div>
                </div>
            </BrowserDemo>
        );
    }
}

export default Frame;