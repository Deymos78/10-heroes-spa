import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

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
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className="nav-item nav-link text-primary">
                        Andres
                    </span>

                    <button
                        className="nav-item nav-link btn"
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}