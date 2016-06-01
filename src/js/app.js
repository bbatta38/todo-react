import css from '../css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';

import Input from './component/Input';
import Header from './component/Header';
import List from './component/List';

import Flicking from './Flicking';

class Layout extends React.Component {
	constructor() {
		super();
		let tmp = JSON.parse(localStorage.getItem('todoData'));
		if(tmp){
			this.state = {
				'todoData':JSON.parse(localStorage.getItem('todoData')),
				'comment':''
			}
			this.arrTodo = JSON.parse(localStorage.getItem('todoData'));
		}else{
			this.state = {
				'todoData':[],
				'comment':'',
				'isEdit':false
			}

			this.arrTodo = [];
		}

		this.flicking = new Flicking();
	}

	addList($obj) {
		this.arrTodo.push($obj);
		this.setData();
	}

	removeList($key) {
		_.remove(this.arrTodo, {idx:$key});
		this.setData();
	}

	setData() {
		this.setState({
			'todoData':this.arrTodo,
			'isEdit':false
		});
		localStorage.setItem('todoData', JSON.stringify(this.arrTodo));
	}

	itemEditClick($key, $comment) {
		this.removeList($key);
		if($comment){
			this.setState({comment:$comment, isEdit:true});
		}
	}

	render() {
		return (
			<div id="wrap">
				<Header />
				<Input comment={this.state.comment} isEdit={this.state.isEdit} addList={this.addList.bind(this)} />
				<List itemEditClick={this.itemEditClick.bind(this)} data={this.state.todoData} />
			</div>
		);
	}
	componentDidMount() {
		this.flickingInit();
	}

	flickingInit() {
		if(this.flicking){
			this.flicking.init({
		        wrapper:'list',
		        container: 'list-item',
		        transitionClass: 'transition-item',
		        btnWidth: 120,
		        elastic: 40
		    });
		}
	}

	componentDidUpdate() {
	    this.flickingInit();
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);