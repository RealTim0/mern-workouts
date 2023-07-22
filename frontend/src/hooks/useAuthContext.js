import { AuthContext } from "../context/workout";
import { useContext } from "react";

export const useAuthContext = () =>{
   const context = useContext(AuthContext) 

   if(!context){
       throw  Error("not in context")
   }
   return context
}
