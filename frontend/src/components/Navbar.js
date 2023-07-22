import {Link} from "react-router-dom"

export default function Navbar (){
    return(
        <header>
            <div className="container">
                <Link to="/" >
                    Workout Buddy
                </Link>
                <nav>
                    <div>
                    <Link to="/signup" >
                    Signup
                </Link>
                <Link to="/login" >
                   Login
                </Link>
                    </div>
                </nav>
                
            </div>
        </header>
    )
}