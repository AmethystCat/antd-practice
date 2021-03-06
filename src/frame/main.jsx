import React from 'react'; 

import 'antd/dist/antd.css';
import '../style/style.less';

import { Menu, Icon } from 'antd';
import Header from './header.jsx';
import Footer from './footer.jsx';
import TabPanes from '../tabs/main.jsx';

class Frame extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            selectKey : '0',
            selectMenu: '',
            tabPanesInfo: []
        };
    }

    handClick = (e) => {
        console.log(e);
        this.setState({
            selectKey: e.key,
            selectMenu: e.key
        });
    }

    tabClick = (e) => {
        console.log(e);
        this.handClick({key: e});
    }

    render() {
        return (
             <div className="container">
                <div className="ant-layout-topaside">
                    <Header/>
                    <div className="ant-layout-wrapper">
                        <div className="ant-layout-container">
                            <aside className="ant-layout-sider">
                                <Menu mode="inline" onClick={this.handClick} selectedKeys={[this.state.selectMenu]}>
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
                                        <TabPanes 
                                            tabClick={this.tabClick}
                                            selectKey={this.state.selectKey}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Frame;