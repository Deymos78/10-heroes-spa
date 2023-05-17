import { types } from "../types/types"

// El reducer recibira el state y el action por dos parametros , el state lo definimos a vacio 
export const authReducer = (state = {} , action) => {
    
    // Usamo un switch para definir el tipo de accion que vamos a realizar
    switch( action.type ){
        case types.login:
            return{
                // Ya que no sabemos si en el futuro vamos a tener mas propiedades en nuestro estado desestructuramos nuestro state
                // para mantener el state anterior y reeemplazar lo que nos interesa, de esta manera no perdemos lo que tengamos 
                ...state,
                logged: true,
                user: action.payload
            }

        case types.logout:
            // Como no vamos a necesitar ningun dato mas  solo devolvermos el logged a false
            return {
                logged: false
            }
        
        default:
            return state;

    }
}