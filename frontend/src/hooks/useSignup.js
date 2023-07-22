import { useState } from "react"
import {useAuthContext} from './useAuthContext'

export const useSignup = () => {
    const[isLoading, setIsLoading] = useState(null)
    const[error, setError] = useState(null)
    const {dispatch} = useAuthContext()


    const signup = async(email, username, password)=>{
        setIsLoading(true)
        setError(null)

        const response = await fetch('mernworkoutsbackend-1jsevpdw0-realtim0.vercel.app/users/signup/', {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({email,username,password})  
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
return{ signup, isLoading, error}
}
