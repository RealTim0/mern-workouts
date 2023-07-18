import { useEffect } from "react"
import Details from "../components/workouts"
import Form from "../components/form"
import { useWorkoutContext } from "../hooks/useWorkoutContext"

export default function Home (){
    const {workouts, dispatch} = useWorkoutContext()

   useEffect(()=>{
    const fetchWorkouts = async()=>{
        const response = await fetch("http://localhost:4040/workouts")
        const json = await response.json()


        if(response.ok){
          dispatch({type:'SET_WORKOUTS', payload:json})  
          
        }
    }
    fetchWorkouts()
   },[dispatch])

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
