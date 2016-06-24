import React from 'react';
import Tabs from 'antd/lib/tabs';
const TabPane = Tabs.TabPane;

class TabPanes extends React.Component{
	constructor(props){
		super(props);
	}

	static propTypes = {
		tabClick: React.PropTypes.func.isRequired,
		tabDel: React.PropTypes.func.isRequired,
		selectTab: React.PropTypes.string.isRequired,
		panes: React.PropTypes.array.isRequired
	}

	getPanes = () => {
		return this.props.panes.map((el, index) => {
			switch(el) {
				case '商户录入':
					return (<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}>商户录入</TabPane>);
				case '商户列表':
					return (<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}>商户列表</TabPane>);
				default:
					return (<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}>Home<input type="text" /></TabPane>);
			}
		});
	}

	onEdit = (targetKey, action) => {
		// 删除方法通过 onedit来调用，这是内部实现决定的
		(action === 'remove') && this.props.tabDel(targetKey);
		// this[action](targetKey);
	}

	render() {
		const {tabClick, selectTab} = this.props;
		let panes = this.getPanes();
		return (
			<Tabs 
				activeKey={selectTab || 'home'} 
				onTabClick={tabClick}
				onEdit={this.onEdit}
				type="editable-card"
				hideAdd>
			    	{panes}
			</Tabs>
		);
	}
}

export default TabPanes;