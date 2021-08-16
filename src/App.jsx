import { Provider } from 'react-redux'
import 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './global.css';
import Root from './pages/Root';
import store from './store/store';

function App() {
	return (
    <Provider store={store}>
       <Root/>
    </Provider>
    
  );
}

export default App;

