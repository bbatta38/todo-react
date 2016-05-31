import css from '../css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
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
				'todoData':JSON.parse(localStorage.getItem('todoData'))
			}

			this.arrTodo = JSON.parse(localStorage.getItem('todoData'));
		}else{
			this.state = {
				'todoData':[]
			}

			this.arrTodo = [];
		}
	}

	addList($obj) {
		this.arrTodo.push($obj);
		this.setState({
			'todoData':this.arrTodo
		});
		localStorage.setItem('todoData', JSON.stringify(this.arrTodo));
	}

	render() {
		return (
			<div id="wrap">	
				<Header />
				<Input addList={this.addList.bind(this)} />
				<List data={this.state.todoData} />
			</div>
		);
	}
	componentDidMount() {
		var flicking = new Flicking();
	    flicking.init({
	        wrapper:'list',
	        container: 'list-item',
	        transitionClass: 'transition-item',
	        btnWidth: 120,
	        elastic: 40
	    });
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);