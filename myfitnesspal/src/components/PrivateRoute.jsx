import { useContext } from "react"
import {Navigate} from "react-router-dom"
import {AuthContext} from "../context/AuthContext"


export const PrivateRoute = ({children}) => {
const {token} = useContext(AuthContext)

if(!token) {
    return <Navigate to={"/login"}/>
}
 return children;
}
