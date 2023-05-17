import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../userInterface"
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages"


export const HeroesRoutes = () => {
  return (
    <>
        {/* Al renderizar el Navbar en este punto todas las rutas que se encuentren en este componente tendras acceso al Navbar */}
        <Navbar/>

        <div className="container">
          {/* El componente Routes se usa para agrupar varias rutas y definir una jerarquia de rutas anidadas
              Routes permite definir rutas hijas que se renderizan dentro de una ruta principal */}
              {/* En este Routes q vendra desde AppRouter comprobara la ruta especificada en la url con cada elemento dentro de Routes */}
            <Routes>
              {/* Cuando la url es igual a alguno de los path especificados se renderizan los componentes especificados */}
                <Route path="marvel" element={<MarvelPage/>}/>
                <Route path="dc" element={<DcPage />}/>
                
                
                <Route path="search" element={<SearchPage />}/>
                
                {/* Definimos un parametro variable en la URl donde se asociara a un valor que se le pase por url*/}
                <Route path="hero/:id" element={<HeroPage />}/>

                {/* Search, Hero by id */}
                {/* En el caso de que la url no coincida con ninguna ruta lo que hara sera enviar a este Componente por defecto */}
                <Route path="/" element={<Navigate to="/marvel" />}/>

            </Routes>
        </div>
        
    
    </>
  )
}
