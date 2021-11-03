import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import PagesPatients from './Patients/Patients';
import PagesDashboard from './Dashboard/Dashboard';
import PagesLogin from './Login/Login';

function Root() {

  const currentUser = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      {/* <AuthContextProvider> */}
      {currentUser && currentUser.session.length === 0
        ? <PagesLogin />
        : (<>
            <Header />
            <Switch>
              <Route path="/" component={PagesDashboard} exact></Route>
              <Route path="/patients" component={PagesPatients}></Route>
              <Route path="/login" component={PagesLogin}></Route>
            </Switch>
          </>)
      }
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  );
}

export default Root;