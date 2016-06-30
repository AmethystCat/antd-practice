import React from 'react';
import  Button from 'antd/lib/button';
import  Form from 'antd/lib/form';
import  Input from 'antd/lib/input';
import  Select from 'antd/lib/select';
import  TimePicker from 'antd/lib/time-picker';
import  Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
import  Upload from 'antd/lib/upload';

const FormItem = Form.Item;
const Option = Select.Option;

const props = {
  action: '/web/image/tmp/upload',
  listType: 'picture',
  onChange(o) {
	  console.log(o);
  }
};

class InputPanel extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Inputs';
    }

    state = {
    	loading: true,
    	begin_time: '',
    	end_time: '',
		shopTypes: [],
		cbd: [],
    	shopData: {
    		id: '',
	    	merchant_id: '',
	    	name: '123123',           //required,
	        address: '',        //required,
	        shop_type_id: null,   // 店铺类型 required,
	        shop_cbd_id: null,    // 所属商圈 required,
	        picture: '',        // 店铺形象 required,
	        business_hours: '', // 营业时间 required,
	        phone: null,          // 电话 required,
	        credentials: '',    // 资质证明 required,
	        discount: 0,      // 折扣 required,
	        discount_desc: 'qqqqqqq', // 折扣说明
	        commission: 0,    // 佣金 required,
	        description: '' // 备注
    	}
    }

    static propTypes = {
    	showPanel: React.PropTypes.func.isRequired,
    	hidePanel: React.PropTypes.func.isRequired,
    	shopOperate: React.PropTypes.string.isRequired
    }

    componentDidMount() {
		// 获取店铺类型
		this.getShopType(this.getCbd);
    }

    // 获取店铺类型
	getShopType = (cb = () => {}) => {
		server.api_shop_type_list({}, (res) => {
			if (res.code === 0) {
				this.setState({
					shopTypes: res.data
				}, () => {
					cb(res.data);
				});
			} else {
				alert(res.message);
			}
		});
	}

	// 获取商圈
	getCbd = () => {
		server.web_cbd_list({}, (res) => {
			if (res.code === 0) {
				this.setState({
					cbd: res.data
				});
			} else {
				alert(res.message);
			}
		});
	}

    handleSelectChange = (value) => {
	  	console.log(`selected ${value}`);
	}

	submitHandle = (e) => {
		e.preventDefault();
		let formdata = this.props.form.getFieldsValue();
		let s = {...this.state.merchantData, ...formdata};
		let op = this.props.shopOperate;


		if (op === 'create') {
			server.web_shop_create(s, (res) => {
				if (res.code === 0) {
					this.props.hidePanel(op, res.data);
				} else {
					alert(res.message);
				}
			});
		} else {
			server.web_shop_update(s, (res) => {
				if (res.code === 0) {
					this.props.hidePanel(op, res.data);
				} else {
					alert(res.message);
				}
			});
		}
		
	}

	close = () => {
		let op = this.props.shopOperate;
		this.props.hidePanel(op);
	}

    render() {
    	const formItemLayout = {
    		labelCol: { span: 2 },
			wrapperCol: { span: 18 },
			hasFeedback: true
    	};
    	const {  shopData} = this.state;
    	const { getFieldProps } = this.props.form;
        return (
        	<div className={this.props.show ? 'shop-add-w show' : 'shop-add-w'}>
	                <div className="mask"></div>
	                <div className="add-panel">
	                	<div className="input-w">
	                		<Form horizontal>
			        			<div className="commercial-w">
								    <FormItem
								    	prefixCls="ant-form"
								      	label="店铺名称"
								      	{...formItemLayout}
								      	required
								    >
								     	<Input id="name" {...getFieldProps('name', { initialValue: shopData.name})} placeholder="请输入店铺名称" />
								    </FormItem>
								    <FormItem
								      	label="店铺地址"
								      	{...formItemLayout}
								      	required
								    >
								     	<Input id="address" {...getFieldProps('address', { initialValue: shopData.address})} placeholder="请输入店铺地址" />
								    </FormItem>
								    <FormItem
								      	label="店铺类型"
								      	{...formItemLayout}
								      	required
								    >
									    <Select id="shop_type_id" size="large" {...getFieldProps('shop_type_id', { initialValue: shopData.shop_type_id})} style={{ width: 200 }}>
											{this.state.shopTypes.map((el, index) => {
												return <Option key={'shop_type' + index} value={el.id}>{el.title}</Option>;
											})}
									    </Select>
								    </FormItem>
								    <FormItem
								      	label="所属商圈"
								      	{...formItemLayout}
								      	required
								    >
									    <Select id="shop_cbd_id" size="large" {...getFieldProps('shop_cbd_id', { initialValue: shopData.shop_cbd_id}) } style={{ width: 200 }}>
											{this.state.cbd.map((el, index) => {
												return <Option key={'cbd' + index} value={el.id}>{el.title}</Option>;
											})}
									    </Select>
								    </FormItem>
								    <FormItem
								      	label="联系电话"
								      	{...formItemLayout}
								      	required
								    >
								     	<Input id="shop_phone" {...getFieldProps('phone', { initialValue: shopData.phone}) } placeholder="请输入联系电话，手机号或者座机号均可" />
								    </FormItem>
								    <FormItem
									    label="营业时间"
									   	labelCol={{ span: 6 }}
									    wrapperCol={{ span: 16 }}
									    required
									>
									    <Col span={6}>
									    	<TimePicker format="HH:mm" />
									    </Col>
									    <Col span={4}><p style={{padding: '0 10px', textAlign: 'center', color: '#d9d9d9'}}>———</p></Col>
									    <Col span={6}>
									    	<TimePicker format="HH:mm"/>
									    </Col>
									</FormItem>
									<FormItem
								      	id="control-input"
								      	label="折扣"
								      	{...formItemLayout}
								      	required
								    >
								     	<Col span={5}>
								     		<Input style={{width: '100%'}} id="discount" {...getFieldProps('discount', { initialValue: shopData.discount}) } placeholder="1-100" />
								     	</Col>
								    </FormItem>
								    <FormItem
								      	id="control-input"
								      	label="折扣说明"
								      	{...formItemLayout}
								    >
								     	<Input id="discount_desc" {...getFieldProps('discount_desc', { initialValue: shopData.discount_desc}) } placeholder="请简要输入折扣说明，该说明会在荷马App中进行展示" /> (选填)
								    </FormItem>
								    <FormItem
								      	id="control-input"
								      	label="佣金"
								      	{...formItemLayout}
								      	required
								    >
								     	<Col span={5}>
								     		<Input style={{width: '100%'}} id="commission" {...getFieldProps('commission', { initialValue: shopData.commission}) } placeholder="0-1000" />
								     	</Col>
								     	<Col span={5} className="pl10">‰ (千分位)</Col> 
								    </FormItem>
								    <FormItem
								      	id="control-input"
								      	label="备注"
								      	{...formItemLayout}
								    >
								     	<Input id="description" {...getFieldProps('description', { initialValue: shopData.description}) } placeholder="请输入备注" /> (选填)
								    </FormItem>    
			        			</div>
			        			<div className="shops-w">
			        				<FormItem
								      	id="control-input"
								      	label="店铺形象"
								      	{...formItemLayout}
								    >
								     	<Upload {...props}>
									      	<Button type="ghost">
									        	<Icon type="upload" /> 点击上传
									      	</Button>
									      	<p style={{lineHeight: '18px', paddingTop: '8px'}}>
									      		只能传一张图片，用于荷马生活App店铺列表显示,建议图片宽高比：4:3；大小不超过1M(后台进行压缩)
									      	</p>
									    </Upload>
								    </FormItem>
								    <FormItem
								      	id="control-input"
								      	label="资质证照"
								      	{...formItemLayout}
								    >
								      	<Upload {...props}>
									      	<Button type="ghost">
									        	<Icon type="upload" /> 点击上传
									      	</Button>
									      	<p>
									      		可上传多张图片，图片尺寸不限，大小不超过2M(后台进行压缩)
									      	</p>
									    </Upload>
								    </FormItem>
				        		</div>
				        		<div className="clearfix btn-w">
				        			<Button type="primary" onClick={this.submitHandle}>确定</Button>
				        			<Button type="primary" className="btn-cancel" onClick={() => {this.close(null);}}>取消</Button>
				        		</div>
				        	</Form>
			        	</div>
			        	<Button type="default" icon="cross" shape="circle" className="btn-close" onClick={this.close}></Button>
	                </div>
                	
            </div>
        );
    }
}

let newInputPanel = Form.create()(InputPanel);
export default newInputPanel;
