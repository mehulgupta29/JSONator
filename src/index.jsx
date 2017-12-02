import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import './styles/app.scss'
import configureStore from './store/appStore'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'

let initialState = {
	files: [],
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purposes'
	}],
	user: {
		username: 'mg',
		id: 1
	}
};

let store = configureStore(initialState);

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<AppContainer>
				<Component/>
			</AppContainer>
		</Provider>,
		document.getElementById('main')
	)
};

render(App);
if (module.hot) {
	module.hot.accept('./components/app', () => {
		render(App)
	})
}
