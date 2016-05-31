import React from 'react';

export default class Input extends React.Component {
	submitPush(e) {
		if(this.refs.comment.value === ""){
			alert('Please, write somethings to do.');
		}else{
			let dt = new Date();
			let obj = {
				comment:this.refs.comment.value,
				date:`${dt.getFullYear()}.${dt.getMonth()+1}.${dt.getDate()}`,
				key:dt.getTime()
			};
			this.props.addList(obj);
			this.refs.comment.value = '';
		}
	}

	render() {
		return (
			<div className="input-area">
				<form>
					<input type="text" ref="comment" placeholder="Write somethings to do." />
					<input type="button" value="SUBMIT" onClick={this.submitPush.bind(this)} />
				</form>
			</div>
		);
	}
}