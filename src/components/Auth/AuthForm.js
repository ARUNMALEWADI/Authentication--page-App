import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailref=useRef();
  const passwordref=useRef();
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,SetLoading]=useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const SubmitHandler=(e)=>{
    e.preventDefault();
    const enteredmail=emailref.current.value;
    const enteredpassword=passwordref.current.value;
  SetLoading(true)
  let url;
    if(isLogin)
    { url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB9eeG_SpqDiXGaCCiZBeIIJzuc-Y2L9D4'

    }
    else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB9eeG_SpqDiXGaCCiZBeIIJzuc-Y2L9D4'
    }

    fetch(url,{method:'POST',
  body:JSON.stringify({email:enteredmail,password:enteredpassword,returnSecureToken:true}),
  headers:{'content-type':'application/json'}
}).then(response=>{
     SetLoading(false)
    if(response.ok)
    {    return response.json() }
    else{
      return response.json().then(data=>{
        let errormessage="Authentication failed"
        // if(data&&data.error&&data.error.message)
        //   {errormessage=data.error.message;
          
        //   }
        
         throw new Error(errormessage)
      })
    }
  }).then((data)=>{ 
    console.log(data);}).catch((err)=>{  alert(err.message);})
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form  onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={emailref} required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            ref={passwordref}
            required
          />
        </div>
        <div className={classes.actions}>
         {!isLoading && <button> {!isLogin ? 'Sign Up' : 'Login '}</button>}
         <div className='auth'>
         {isLoading&&<p>Sending request....</p>}
         </div>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
