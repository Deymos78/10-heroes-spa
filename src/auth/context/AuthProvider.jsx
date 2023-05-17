import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false
}

// Este es un componente funcional comun y corriente con la diferencia de que recibira entre las props los children
// lo que vendria a ser los componentes hijos 
export const AuthProvider = ({ children }) => {

    const [authState, dispatch]  = useReducer( authReducer, initialState );

    return(
        <AuthContext.Provider value={{}}>
            { children }
        </AuthContext.Provider>
    )
}