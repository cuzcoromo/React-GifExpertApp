import {useFetchGifs} from '../Hooks/useFetchGifs';

import {GifItem} from './index';

export const GifGrid = ({category}) =>{

    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3 >{ category }</h3>
            {
                isLoading && (<h2>Cargando....</h2>)
            }
            <div className="card-grid">
                {
                    images.map( (el) =>(
                        //esparcir todas las propertis dentreo del componente GITITEM
                        <GifItem
                            key={el.id}
                            {...el}
                        />
                    ))
                }
            </div>
        </>
    )};