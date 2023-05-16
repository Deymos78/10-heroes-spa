
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    // Usaremos el useMemo para poder guardar los valores de la ejecucion de la funcion, y en el caso de que hay un cambio en el publiser
    // volvaremos a ejecutar la funcion  
    const heroes = useMemo(() => getHeroesByPublisher( publisher, [ publisher ] )); 

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        {

            heroes.map( hero =>(
                <HeroCard
                    key={hero.id}
                    {...hero}
                />
            ))
        }
    </div>
  )
}
