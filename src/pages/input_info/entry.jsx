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
		banks : [],
		showInputPanel: false,
		shopInfo: null,
		shopOperate: 'create',
		merchantData: {
			name: 'test',
			nickname: '',
			address: '',
			manager: '', //负责人|required
			phone: '', //required
			status_desc: '', //required
			email: '',
			status: '1', // 商户状态
			audit_status: '', // 审核状态
			runtime_status: 0, // 是否上线
			sign_type: 0, //商户类型
			sign_time: '', // 签约时间
			settlement_type : null, // 结算方式
            amoun: null, // 预付款或者保证金
            alarm_amount: null, // 预警金额
            card: null, // 卡号
            card_bank: null, //开户行
            bank: null, // 银行
            account: null, //持卡人
            bank_location: null, // 归属地
            shops: []
		}
	}

	componentWillMount() {
	   
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
		let val = e.target.value,
			{merchantData} = this.state;
		let newState = {...merchantData, sign_type: val};
			this.setState({merchantData: newState});
	}

	showInputPanel = (bool, op, data) => {
		// showpanel and create shop
		this.setState({
			showInputPanel: bool,
			shopOperate: op,
			shopInfo: data
		});
	}

	hideInputPanel = (op, data) => {
		let {merchantData} = this.state;
		let arr = [];
		if (!data) {
			this.setState({
				showInputPanel: false
			});
		} else {
			if (op === 'update') {
				arr = merchantData.shops.map((el) => {
					if (el.id === data.id) {
						el = data;
						return el;
					}
					return el;
				});
				merchantData.shops = arr;
			} else if (op === 'create') {
				merchantData.shops.push(data);
			}

			this.setState({
				showInputPanel: false,
				merchantData: merchantData,
				shopOperate: op,
				shopInfo: ''
			});
		}
	}

	// showShopInfo = (bool, op, el) => {
	// 	this.setState({
	// 		shopInfo: el,
	// 		showInputPanel: bool,
	// 		shopOperate: op
	// 	});
	// };

	delShop = (id) => {
		console.log('删除店铺', id);
		let {merchantData} = this.state;
		let arr = merchantData.shops.filter((el) => {
			el.id !== id;
		});

		this.setState({
			merchantData: {...merchantData, shops: arr}
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

	onStatusChange = (e) => {
		let val = e.target.value,
			merchantData = this.state.merchantData;
		let newState = {...merchantData, status: val};
			this.setState({merchantData: newState});
	}

	submitHandle = (e) => {
		e.preventDefault();
		let formdata = this.props.form.getFieldsValue();
		console.log('收到表单值：', formdata);
		let s = {...this.state.merchantData, ...formdata};
		console.log('s:', s);
	}

	saveHandle = (e) => {
		e.preventDefault();
		let formdata = this.props.form.getFieldsValue();
		console.log('收到表单值：', formdata);
		let s = {...this.state.merchantData, ...formdata};
		console.log('s:', s);
	}

    render() {
    	const { getFieldProps } = this.props.form;
    	const { merchantData } = this.state;
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
					      	label="商户名称"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="name" {...getFieldProps('name', { initialValue: merchantData.name})} placeholder="请输入商户名称" />
					    </FormItem>

					    <FormItem
					      	label="负责人"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="manager" {...getFieldProps('manager', { initialValue: merchantData.manager})} placeholder="请输入负责人" />
					    </FormItem>

					    <FormItem
					      	label="手机号"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="phone" {...getFieldProps('phone', { initialValue: merchantData.phone})} placeholder="请输入手机号" />
					    </FormItem>

					    <FormItem
					      	label="简称"
					      	{...formItemLayout}
					    >
					     	<Input id="nickname" {...getFieldProps('nickname', { initialValue: merchantData.nickname})} placeholder="请输入商户简称" /> (选填)
					    </FormItem>

					    <FormItem
					      	label="地址"
					      	{...formItemLayout}
					    >
					     	<Input id="adadress" {...getFieldProps('adadress', { initialValue: merchantData.adadress})} placeholder="请输入商户地址" /> (选填)
					    </FormItem>

					    <FormItem
					      	label="邮箱"
					      	{...formItemLayout}
					    >
					     	<Input id="email" {...getFieldProps('email', { initialValue: merchantData.email})} placeholder="请输入商户邮箱" /> (选填)
					    </FormItem>

					    <FormItem
					      	label="备注"
					      	{...formItemLayout}
					      	required
					    >
					      	<Input type="textarea" id="status_desc" {...getFieldProps('status_desc', { initialValue: merchantData.status_desc})} rows="3" placeholder="添加备注（工作日志）" />
					      	{/*<span style={{verticalAlign: 'top', display: 'inline-block'}}>(选填)</span>*/}
					    </FormItem>

					    <FormItem
					      	label="拜访状态"
					      	{...formItemLayout}
					    >
					      	<RadioGroup {...getFieldProps('status', { initialValue: merchantData.status, onChange: this.onStatusChange })}>
					        	<Radio value="1">洽谈中</Radio>
					        	<Radio value="5">已签约</Radio>
					        	<Radio value="2">暂缓</Radio>
					        	<Radio value="3">拒绝合作</Radio>
					      	</RadioGroup>
					    </FormItem>
					    
					    {(merchantData.status == '5') && (<FormItem
					      	label="签约时间"
					      	{...formItemLayout}
					      	required
					    >
					      	<DatePicker {...getFieldProps('sign_time', { initialValue: merchantData.sign_time, getValueFromEvent: (date, dateString) => dateString })} format="yyyy-MM-dd" />
					    </FormItem>)}

					     <FormItem
					      	label="商户类型"
					      	{...formItemLayout}
					    >
					      	<RadioGroup {...getFieldProps('sign_type', { initialValue: '0', onChange: this.onUserChange })}>
					        	<Radio value="0">普通用户</Radio>
					        	<Radio value="1">预付款用户</Radio>
					      	</RadioGroup>
					    </FormItem>
					    {
					    	(merchantData.sign_type == 0) ? (
						    	<div>
								    <FormItem
								      	label="保证金"
								      	{...formItemLayout}
								    >
								     	<Input id="amount" {...getFieldProps('amount', {initialValue: merchantData.amount})} placeholder="请输入保证金金额" /> 元
								    </FormItem>
								    
								    <FormItem
								      	label="结算方式"
								      	{...formItemLayout}
								    >
								     	T + <div className="way-w"><Input id="settlement_type" {...getFieldProps('settlement_type', {initialValue: merchantData.settlement_type})} placeholder="0-99" /></div> 
								    </FormItem>
							    </div>
						    ) : (
							    <div>
							    	<FormItem
								      	label="预付款"
								      	{...formItemLayout}
								    >
								    	{/*0元 
								    	<div className="btn-w--chongzhi">
								    		<Button type="primary" size="small">充值</Button>
								    	</div>*/}
								    	<Input id="amount" {...getFieldProps('amount', {initialValue: merchantData.amount})} placeholder="请输入预付款金额" /> 元
								    </FormItem>
							    	<FormItem
								      	label="预警金额"
								      	{...formItemLayout}
								    >
								     	<Input id="alarm_amount" {...getFieldProps('alarm_amount', {initialValue: merchantData.alarm_amount})} placeholder="请输入预警金额" /> 元
								    </FormItem>
								</div>
						    )
						}

					    <FormItem
					      	label="账号(卡号)"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="card" {...getFieldProps('card', {initialValue: merchantData.card})} placeholder="请输入账号(卡号)" />
					    </FormItem>

					    <FormItem
					      	label="户名(姓名)"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="account" {...getFieldProps('account', {initialValue: merchantData.account})} placeholder="请输入户名(姓名)" />
					    </FormItem>

					    <FormItem
					      	label="所属银行"
					      	{...formItemLayout}
					      	required
					    >
						    <Select id="bank" size="large" {...getFieldProps('bank', {initialValue: merchantData.bank})} placeholder="请选择所属银行"  style={{ width: 200 }}>
								{this.state.banks.map((el, index) => {
									return <Option key={'bank' + index} value={el.code}>{el.name}</Option>;
								})}
						    </Select>
					    </FormItem>

					    <FormItem
					      	label="开户行"
					      	{...formItemLayout}
					      	required
					    >
					     	<Input id="card_bank" {...getFieldProps('card_bank', {initialValue: merchantData.card_bank})} placeholder="请输入开户行" />
					    </FormItem>

					    <FormItem
					      	id="bank_location"
					      	label="归属地"
					      	{...formItemLayout}
					      	required
					    >
					     	<Cascader options={options} onChange={this.onChange} placeholder="请选择地区" />
					    </FormItem>
        			</div>
        			<Shops
						showPanel={this.showInputPanel}
						delShop={this.delShop}
						shopData={merchantData.shops} />

        			<div className="btn-w--submit">
				    	<Button type="primary" size="default" htmlType="submit" onClick={this.saveHandle}>保存</Button>
				    	<Button type="primary" size="default" htmlType="submit" onClick={this.submitHandle}>提交审核</Button>
				    </div>
        		</Form>
        		<InputPanel
        			show={this.state.showInputPanel}
					shopOperate={this.state.shopOperate}
					shopInfo={this.state.shopInfo}
					showPanel={this.showInputPanel}
					hidePanel={this.hideInputPanel} />
        	</div>
        );
    }
}
let newInputs = Form.create()(Inputs);
export default newInputs;
