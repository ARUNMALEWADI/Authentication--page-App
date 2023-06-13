import { useContext, useRef } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/AuthContextProvider';
import {useHistory} from 'react-router-dom'

const ProfileForm = () => {
  const authctx=useContext(AuthContext)
  const newpasswordref=useRef()
  const history=useHistory();
  const SubmitHandler=(e)=>{
    e.preventDefault();
    const enteredpassword=newpasswordref.current.value

    fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB9eeG_SpqDiXGaCCiZBeIIJzuc-Y2L9D4',{
      method:'POST',
      body:JSON.stringify({idToken:authctx.token,
      password:enteredpassword,
      returnSecureToken:false},),
      headers:{'Content-type':'application/json'}
    }).then((res)=>{ history.replace()})

  }

  return (
    <form className={classes.form} onSubmit={SubmitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password' >New Password</label>
        <input type='password' id='new-password'ref={newpasswordref}  />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
