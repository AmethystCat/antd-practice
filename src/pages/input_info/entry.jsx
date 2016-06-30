import  React from 'react';
import  Button from 'antd/lib/button';
import  Form from 'antd/lib/form';
import  Input from 'antd/lib/input';
import  Select from 'antd/lib/select';
import  Radio  from 'antd/lib/radio';
import  DatePicker   from 'antd/lib/date-picker';
import  Cascader from 'antd/lib/cascader';
import  Shops from './add-shops.jsx';
import InputPanel from './input-shop-panel.jsx';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const options = [
{
  value: 'zhejiang',
  label: '浙江',
  children: [{
    value: 'hangzhou',
    label: '杭州',
    children: [{
      value: 'xihu',
      label: '西湖'
    }]
  }]
}, 
{
  value: 'jiangsu',
  label: '江苏',
  children: [{
    value: 'nanjing',
    label: '南京',
    children: [{
      value: 'zhonghuamen',
      label: '中华门'
    }]
  }]
}];

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Inputs';
    }

	state = {
		isNormalUser: true,
		banks : [],
		showInputPanel: false
	}

	componentDidMount() {
		server.web_bank_list({}, (res) => {
			if (res.code === 0) {
				this.setState({
					banks: res.data
				});
			}
		});
	}

	onStateChange = (e) => {
		console.log(e.target.value);
	}

	onUserChange = (e) => {
		console.log(e.target.value);
		let val = e.target.value;
		if (val == 2) {
			this.setState({
				isNormalUser: false
			});
		} else {
			this.setState({
				isNormalUser: true
			});
		}
	}

	showInputPanel = () => {
		this.setState({
			showInputPanel: true
		});
	}

    handleSelectChange = (value) => {
	  	console.log(`selected ${value}`);
	}

	onDateChange = (value, dateString) => {
		console.log(value, dateString);
	}

	onCascaderChange = (value) => {
		console.log(value);
	}

    render() {
    	const formItemLayout = {
    		labelCol: { span: 2 },
			wrapperCol: { span: 18 },
			hasFeedback: true
    	};
        return (
        	<div className="input-w">
        		<Form horizontal>
        			<div className="commercial-w">
					    <FormItem
					    	prefixCls="ant-form"
					      	id="control-input"
					      	label="商户名称"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="control-input" placeholder="请输入商户名称" />
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="负责人"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="control-input" placeholder="请输入负责人" />
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="手机号"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="control-input" placeholder="请输入手机号" />
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="简称"
					      	{...formItemLayout}
					    >
					     	<Input id="control-input" placeholder="请输入商户简称" /> (选填)
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="地址"
					      	{...formItemLayout}
					    >
					     	<Input id="control-input" placeholder="请输入商户地址" /> (选填)
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="邮箱"
					      	{...formItemLayout}
					    >
					     	<Input id="control-input" placeholder="请输入商户邮箱" /> (选填)
					    </FormItem>
					    <FormItem
					      	id="control-textarea"
					      	label="备注"
					      	{...formItemLayout}
					    >
					      	<Input type="textarea" id="control-textarea" rows="3" placeholder="添加备注（工作日志）" /> <span style={{verticalAlign: 'top', display: 'inline-block'}}>(选填)</span>
					    </FormItem>
					    <FormItem
					      	label="拜访状态"
					      	{...formItemLayout}
					    >
					      	<RadioGroup defaultValue="1" onChange={this.onStateChange}>
					        	<Radio value="1">洽谈中</Radio>
					        	<Radio value="5">已签约</Radio>
					        	<Radio value="2">暂缓</Radio>
					        	<Radio value="3">拒绝合作</Radio>
					      	</RadioGroup>
					    </FormItem>
					    <FormItem
					      	label="签约时间"
					      	{...formItemLayout}
					      	required
					    >
					      	<DatePicker onChange={this.onDateChange} />
					    </FormItem>
					     <FormItem
					      	label="商户类型"
					      	{...formItemLayout}
					    >
					      	<RadioGroup defaultValue="1" onChange={this.onUserChange}>
					        	<Radio value="1">普通用户</Radio>
					        	<Radio value="2">预付款用户</Radio>
					      	</RadioGroup>
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="保证金"
					      	{...formItemLayout}
					    >
					     	<Input id="control-input" placeholder="请输入保证金金额" /> 元
					    </FormItem>
					    <FormItem
					      	id="control-input"
							prefixCls={this.state.isNormalUser ? 'hide ant-form' : 'ant-form'}
					      	label="预付款"
					      	{...formItemLayout}

					    >
					    	0元 
					    	<div className="btn-w--chongzhi">
					    		<Button type="primary" size="small">充值</Button>
					    	</div>
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="预警金额"
					      	{...formItemLayout}
							prefixCls={this.state.isNormalUser ? 'hide ant-form' : 'ant-form'}

					    >
					     	<Input id="control-input" placeholder="请输入预警金额" /> 元
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="结算方式"
					      	{...formItemLayout}
					      	required
					    >
					     	T + <div className="way-w"><Input id="control-input" placeholder="0-99" /></div> 
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="账号(卡号)"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="control-input" placeholder="请输入账号(卡号)" />
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="户名(姓名)"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="control-input" placeholder="请输入户名(姓名)" />
					    </FormItem>
					    <FormItem
					      	id="select"
					      	label="所属银行"
					      	{...formItemLayout}
					      	required
					    >
						    <Select id="select" size="large" placeholder="请选择所属银行"  style={{ width: 200 }} onChange={this.handleSelectChange}>
								{this.state.banks.map((el, index) => {
									return <Option key={'bank' + index} value={el.code}>{el.name}</Option>;
								})}
						    </Select>
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="开户行"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="control-input" placeholder="请输入开户行" />
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="归属地"
					      	{...formItemLayout}
					      	required
					    >
					     	<Cascader options={options} onChange={this.onChange} placeholder="请选择地区" />
					    </FormItem>
					    
        			</div>
        			<Shops />
        			<InputPanel show={this.state.showInputPanel}/>
        			<div className="btn-w--submit">
				    	<Button type="primary" size="default">保存</Button>
				    	<Button type="primary" size="default">提交审核</Button>
				    </div>
        		</Form>
        	</div>
        );
    }
}

export default Inputs;
