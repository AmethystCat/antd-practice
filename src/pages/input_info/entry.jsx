import React from 'react';
import  Button from 'antd/lib/button';
import  Form from 'antd/lib/form';
import  Input from 'antd/lib/input';
// import  Select from 'antd/lib/select';
import  Radio  from 'antd/lib/radio';
import  DatePicker   from 'antd/lib/date-picker';

const FormItem = Form.Item;
// const Option = Select.Option;
const RadioGroup = Radio.Group;

class Inputs extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Inputs';
    }

    handleSelectChange = (value) => {
	  	console.log(`selected ${value}`);
	}

	onDateChange = (value, dateString) => {
		console.log(value, dateString);
	}

    render() {
    	let labelWidth = 2,
    		inputWidth = 8;
        return (
        	<div className="input-w">
        		<div className="commercial-w">
        			<Form horizontal>
					    <FormItem
					    	prefixCls="ant-form"
					      	id="control-input"
					      	label="商户名称"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					     	<Input id="control-input" placeholder="请输入商户名称" />
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="简称"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					     	<Input id="control-input" placeholder="请输入称简称" /> (选填)
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="地址"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					     	<Input id="control-input" placeholder="请输入地址" /> (选填)
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="邮箱"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					     	<Input id="control-input" placeholder="请输入邮箱" /> (选填)
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="负责人"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					     	<Input id="control-input" placeholder="请输入负责人" />
					    </FormItem>
					    <FormItem
					      	id="control-input"
					      	label="手机号"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					     	<Input id="control-input" placeholder="请输入手机号" />
					    </FormItem>

					    <FormItem
					      	id="control-textarea"
					      	label="备注"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					      	<Input type="textarea" id="control-textarea" rows="3" placeholder="添加备注（工作日志）" /> <span style={{verticalAlign: 'top', display: 'inline-block'}}>(选填)</span>
					    </FormItem>

					    <FormItem
					      	label="拜访状态"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					      	<RadioGroup defaultValue="b">
					        	<Radio value="a">洽谈中</Radio>
					        	<Radio value="b">已签约</Radio>
					        	<Radio value="c">暂缓</Radio>
					        	<Radio value="d">拒绝合作</Radio>
					      	</RadioGroup>
					    </FormItem>

					    <FormItem
					      	label="签约时间"
					      	labelCol={{ span: labelWidth }}
					      	wrapperCol={{ span: inputWidth }}
					    >
					      	<DatePicker onChange={this.onDateChange} />
					    </FormItem>

				     	<Button type="dashed">提交</Button>
					  </Form>
        		</div>
        		<div className="shops-w">
        			
        		</div>
        	</div>
        );
    }
}

export default Inputs;
