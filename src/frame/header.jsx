import React from 'react';

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div className="ant-layout-header">
                <div className="ant-layout-wrapper">
                    <div className="ant-layout-logo">Homer</div>
                </div>
            </div>
		);
	}
}

export default Header;