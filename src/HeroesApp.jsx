import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"


export const HeroesApp = () => {
  return (
    // Debido a que esta es la parte mas alta de la aplicacion la usaremos para colocar el <AuthProvider/>
    // De esta manera nos permite compartir toda la informacion que se encuentra en nuestro porvider en toda la aplicacion
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
