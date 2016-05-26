import css from '../css/main.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Input from './component/Input';
import Header from './component/Header';
import List from './component/List';

class Layout extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div id="wrap">	
				<Header />
				<List listLength='5' />
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);