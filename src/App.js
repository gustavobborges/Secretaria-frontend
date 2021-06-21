import 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './global.css';
import './App.css';

import Root from './pages/Root';
import Header from './components/Header/Header';

function App() {
	
	return (
		<div className="content">
			<Header title="Secretária"/>
			<Root/>
		</div>
	);
}

export default App;