import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const Navbar = () => {

    // Cuando se realiza el login tendremos disponibles los datos del usuario
    const { user, logout } = useContext( AuthContext );  

    // El useNavigate se utiliza para la navegacion programatica, actualizando a url, no renderiza un elemento en el DOM 
    // como si lo hacen el componente Link y el NavLink, es una funcion que se encarga de actualizar a url, el useNavigate devuelve una funcion
    const navigate = useNavigate();

    const onLogout =() =>{ 
        
        logout();
        
        navigate('/login', {
            // El replace evita que se puede volver al historial anterior
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            {/* El componente Link sirve igual que un enlace en html pero la diferencia es que cuando se pulsa sobre el no se 
                recarga toda la pagina aumentando la fluidez del usuario, ya que Link esta integrado en el enrutamiento de React */}
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* Los NavLink sirven para agregar una funcionalidad similar a la de un enlace en html
                        pero que ademas me permite colocar clases activas cuando se encuentre en la pagina acual indicada */}
                    <NavLink 
                    // Para colocar la clase active se usa para cuando eeste seleccionado, por ello la activaremos si es la ruta activa
                    // Active no es la unica clase que se le puede colocar por ello hay que ssaber hacerlo, para poder hacerlo
                    // con cualquier clase
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': '' }`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': '' }`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive ? 'active': '' }`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        { user?.name }
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}