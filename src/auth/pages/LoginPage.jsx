import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";


export const LoginPage = () => {

    // Usandon el useContext que es un hook de react nos permite acceder al valor de un contexto dentro de un componente funcional
    // Nos proporciona una forma sencilla de consumir y utilizar  el valor del contexto sin necesidad de usar el CONSUMER de forma explicita
    // NOs ahorra el envolver el componente en un consumer
    const { login } = useContext( AuthContext );

    // Realizamos una instancia del useNavigate 
    const navigate = useNavigate();


    // Cuando se ejecuta la funcion se pasa el valor del usuario, cuando lo recibie cambia el valor del logeo y guarda el nombre del usuario
    const onLogin =() =>{

      const lastPath = localStorage.getItem('lastPath') || '/';

      login('Andres Ch');

      // Navega a la pagina de marvel por defecto
      navigate(lastPath,{
        replace: true
      })
    }


  return (

    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button 
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
