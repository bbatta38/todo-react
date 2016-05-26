import React from 'react';

export default class ListItem extends React.Component {
	render() {
		return (
			<li className="list-item">
				<div className="list-content">
					<p className="list-item-title"><a href="#">리스트 제목 입니다.</a></p>
					<span className="list-item-sub">2016.04.26</span>
				</div>
				<div className="list-btns">
					<button type="button" className="edit-btn">EDIT</button>
					<button type="button" className="delete-btn">DELETE</button>
				</div>
			</li>
		);
	}
}