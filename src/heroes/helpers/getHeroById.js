import { heroes } from "../data/heroes"

export const getHeroById = ( id ) => {

    // Hacemos una comprobacion de si nuestro heroe.id es igual al id que recibimos en nuestro componente
    return heroes.find( hero => hero.id === id);

}