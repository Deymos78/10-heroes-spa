
// Un ROUTER contiene la informacion de las rutas de la aplicacion, todas las rutas de la aplicacion pueden estar en un router

import { Route, Routes } from "react-router-dom";

import { HeroesRoutes } from "../heroes";
import { LoginPage } from "../auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

// AppRouter es el nombre que se suele dar al primer router de la aplicacion
export const AppRouter = () => {
  return (
    <> 

        <Routes>

            <Route path="/login" element={
              <PublicRoute>
                <LoginPage/>
              </PublicRoute>
            
            }/>


            {/* <Route path="login" element={<LoginPage />}/> */}

            {/* En este Route vamos a proteger todas estas rutas, en el caso de que no este logeado no podra acceder a ninguna de estar rutas */}
            <Route path="/*" element={
              // Envolvemos las rutas a proteger en el <PrivateRoute></PrivateRoute> que hemos creado, el cual comprobara si el susuario esta logeado
              // si lo esta nos dara acceso a sus childrens o a las rutas definidas dentro de heroesRoutes y sino estamos logeados
              // entonces nos redigira a la pagina de logeo
              <PrivateRoute>
                <HeroesRoutes />
              </PrivateRoute>
            } />

            {/* Con esta ruta apuntaremos a heroes routes donde tendremos un componente Routes con varias Route */}
            {/* Tambien logramos que cualquier ruta que no sea login pase por el componente de HeroesRoutes */}
            {/* <Route path="/*" element={<HeroesRoutes />}/> */}

        </Routes>
         
    </>
  )
}
