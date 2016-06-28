import React from 'react';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
const InputGroup = Input.Group;

class SearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SearchInput';
    }
    render() {
        return (
        	<InputGroup className="ant-search-input">
	          	<Input placeholder="请输入关键词搜索"/>
	          	<div className="ant-input-group-wrap">
	            	<Button icon="search" className="ant-search-btn" size="default"/>
	          	</div>
	        </InputGroup>
        );
    }
}

export default SearchInput;
