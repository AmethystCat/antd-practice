import React from 'react';
// import Input from 'antd/lib/input';
// import Button from 'antd/lib/button';
import DatePicker from 'antd/lib/date-picker';
import Select from 'antd/lib/select';
import Table from 'antd/lib/table';
import SearchInput from '../../components/search-input/main.jsx';

const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const status = ['', '洽谈中', '暂缓', '拒绝合作', '申请驳回', '已签约', '审核中', '通过审核'];
const runtime_status = ['未上线', '已上线'];
const columns = [{
    title: '商户名称',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>
  }, 
  {
      title: '负责人',
      dataIndex: 'manager',
      key: 'manager',
      width: 200
  },
    {
        title: '业务进展',
        dataIndex: 'status',
        key: 'status',
        render: (text) => (
            <span>{status[text]}</span>
        )
    },
  {
    title: '签约时间',
    dataIndex: 'sign_time',
    key: 'sign_time'
  }, 
  {
    title: '结算方式',
    dataIndex: 'settlement_type',
    key: 'settlement_type'
  },
    {
        title: '上线状态',
        dataIndex: 'runtime_status',
        key: 'runtime_status',
        render: (text) => (
            <span>{runtime_status[text]}</span>
        )
    },
    {
    title: '店铺',
    dataIndex: 'shops',
    key: 'shops',
    render: (data) => {
      let dom = data.map((el, index) => {
          return (
              <span key={'shop'+index }>
                  <a href="#">{(index + 1) + '、' + el.name}</a><br/>
              </span>
          );
      });
        return (
            <div>
                {dom}
            </div>
        );
    }
  }, 
  {
    title: '操作',
    key: 'operation',
    render: (text) => {
        let dom = text.status == 6 ? '无' : (text.status == 7 ? <a href="#">添加店铺</a> : <a href="#">修改</a>);
        return (
            <span>
                {dom}
            </span>
        );
    }
}];

class List extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'List';
    }

	state = {
        loading: true,
        total: 0,
		listData: []
	}

    componentDidMount() {
        this.getData({
            page_index: 1
        });
    }

    getData = (params, cb = () => {}) => {
        server.web_merchant_operator_list({
            page_index: params.page_index,
            page_size: params.page_size || 20
        }, (res) => {
            if (res.code === 0) {
                this.setState({
                    listData: this.addKeys(res.merchants),
                    total: res.total,
                    loading: false
                }, (res) => {
                    cb(res);
                });
            } else {
                alert(res.message);
            }
        });
    }

    onPageChange = (e) => {
        this.setState({
            loading: true
        }, () => {
            this.getData({
                page_index: e
            });
        });
    }

    addKeys = (data) => {
        return (
            data.map((el, index) => {
                el.key = index;
                return el;
            })
        );
    }

    render() {
        let _this = this;
        const pagination = {
            pageSize: 20,
            total: this.state.total,
            onChange(e){
                _this.onPageChange(e);
            }
        };
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
  	    			<Table columns={columns} dataSource={this.state.listData} loading={this.state.loading} pagination={pagination}/>
  	    		</div>
	        </div>
	    );
    }
}

export default List;