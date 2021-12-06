import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header/Header';
import PagesPatients from './Patients/Patients';
import PagesDashboard from './Dashboard/Dashboard';
import PagesLogin from './Login/Login';
import PagesSingup from './Singup/Singup';
import PagesResetPassword from './ResetPassword/ResetPassword';
import PagesRequestResetPassword from './ResetPassword/RequestResetPassword.jsx';

function Root() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);
  if (currentUser?.session?.length === 0 && localStorage.getItem('session')) {
    const userStorage = {
      session: localStorage.getItem('session'),
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      id: localStorage.getItem('id')
    }
    dispatch({ type: 'LOGIN', payload: userStorage });
  }

  return (
    <BrowserRouter>
      {currentUser && currentUser?.session?.length === 0
        ? (
          <Switch>
            <Route path="/" component={PagesLogin} exact></Route>
            <Route path="/login" component={PagesLogin}></Route>
            <Route path="/singup" component={PagesSingup}></Route>
            <Route path="/request-reset" component={PagesRequestResetPassword}></Route>
            <Route path="/reset" component={PagesResetPassword}></Route>
          </Switch>
        )
        : (<>
            <Header />
            <Switch>
              <Route path="/" component={PagesDashboard} exact></Route>
              <Route path="/patients" component={PagesPatients}></Route>
              <Route path="/login" component={PagesLogin}></Route>
              <Route path="/singup" component={PagesLogin}></Route>
            </Switch>
          </>)
      }
    </BrowserRouter>
  );
}

export default Root;