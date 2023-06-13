import { Switch, Route ,Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext, { AuthContextProvider } from './store/AuthContextProvider';
import { useContext } from 'react';

function App() {

  const authctx=useContext(AuthContext)
  return (
    <AuthContextProvider>
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
       { !authctx.islogin &&<Route path='/auth'>
        <AuthPage />
        </Route>}
     {authctx.islogin &&  <Route path='/profile'>
        <UserProfile />
        </Route>  }
        <Route path='*'>
        <Redirect to='/'></Redirect></Route>
      </Switch>
    </Layout>
    </AuthContextProvider>
  );
}

export default App;
