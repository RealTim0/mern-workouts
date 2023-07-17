import { useEffect, useState } from "react"
import Details from "../components/workouts"
import Form from "../components/form"

export default function Home (){
 const[workouts, setWorkouts] = useState(null)

   useEffect(()=>{
    const fetchWorkouts = async()=>{
        const response = await fetch("http://localhost:4040/workouts")
        const json = await response.json()


        if(response.ok){
            
            setWorkouts(json)
        }
    }
    fetchWorkouts()
   },[])

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