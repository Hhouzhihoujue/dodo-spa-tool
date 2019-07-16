import React from 'react';
import ReactDOM from 'react-dom';

// import Home from './home';
import TsCompoent from './tsCompoent.tsx';

import './index.css';
import './index.less';

const App = () => (
	<div className="app">
		app
		{/* <Home /> */}
		<TsCompoent />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
	module.hot.accept();
}
