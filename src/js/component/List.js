import React from 'react';
import ListItem from './ListItem.js';

export default class List extends React.Component {
	render() {
		const listItem = [];
		let count = 0;
		if(this.props.data){
			this.props.data.map((item) => {
				listItem.push(<ListItem title={item.comment} date={item.date} key={item.key} />);
			});
		}else{

		}
		return (
			<ul className="list">
				{listItem}
			</ul>
		);
	}
}