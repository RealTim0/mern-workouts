import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

const Signup = ()=>{
    const[email, setEmail]  = useState('')
    const[username, setUsername]  = useState('')
    const[password, setPassword]  = useState('')
    const { signup, error, isLoading } = useSignup()


    const handleSubmit = async (e) =>{
        e.preventDefault()

        await signup(email, username, password)
        
    }
    return(
        <form  className='signup' onSubmit={handleSubmit} >
            <h3>Sign Up</h3>
            <label>Email:</label>
            <input
                type='email'
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Email"
                value={email}
            />
            <label>Username:</label>
            <input
                type='text'
                onChange={(e)=> setUsername(e.target.value)}
                placeholder="Username"
                value={username}
            />
            <label>Password:</label>
            <input
                type='password'
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="ABCabc123!%$@"
                value={password}
            />
            {error && <div className="error">{error}</div>}
                <button disabled={isLoading}>Sign Up</button>
        </form>
    )
}

export default Signup