import React from 'react';
import  Button from 'antd/lib/button';

class Shops extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Shops';
    }
    render() {
        return (
        	<div>
        		<div className="btn-add-w"><Button type="dashed" icon="plus">添加店铺</Button></div>
        		<div className="shop-c"></div>
        	</div>
        );
    }
}

export default Shops;
