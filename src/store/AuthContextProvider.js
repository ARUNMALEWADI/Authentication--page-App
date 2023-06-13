import React, { createContext, useState } from 'react'

const AuthContext=React.createContext({token:'',
islogin:false,
login:(token)=>{},
logout:()=>{}
})

export const AuthContextProvider = (props) => {
    const[token,setToken]=useState(null)

    const UserIsloggedin=!!token;

    const loginHandler=(token)=>{
            setToken(token)
    }
    const logoutHandler=()=>{
        setToken(null)
        
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