import React, { Component } from 'react';
import './Content.css';


class Content extends Component {
	render(){
		return (
			<div className="content-title">
				<p style={{fontFamily: 'Arial Helvetica San-serif', fontSize: '1.5rem', textAlign: 'center'}}>Muntanga</p>
				<div className="header-photo"/>
				<p style={{fontFamily: 'Arial Helvetica San-serif', fontSize: '1.5rem', textAlign: 'center'}}>Gantong mukha hindi nag kaka-girlfriend</p>
			</div>
		);
	}
}

export default Content;