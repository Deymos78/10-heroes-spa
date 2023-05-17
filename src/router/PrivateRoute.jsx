import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../auth';

export const PrivateRoute = ({ children }) => {

    // Usamos el contexto para recuperar el estado de logeo del usuario
    const { logged } = useContext( AuthContext);
    // Usamos el hook useLocation para saber en que lugar nos encontramos por url
    // En este caso usaremos el pathname y el search para obtener el lugar de la url y los datos del search
    const { pathname, search } =  useLocation();

    // Ahora montamos el ultimo lugar donde nos encontramos y lo que estmoas buscando en caso de que salgamos de la aplicacion
    // De esta manera cuando volvamos a iniciar sesion podremos saber donde estabamos y lo que estabamos buscando dentro de la aplicacion
    const lastPath = pathname + search;
    // Almacenamos la ruta con los valores de busqueda dentro de un localStorage para poder colocar la ruta cuando volvamos a iniciar sesion
    localStorage.setItem('lastPath', lastPath);

    // Aqui se realiza una comprobacion de si esta autenticado o no, en caso de que este autenticado mostrara el children
    // En el caso de que no este autenticado lo que se hara es reenviar al usuario a la pantalla de login
  return ( logged )
  ? children
  : <Navigate to="/login" />
}
