import React from 'react';

export default class Input extends React.Component {
	constructor() {
		super();
		this.state = {
			'inputValue':'',
			'isSubmit':false
		}
	}

	submitPush(e) {
		if(this.state.inputValue === ""){
			alert('Please, write somethings to do.');
		}else{
			let dt = new Date();
			let obj = {
				comment:this.state.inputValue,
				date:`${dt.getFullYear()}.${this.addZero(dt.getMonth()+1)}.${this.addZero(dt.getDate())}`,
				key:dt.getTime(),
				idx:dt.getTime()
			};
			this.props.addList(obj);
			this.setState({inputValue:''});
		}
	}

	componentWillReceiveProps($props) {
		if($props.comment && $props.isEdit) {
			this.setState({inputValue:$props.comment});
		}
	}

	addZero($num) {
		if($num >= 10){
			return $num;
		}else{
			return '0' + $num;
		}
	}

	changeComment(e) {
		this.setState({ inputValue: e.target.value });
	}

	render() {
		return (
			<div className="input-area">
				<input type="text" value={this.state.inputValue} onChange={this.changeComment.bind(this)} placeholder="Write somethings to do." />
				<input type="button" value="SUBMIT" onClick={this.submitPush.bind(this)} />
			</div>
		);
	}
}