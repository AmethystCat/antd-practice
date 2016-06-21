import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class TabPanes extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			tabPanes : [
				<TabPane tab={<span id="home-tab">Home</span>} key="0">选项卡一</TabPane>
			]
		};
	}

	render() {
		return (
			<Tabs 
				activeKey={this.props.selectKey || '0'} 
				onTabClick={this.props.tabClick} 
				type="editable-card"
				hideAdd>
			    	{this.state.tabPanes}
			</Tabs>
		);
	}
}

export default TabPanes;