import { useWorkoutContext } from "../hooks/useWorkoutContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
export default function Details ({workout}){

    const { dispatch } = useWorkoutContext()
    const  HandleClick = async () => {
       

        const response = await fetch('http://localhost:4040/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()
        if (response.ok) {
            dispatch({ type: "DELETE_WORKOUT", payload: json })
        }
    }

    return(
        <div className="workout-details">
           <h4>{workout.title}</h4> 
           <p><strong>Reps: </strong>{workout.reps}</p> 
           <p><strong>Load (kg):</strong> {workout.load}</p> 
           <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
            <span onClick={ HandleClick}>🚮</span>
        </div>
    )
}