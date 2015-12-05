import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers/index.js';
import { createStore, applyMiddleware, compose } from 'redux';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

const finalCreateStore = compose(
	// applyMiddleware(thunk),
	devTools(),
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = finalCreateStore(rootReducer);

if (module.hot) {
	module.hot.accept('./reducers/index', () =>
		store.replaceReducer(combineReducers(require('./reducers')))
	);
}

render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
		<DebugPanel top right bottom>
			<DevTools store={store} monitor={LogMonitor} />
		</DebugPanel>
	</div>,
	document.getElementById('root')
);
