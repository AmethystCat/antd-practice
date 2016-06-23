import React from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

class TabPanes extends React.Component{
	constructor(props){
		super(props);
	}

	getPanes = () => {
		return this.props.panes.map((el, index) => {
			return (
				<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}>选项卡 {index}</TabPane>
			);
		});
	}

	render() {
		const {tabClick, selectTab} = this.props;
		console.log(this.props);
		let panes = this.getPanes();
		return (
			<Tabs 
				activeKey={selectTab || 'home'} 
				onTabClick={tabClick} 
				type="editable-card"
				hideAdd>
			    	{panes}
			</Tabs>
		);
	}
}

export default TabPanes;