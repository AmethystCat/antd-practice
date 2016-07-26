import React from 'react';
import { DatePicker, Form, Button } from 'antd';
const createForm = Form.create;
const FormItem = Form.Item;

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Home';
    }

    checkBirthday = (rule, value, callback) => {
    	console.log(rule);
	    if (value && value.getTime() >= Date.now()) {
	      callback(new Error('你不可能在未来出生吧!'));
	    } else {
	      callback();
	    }
	}

	handleSubmit = (e) => {
	    e.preventDefault();
	    this.props.form.validateFieldsAndScroll((errors, values) => {
	        if (!!errors) {
	            console.log('Errors in form!!!');
	            return;
	        }
	        console.log('Submit!!!');
	        console.log(values);
	        window.D =  values.birthday;
	    });
	}

    render() {
    	const { getFieldProps } = this.props.form;
    	const formItemLayout = {
	        labelCol: { span: 7 },
	        wrapperCol: { span: 12 }
	    };
    	const birthdayProps = getFieldProps('birthday', {
    		initialValue: new Date(),
	    	rules: [{
	          		required: true,
	          		type: 'date',
	          		message: '你的生日是什么呢？'
	        	}, {
	          		validator: this.checkBirthday
	        	}
	      	]
	    });
        return (
        	<div>
        		<Form horizontal form={this.props.form}>
	        		<FormItem
			          	{...formItemLayout}
			          	label="选一个时间"
			        >
			          	<DatePicker  {...birthdayProps} format="yyyy-MM-dd"/>
			        </FormItem>

			        <FormItem
			          wrapperCol={{ span: 12, offset: 7 }}
			        >
			          <Button type="primary" onClick={this.handleSubmit}>确定</Button>
			        </FormItem>
			    </Form>	
        	</div>
        );
    }
}
const Homer = createForm()(Home);

export default Homer;