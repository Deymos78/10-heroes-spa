import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"


import { types } from "../types/types"

// Creamos un estado inicial que lo inicializaremos en false
const initialState = {
    logged: false
}

// Esta sera nuestra funcion de inicializador
const init = () => {
    // Recuperamos los valores de user del localStorage
    const user =JSON.parse(localStorage.getItem('user'));

    return { 
        logged: !!user,
        user: user
    }
}

// Este es un componente funcional comun y corriente con la diferencia de que recibira entre las props los children
// lo que vendria a ser los componentes hijos 
// El AuthProvider utiliza el AuthContext con el objetivo de  que sea el componente que proveea la informacion a toda la aplicacion
export const AuthProvider = ({ children }) => {

    // Creamos un useReducer para colocar el estado inicial
    const [authState, dispatch]  = useReducer( authReducer, initialState, init );

    // Creamos una funcion login, donde monta el action para pasarselo al reducer a traves del dispatch
    const login = (name ='') => {

        const user = { id: 'ABC', name }
        
        const action = {
            type: types.login,
            payload: user
        }

        // Almacenas el usuario en el almacenamiento local y como solo almacena string, convertimos el objeto en una cadena con el metodo stringify
        localStorage.setItem( 'user', JSON.stringify( user ));
        // Con esta funciona accederremos al reducer 
        dispatch(action);
    }

    const logout = () => {
        localStorage.removeItem( 'user' );
        const action = {
            type: types.logout,

        }
        dispatch(action);
    }

    return(
        // Usando el componente que usamos para crear el contexto, le pasamos el valor que se va a compartir entre todos los children
        <AuthContext.Provider value={{ 
            ...authState,
            login: login,
            logout: logout
         }}>
            { children }
        </AuthContext.Provider>
    )
}