import React from 'react';
import Button from 'antd/lib/button';

class Shops extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Shops';
    }

    static propTypes: {
        showPanel: React.PropTypes.func.isRequired,
        delShop: React.PropTypes.func.isRequired,
        shopData: React.PropTypes.array.isRequired   
    }

    addShop = () => {
		// 添加店铺
        this.props.showPanel(true, 'create', '');
    }

	showDetail = (el) => {
		// 这里可以更新店铺信息
		this.props.showPanel(true, 'update', el);
	}

	del = (id) => {
		this.props.delShop(id);
	}

    render() {
		const shopData = this.props.shopData;
        return (
        	<div className="shops-w">
        		<div className="btn-add-w"><Button type="dashed" icon="plus" onClick={this.addShop}>添加店铺</Button></div>
        		<div className="shop-c">
					{shopData.map((el, index) => {
						console.log(el);
						return (
							<div key={'shop' + index} className="item">
								<Button type="dashed" onClick={() => {this.showDetail(el);}}>{el.name}</Button>
								<Button type="default" icon="delete" shape="circle" onClick={() => {this.del(el.id);}}/>
							</div>
						);
					})}
        		</div>
        	</div>
        );
    }
}

export default Shops;
