import React from 'react';

export default class ListItem extends React.Component {
	render() {
		return (
			<li ref="currentList" className="list-item">
				<div className="list-content">
					<p ref="comment" className="list-item-title">{this.props.title}</p>
					<span className="list-item-sub">{this.props.date}</span>
				</div>
				<div className="list-btns">
					<button type="button" className="edit-btn" onClick={this.editClick.bind(this)}>EDIT</button>
					<button type="button" className="delete-btn" onClick={this.delClick.bind(this)}>DELETE</button>
				</div>
			</li>
		);
	}

	editClick(e) {
		this.props.editClick(this.props.idx, this.refs.comment.innerHTML);
	}

	delClick(e) {
		this.props.editClick(this.props.idx);
	}
}