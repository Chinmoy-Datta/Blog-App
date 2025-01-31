import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state=>state.auth.status)

    useEffect(()=>{
        //improve this conditionals
        // if(authStatus !== authentication){
            //  navigate(authentication ? "/login" : "/")
        // }
        if(authentication && authStatus!==authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus!==authentication){//take authentication false in case of login then try this condition using the logic
            navigate("/")
        }
        
        setLoader(false)

    },[authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>
             
}

