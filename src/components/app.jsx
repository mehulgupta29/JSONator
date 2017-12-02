import React, {Component} from 'react'
// import TodoInput from './TodoInput'
// import TodoList from './TodoList'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../actions/actions'
// import UserInfo from './UserInfo'
import { map } from 'lodash'

import FileLoader from './fileLoader/FileLoader';


class App extends Component {

	showFileText() {
		const {files} = this.props;
		console.log("show file text", files);

		return map(files, f => <li key={f.id}>{f.text}</li>);
	}

	render() {

		const {files} = this.props;
		console.log("Files", this.props.files);

		return (
			<div>
				Welcome to JSONator
				<FileLoader {...this.props} actions={this.props.actions}/>

				<div>
					<ul>
						{this.showFileText()}
					</ul>
				</div>
				{/*<div>*/}
					{/*<h1>Todo List</h1>*/}
					{/*<UserInfo user={this.props.user} actions={this.props.actions}/>*/}
					{/*<TodoInput addTodo={this.props.actions.addTodo}/>*/}
					{/*<TodoList actions={this.props.actions} todos={this.props.todos}/>*/}
				{/*</div>*/}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return state
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)