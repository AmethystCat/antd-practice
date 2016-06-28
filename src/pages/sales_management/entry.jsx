import React from 'react';
import  Button from 'antd/lib/button';
import  Form from 'antd/lib/form';
import  Input from 'antd/lib/input';
import Table from 'antd/lib/table';

const FormItem = Form.Item;
const formItemLayout = {
      	labelCol: { span: 2 },
      	wrapperCol: { span: 5 }
    };

const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>
}, 
{
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
}, 
{
    title: '住址',
    dataIndex: 'address',
    key: 'address'
}, 
{
    title: '操作',
    key: 'operation',
    render: (text, record) => (
        <span>
            <a href="#">操作一{record.name}</a>
                <span className="ant-divider"></span>
                <a href="#">操作二</a>
                <span className="ant-divider"></span>
                <a href="#" className="ant-dropdown-link">
                  更多 
                </a>
        </span>
    )
}];

const data = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, 
{
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}, 
{
    key: '3',
    name: '李大嘴',
    age: 32,
    address: '西湖区湖底公园1号'
}];

class SalesManagement extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SalesManagement';
    }
    render() {
        return (
        	<div className="manage-w">
        		<div className="manage-item manage-w--add">
        			<h3>添加业务员</h3>
        			<div className="add-input-w">
        				<Form horizontal>
					        <FormItem
					          	{...formItemLayout}
					          	label="姓名"
					          	hasFeedback
                                required
					        >
					          <Input />
					        </FormItem>

					        <FormItem
					          	{...formItemLayout}
					          	label="邮箱"
					          	hasFeedback
                                required
					        >
					          	<Input />
					        </FormItem>
                            <FormItem
                                label=" "
                                {...formItemLayout}
                            >
                                <div className="btn-add-w"><Button type="primary">添加</Button></div>
                            </FormItem>
					    </Form>
        			</div>
        		</div>
        		<div className="manage-item manage-w--list">
        			<h3>业务员列表</h3>
                    <div className="table-w">
                        <Table columns={columns} dataSource={data}/>
                    </div>
        		</div>
        	</div>
        );
    }
}

export default SalesManagement;
