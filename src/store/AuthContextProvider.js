import React, { createContext, useState } from 'react'

const AuthContext=React.createContext({token:'',
islogin:false,
login:(token)=>{},
logout:()=>{}
})

export const AuthContextProvider = (props) => {
  const initial=localStorage.getItem('token')
    const[token,setToken]=useState(initial)

    const UserIsloggedin=!!token;

    const loginHandler=(token)=>{
      localStorage.setItem('token',token)
            setToken(token)
            setTimeout(()=>{localStorage.removeItem('token')
            console.log('hi');
          },10000)
    }
    const logoutHandler=()=>{
        setToken(null)
        localStorage.removeItem('token')
        
    }
    const helper={
        token:token,
        islogin:UserIsloggedin,
        login:loginHandler,
        logout:logoutHandler
    }
  return <AuthContext.Provider value={helper}>
    {props.children}
  </AuthContext.Provider>
}

export default AuthContext;