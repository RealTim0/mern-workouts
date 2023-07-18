 import { WorkoutsContext } from "../context/workout";
 import { useContext } from "react";

 export const useWorkoutContext = () =>{
    const context = useContext(WorkoutsContext)

    if(!context){
        throw  Error("not in context")
    }
    return context
 }