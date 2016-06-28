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
    render() {
        return (
        	<div className="setting-w">
        		<div className="setting-item setting-w--shop-type">
        			<h3>设置店铺类型</h3>
        			<div className="add-input-w">
        				<Input placeholder="请输入内容"/>
        				<Button type="primary" >添加</Button>
        			</div>
        			<div className="add-content-w">
        				<div className="item">
        					<span>春熙路</span>
        					<ButtonGroup>
        						<Button icon="delete" size="small"></Button>
        						<Popover content={content('春熙路')}  trigger="click">
							      	<Button icon="edit"  size="small"></Button>
							    </Popover>
        					</ButtonGroup>
        				</div>
        			</div>
        		</div>
        		<div className="setting-item setting-w--trading-area">
        			<h3>设置商圈</h3>
        			<div className="add-input-w">
        				<Input placeholder="请输入内容"/>
        				<Button type="primary" >添加</Button>
        			</div>
        			<div className="add-content-w"></div>
        		</div>
        	</div>
        );
    }
}

export default Setting;
