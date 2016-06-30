import React from 'react';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Popover from 'antd/lib/popover';

const ButtonGroup = Button.Group;

const content = (text='') => {
	return	(
			<div className="pop-edit">
	    		<Input size="small" defaultValue={text} />
	    			<Button type="primary" size="small">确定</Button>
	    			<Button type="defalut" size="small">取消</Button>
			</div>
		);
};

class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Setting';
    }
 
	state = {
		cbd: [],
		shopType: []
	}

	addCbd = () => {
		let cbd = document.getElementById('cbd-input');
		console.log(cbd.value);
		server.api_cbd_create({
			title: cbd.value
		}, (res) => {
			if (res.code === 0) {
				this.setState({
					cbd: res.data || []
				});
			}
		});
	}

	addShopType = () => {
		let type = document.getElementById('shopType-input');
		console.log(type.value);
		server.api_shop_type_create({
			title: type.value
		}, (res) => {
			if (res.code === 0) {
				this.setState({
					shopType: res.data || []
				});
			}
		});
	}

    render() {
        return (
        	<div className="setting-w">
        		<div className="setting-item setting-w--shop-type">
        			<h3>设置店铺类型</h3>
        			<div className="add-input-w">
        				<Input placeholder="请输入内容" id="shopType-input"/>
        				<Button type="primary" onClick={this.addShopType}>添加</Button>
        			</div>
        			<div className="add-content-w">
						{this.state.shopType.map((el, index) => {
							return (
								<div className="item" key={index}>
									<span>{el.title}</span>
									<ButtonGroup>
										<Button icon="delete" size="small"></Button>
										<Popover content={content(el.title)}  trigger="click">
											<Button icon="edit"  size="small"></Button>
										</Popover>
									</ButtonGroup>
								</div>
							);
						})}
        			</div>
        		</div>
        		<div className="setting-item setting-w--trading-area">
        			<h3>设置商圈</h3>
        			<div className="add-input-w">
        				<Input placeholder="请输入内容" id="cbd-input"/>
        				<Button type="primary" onClick={this.addCbd}>添加</Button>
        			</div>
        			<div className="add-content-w">
						{this.state.cbd.map((el, index) => {
							return (
								<div className="item" key={index}>
									<span>{el.title}</span>
									<ButtonGroup>
										<Button icon="delete" size="small"></Button>
										<Popover content={content(el.title)}  trigger="click">
											<Button icon="edit"  size="small"></Button>
										</Popover>
									</ButtonGroup>
								</div>
							);
						})}
					</div>
        		</div>
        	</div>
        );
    }
}

export default Setting;
