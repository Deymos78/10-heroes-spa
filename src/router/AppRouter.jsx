
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
            

            <Route path="/*" element={<HeroesRoutes />}/>

        </Routes>
         
    </>
  )
}
