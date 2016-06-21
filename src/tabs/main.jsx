import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class TabPanes extends React.Component{
	constructor(props){
		super(props);
	}
	render() {
		return (
			<Tabs defaultActiveKey="1">
			    <TabPane tab="Home" key="1">选项卡一</TabPane>
			    <TabPane tab="商户录入" key="2">选项卡二</TabPane>
			    <TabPane tab="商户列表" key="3">选项卡三</TabPane>
			</Tabs>
		);
	}
}

export default TabPanes;