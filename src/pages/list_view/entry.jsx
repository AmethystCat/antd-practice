import React from 'react';
// import Input from 'antd/lib/input';
// import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';
import Select from 'antd/lib/select';
import Table from 'antd/lib/table';
import SearchInput from '../../components/search-input/main.jsx';

const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
  render: (text) => <a href="#">{text}</a>
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age'
}, {
  title: '住址',
  dataIndex: 'address',
  key: 'address'
}, {
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
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}, {
  key: '3',
  name: '李大嘴',
  age: 32,
  address: '西湖区湖底公园1号'
}];



class List extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'List';
    }
    render() {
        return (
        	<div className="list-w">
  	    		<div className="search-w">
  	    			<SearchInput />	
  	    		</div>
  	    		<div className="filter-w">
  	    			<div className="filter-item filter-time">
  	   					<label>签约时间：</label>
  	   					<RangePicker style={{ width: 184 }} />
  	    			</div>
  	    			<div className="filter-item filter-status">
  	    				<label>签约状态：</label>
  	    				<Select defaultValue="lucy" style={{ width: 120 }}>
  		      				<Option value="jack">Jack</Option>
  			      			<Option value="lucy">Lucy</Option>
  			      			<Option value="disabled" disabled>Disabled</Option>
  			      			<Option value="yiminghe">yiminghe</Option>
  			    		</Select>
  	    			</div>
  	    			<div className="filter-item filter-type">
  	    				<label>商户类型：</label>
  	    				<Select defaultValue="lucy" style={{ width: 120 }}>
  		      				<Option value="jack">Jack</Option>
  			      			<Option value="lucy">Lucy</Option>
  			      			<Option value="disabled" disabled>Disabled</Option>
  			      			<Option value="yiminghe">yiminghe</Option>
  			    		</Select>
  	    			</div>
  	    			<div className="filter-item filter-formula-mode">
  	    				<label>结算方式：</label>
  	    				<Select defaultValue="lucy" style={{ width: 120 }}>
  		      				<Option value="jack">Jack</Option>
  			      			<Option value="lucy">Lucy</Option>
  			      			<Option value="disabled" disabled>Disabled</Option>
  			      			<Option value="yiminghe">yiminghe</Option>
  			    		</Select>
  	    			</div>
  	    		</div>
  	    		<div className="table-w">
  	    			<Table columns={columns} dataSource={data}/>
  	    		</div>
	        </div>
	    );
    }
}

export default List;