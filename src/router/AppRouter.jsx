
// Un ROUTER contiene la informacion de las rutas de la aplicacion, todas las rutas de la aplicacion pueden estar en un router

import { Navigate, Route, Routes } from "react-router-dom";
import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPage } from "../auth/pages/LoginPage";
import { Navbar } from "../userInterface";

// AppRouter es el nombre que se suele dar al primer router de la aplicacion
export const AppRouter = () => {
  return (
    <>

        <Navbar/>

        <Routes>
            <Route path="marvel" element={<MarvelPage/>}/>
            <Route path="dc" element={<DcPage />}/>


            <Route path="login" element={<LoginPage />}/>
            <Route path="/*" element={<Navigate to="/marvel" />}/>

        </Routes>
         
    </>
  )
}
