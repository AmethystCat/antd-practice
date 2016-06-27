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
  action: '/upload.do',
  listType: 'picture',
  defaultFileList: [{
    uid: -1,
    name: 'xxx.png',
    status: 'done',
    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
  },
  {
    uid: -22,
    name: 'yyy.png',
    status: 'done',
    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
  },
  {
    uid: -23,
    name: 'yyy.png',
    status: 'done',
    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
  },
  {
    uid: -24,
    name: 'yyy.png',
    status: 'done',
    url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
    thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png'
  }]
};

class InputPanel extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Inputs';
    }

    handleSelectChange = (value) => {
	  	console.log(`selected ${value}`);
	}

    render() {
    	const formItemLayout = {
    		labelCol: { span: 2 },
			wrapperCol: { span: 18 },
			hasFeedback: true
    	};
        return (
        	<div className="shop-add-w show">
                <div className="mask"></div>
                <div className="add-panel">
                	<div className="input-w">
                		<Form horizontal>
		        			<div className="commercial-w">
							    <FormItem
							    	prefixCls="ant-form"
							      	id="control-input"
							      	label="店铺名称"
							      	{...formItemLayout}
							      	required
							    >
							     	<Input id="control-input" placeholder="请输入店铺名称" />
							    </FormItem>
							    <FormItem
							      	id="control-input"
							      	label="店铺地址"
							      	{...formItemLayout}
							      	required
							    >
							     	<Input id="control-input" placeholder="请输入店铺地址" />
							    </FormItem>
							    <FormItem
							      	id="leixing"
							      	label="店铺类型"
							      	{...formItemLayout}
							      	required
							    >
								    <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}>
								        <Option value="jack">jack</Option>
								        <Option value="lucy">lucy</Option>
								        <Option value="disabled" disabled>disabled</Option>
								        <Option value="yiminghe">yiminghe</Option>
								    </Select>
							    </FormItem>
							    <FormItem
							      	id="shangquan"
							      	label="所属商圈"
							      	{...formItemLayout}
							      	required
							    >
								    <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}>
								        <Option value="jack">jack</Option>
								        <Option value="lucy">lucy</Option>
								        <Option value="disabled" disabled>disabled</Option>
								        <Option value="yiminghe">yiminghe</Option>
								    </Select>
							    </FormItem>
							    <FormItem
							      	id="control-input"
							      	label="联系电话"
							      	{...formItemLayout}
							      	required
							    >
							     	<Input id="control-input" placeholder="请输入联系电话，手机号或者座机号均可" />
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
							     		<Input style={{width: '100%'}} id="control-input" placeholder="1-100" />
							     	</Col>
							    </FormItem>
							    <FormItem
							      	id="control-input"
							      	label="折扣说明"
							      	{...formItemLayout}
							    >
							     	<Input id="control-input" placeholder="请简要输入折扣说明，该说明会在荷马App中进行展示" /> (选填)
							    </FormItem>
							    <FormItem
							      	id="control-input"
							      	label="佣金"
							      	{...formItemLayout}
							      	required
							    >
							     	<Col span={5}>
							     		<Input style={{width: '100%'}} id="control-input" placeholder="0-1000" />
							     	</Col>
							     	<Col span={5} className="pl10">‰ (千分位)</Col> 
							    </FormItem>
							    <FormItem
							      	id="control-input"
							      	label="备注"
							      	{...formItemLayout}
							    >
							     	<Input id="control-input" placeholder="请输入备注" /> (选填)
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
			        			<Button type="primary">确定</Button>
			        			<Button type="primary" className="btn-cancel">取消</Button>
			        		</div>
			        		<Button type="default" icon="cross" shape="circle" className="btn-close"></Button>
			        	</Form>
		        	</div>    
                </div>
            </div>
        );
    }
}

export default InputPanel;
