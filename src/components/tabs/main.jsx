import React from 'react';
import Tabs from 'antd/lib/tabs';
import * as consts from '../const/main';
import Inputs from '../../pages/input_info/entry.jsx';
import Setting from '../../pages/setting/entry.jsx';
import SalesManagement from '../../pages/sales_management/entry.jsx';
import ListVerify from '../../pages/list_view/verify.jsx';
import ListVerified from '../../pages/list_view/verified.jsx';
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
		let c = consts.default; // {SETTING: xxx, ....}
		return this.props.panes.map((el, index) => {
			switch(el) {
				case c.MODIFY:
					return (<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}><Inputs /></TabPane>);
				case c.SETTING:
					return (<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}><Setting /></TabPane>);
				case c.SALES_MANAGEMENT:
					return (<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}><SalesManagement /></TabPane>);
				case c.VERIFY_LIST:
					return (<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}><ListVerify /></TabPane>);
				case c.VERIFIED_LIST:
					return (<TabPane tab={<span id={'tab-' + index}>{el}</span>} key={el}><ListVerified /></TabPane>);
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