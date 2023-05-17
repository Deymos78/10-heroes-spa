import { useContext } from "react"
import { AuthContext } from "../auth";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({children}) => {
    // Primero recuperaremos el contexto para conseguir el estado del login

    const { logged } = useContext( AuthContext );

    // En este caso haremos la comporbacion para ver si esta autenticado o no en este caso esperamos que no este autenticado
  return ( !logged )
  ? children
  : <Navigate to="/marvel"/>
}
