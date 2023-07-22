import { useEffect } from "react"
import Details from "../components/workouts"
import Form from "../components/form"
import { useWorkoutContext } from "../hooks/useWorkoutContext"
import {useAuthContext} from "../hooks/useAuthContext"

const Home = () =>{
    const {workouts, dispatch} = useWorkoutContext()
    const {user} = useAuthContext()
    
   useEffect(()=>{
    const fetchWorkouts = async()=>{
        const response = await fetch("http://localhost:4040/workouts",{
            headers:{
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()


        if(response.ok){
          dispatch({type:'SET_WORKOUTS', payload:json})  
        }
        }
    if(user){
    fetchWorkouts()
   }
    },[dispatch, user])

    return(
        <div className="home">
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <Details key={workout._id} workout={workout}/>
                    
                ))}
                
            </div>
            <Form />
        </div>
    )
}
export default Home