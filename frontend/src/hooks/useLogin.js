import { useState } from "react"
import {useAuthContext} from './useAuthContext'

export const useLogin = () => {
    const[isLoading, setIsLoading] = useState(null)
    const[error, setError] = useState(null)
    const {dispatch} = useAuthContext()


    const login = async(email,  password)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://mern-3g50.onrender.com/users/login/', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,password})  
        })

        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type:'LOGIN', payload:json})

            setIsLoading(false)
        }
        
    }
return{ login, isLoading, error}
}
