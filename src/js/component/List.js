import React from 'react';
import ListItem from './ListItem.js';

export default class List extends React.Component {
	render() {
		const listItem = [];
		let count = 0;
		if(this.props.data.length != 0){
			this.props.data.map((item) => {
				listItem.push(<ListItem title={item.comment} date={item.date} key={item.key} idx={item.idx} editClick={this.editClick.bind(this)} />);
			});
		}else{
			return (
				<div className="no-item">No Data</div>
			);
		}
		return (
			<ul className="list">
				{listItem}
			</ul>
		);
	}

	editClick($key, $comment) {
		this.props.itemEditClick($key, $comment);
	}
}