import { types } from "../types/types"


export const authReducer = (state = {} , action) => {
    
    
    switch( action.type ){
        case types.login:
            return{
                // Ya que no sabemos si en el futuro vamos a tener mas propiedades en nuestro estado desestructuramos nuestro state
                // para mantener el state anterior y reeemplazar lo que nos interesa, de esta manera no perdemos lo que tengamos 
                ...state,
                logged: true,
                name: action.payload
            }

        case types.logout:
            return {
                logged: false
            }
        
        default:
            return state;

    }
}