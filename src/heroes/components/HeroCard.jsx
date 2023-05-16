import { Link } from "react-router-dom"


// Tambien podemos crear un componente que solo funcione aqui para que me muestre los characters en caso de que no sea igual al alter_ego
// De esta forma controlamos mejor la impresion de datos en la pantalla del ususario
const CharactersByHero = ({alter_ego, characters}) => {
    // if(alter_ego === characters) return (<></>);
    // return <p>{ characters }</p>

    return ( alter_ego === characters)
    ? <></>
    : <p>{ characters }</p>
}

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {


    // Aqui montamos la direcciona al direcctorio donde se ecuentra la imagen
    const heroImageUrl = `/assets/heroes/${ id }.jpg`

    // Esta es una manera de simplificar el html y la lectura del codigo
    // const charactersByHero= (<p>{characters}</p>);
    
  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4"> 
                    <img src={ heroImageUrl } className="card-img" alt={ superhero} />
                </div>

                <div className="col-8">

                    <div className="card-body">

                        <h5 className="card-title"> { superhero }</h5>
                        <p className="card-text">{ alter_ego }</p>

                        {/* Vamos a mostrar los characters solo si no es igual al alter ego de esta forma no parecera una repeticion */}
                        {/* {
                            ( alter_ego !== characters ) && (charactersByHero)
                            ( alter_ego !== characters ) && (<p>{ characters }</p>)
                        } */}

                        <CharactersByHero characters={ characters } alter_ego={ alter_ego }/>  

                        <p className="card-text">
                            <small className="text-muted">{ first_appearance }</small>
                        </p>

                        {/* En este link se montara una url donde se le pasara el id del persona que despues la recogeremos */}
                        <Link to={`/hero/${ id }`}>
                            Mas...
                        </Link>


                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
