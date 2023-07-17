import { useState } from "react"

export default function Form (){
    const[title, setTitle] = useState("")
    const[reps, setReps] = useState("")
    const[load, setLoad] = useState("")
    const[error, setError] = useState("")

    const handleSubmit = async (e)=>{
        e.preventDefault()
        
        const workout = {title, reps, load}
        const response = await fetch("http://localhost:4040/workouts",{
            method:'POST',
            body:JSON.stringify(workout),
            headers:{
                'Content-Type':"application/json"
            }
        })

        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setError(null)
            setReps("")
            setLoad("")
            setTitle("")
            console.log("successful😁")
        }
    }
    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>
            <label>Exercise Title:</label>
            <input type="text" 
            onChange={(e)=>setTitle(e.target.value)}
                value={title}
                />

                 <label>Reps:</label>
            <input type="number" 
            onChange={(e)=>setReps(e.target.value)}
                value={reps}
                />

            <label>Load(kg):</label>
            <input type="number" 
            onChange={(e)=>setLoad(e.target.value)}
                value={load}
                />
            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}