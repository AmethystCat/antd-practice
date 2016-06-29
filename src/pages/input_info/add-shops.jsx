import React from 'react';
import Button from 'antd/lib/button';

class Shops extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Shops';
    }

	componentDidMount() {
		server.web_bank_list({}, (res) => {
			console.log(res);
		});
	}

    render() {
        return (
        	<div className="shops-w">
        		<div className="btn-add-w"><Button type="dashed" icon="plus">添加店铺</Button></div>
        		<div className="shop-c">
        			<div className="item">
        				<Button type="dashed">东门大桥李豆汤饭庄</Button>
        				<Button type="default" icon="delete" shape="circle"/>
        			</div>
        		</div>
        	</div>
        );
    }
}

export default Shops;
