import { useWorkoutContext } from "../hooks/useWorkoutContext"
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { useAuthContext } from "../hooks/useAuthContext"
export default function Details ({workout}){
    const {user} = useAuthContext()
    const { dispatch } = useWorkoutContext()
    const  HandleClick = async () => {
       

        const response = await fetch('https://mern-workouts-backend.vercel.app/workouts/' + workout._id, {
            method: 'DELETE',
            headers:{
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()
        if(!user){
            return 
        }
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
