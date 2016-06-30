import React from 'react'; 
import 'antd/dist/antd.css';
import '../style/style.less';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Header from './header.jsx';
import Footer from './footer.jsx';
import TabPanes from '../components/tabs/main.jsx';

import * as consts from '../components/const/main';
//import InputPanel from '../pages/input_info/input-shop-panel.jsx';

class Frame extends React.Component {
    constructor(props, context){
        super(props, context);
    }

    static propTypes = {
        menuTab: React.PropTypes.object.isRequired,
        menuChange: React.PropTypes.func.isRequired,
        tabAdd: React.PropTypes.func.isRequired
    }

    handClick = (e) => {
        this.props.tabAdd({
            selectMenu: e.key,
            selectTab: e.key,
            key: e.key
        });
    }

    tabClick = (e) => {
        this.handClick({key: e});
    }

    tabDel = (targetKey) => {
        this.props.tabRemove({
            key: targetKey
        });
    }

    render() {
        const {menuTab} = this.props;
        const c = consts.default;
        return (
             <div className="container">
                <div className="ant-layout-topaside">
                    <Header/>
                    <div className="ant-layout-wrapper">
                        <div className="ant-layout-container">
                            <aside className="ant-layout-sider">
                                <Menu mode="inline" onClick={this.handClick} selectedKeys={[menuTab.tabState.selectMenu]}>
                                    <Menu.Item key={c.SETTING}>
                                        <Icon type="setting" />{c.SETTING}
                                    </Menu.Item>            
                                    <Menu.Item key={c.SALES_MANAGEMENT}>
                                        <Icon type="team" />{c.SALES_MANAGEMENT}
                                    </Menu.Item>
                                    <Menu.Item key={c.VERIFY_LIST}>
                                        <Icon type="exception" />{c.VERIFY_LIST}
                                    </Menu.Item>            
                                    <Menu.Item key={c.VERIFIED_LIST}>
                                        <Icon type="book" />{c.VERIFIED_LIST}
                                    </Menu.Item>             
                                </Menu>
                            </aside>
                            <div className="ant-layout-content">
                                <div style={{ minHeight: 240 }}>
                                    <div style={{clear: 'both'}}>
                                        <TabPanes 
                                            tabClick={this.tabClick}
                                            tabDel={this.tabDel}
                                            selectTab={menuTab.tabState.selectTab}
                                            panes={menuTab.tabState.tabs}
                                        />
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