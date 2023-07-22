import { useState } from 'react'

export default function Login (){
    const[email, setEmail]  = useState('')
    const[password, setPassword]  = useState('')


    const handleSubmit = async (e) =>{
        e.preventDefault()
        setEmail("")
        setPassword("")
    }
    return(
        <form  className='login' onSubmit={handleSubmit} >
            <h3>Login</h3>
            <label>Email:</label>
            <input
                type='email'
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email"
                autocomplete="off"
                value={email}
            />
           <label>Password:</label>
            <input
                type='password'
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Password"
                autocomplete="off"
                value={password}
            />
                <button>Login</button>
        </form>
    )
}
