import React from 'react';
import ListItem from './ListItem.js';

export default class List extends React.Component {
	render() {
		let i = 0;
		let length = this.prop.listLength;
		const listItem = [];
		for(; i < length; i++){
			listItem.push(<ListItem />);
		}

		return (
			<ul className="list">
				{listItem}
			</ul>
		);
	}
}