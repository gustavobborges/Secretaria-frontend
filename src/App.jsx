import { Provider } from 'react-redux'
import 'bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as S from './styles';
import Root from './pages/Root';
import store from './store/store';

function App() {
	return (
    <Provider store={store}>
      <S.Content>
       <Root/>
      </S.Content>
    </Provider>
  );
}

export default App;

