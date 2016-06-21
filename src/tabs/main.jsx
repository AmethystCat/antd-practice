import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class TabPanes extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		console.log(this.props.selectKey);
		return (
			<Tabs 
				activeKey={this.props.selectKey || '0'} 
				onTabClick={this.props.tabClick} 
				type="editable-card"
				hideAdd>
			    	<TabPane tab={<span id="home-tab">Home</span>} key="0">选项卡一</TabPane>
			    	<TabPane tab="商户录入" key="1">选项卡二</TabPane>
			    	<TabPane tab="商户列表" key="2">选项卡三</TabPane>
			</Tabs>
		);
	}
}

export default TabPanes;