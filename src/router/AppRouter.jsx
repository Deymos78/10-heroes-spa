
// Un ROUTER contiene la informacion de las rutas de la aplicacion, todas las rutas de la aplicacion pueden estar en un router

import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";

// AppRouter es el nombre que se suele dar al primer router de la aplicacion
export const AppRouter = () => {
  return (
    <> 

        <Routes>

            <Route path="login" element={<LoginPage />}/>

            {/* Con esta ruta apuntaremos a heroes routes donde tendremos un componente Routes con varias Route */}
            {/* Tambien logramos que cualquier ruta que no sea login pase por el componente de HeroesRoutes */}
            <Route path="/*" element={<HeroesRoutes />}/>

        </Routes>
         
    </>
  )
}
