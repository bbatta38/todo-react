import React from 'react';

export default class ListItem extends React.Component {
	render() {
		return (
			<li className="list-item">
				<div className="list-content">
					<p className="list-item-title">{this.props.title}</p>
					<span className="list-item-sub">{this.props.date}</span>
				</div>
				<div className="list-btns">
					<button type="button" className="edit-btn" onClick={this.editClick}>EDIT</button>
					<button type="button" className="delete-btn" onClick={this.delClick}>DELETE</button>
				</div>
			</li>
		);
	}

	editClick(e) {
		console.log(e.currentTarget);
	}

	delClick(e) {
		console.log(e.currentTarget);
	}
}