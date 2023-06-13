import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import AuthContext from '../../store/AuthContextProvider';

const MainNavigation = () => {
  const authctx=useContext(AuthContext)
  console.log(authctx.islogin);
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
         { !authctx.islogin && <li>
            <Link to='/auth'>Login</Link>
          </li>}
          { authctx.islogin && <li>
            <Link to='/profile'>Profile</Link>
          </li>}
         {authctx.islogin&&(<li>
            <button>Logout</button>
          </li>)}
          
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
