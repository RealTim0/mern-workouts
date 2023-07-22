import {Link} from "react-router-dom"
import {useLogout} from "../hooks/useLogout"
import { useAuthContext } from "../hooks/useAuthContext"

export default function Navbar (){
    const {user} = useAuthContext()
    const{logout} = useLogout()
    const handleClick = () =>{
       logout()
    }
    return(
        <header>
            <div className="container">
                <Link to="/" >
                    Workout Buddy
                </Link>
                <nav>
                   
                {user && <div>
                    <span>Welcome {user.name}🤗</span>
                        <button onClick={handleClick}>Log out</button>
                    </div>}
                    {!user && <div>
                    <Link to="/signup" >
                    Signup
                </Link>
                <Link to="/login" >
                   Login
                </Link>
                    </div>}
                </nav>
                
            </div>
        </header>
    )
}