import {useState} from "react";
import {AddCategory, GifGrid} from './Components/';

export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) =>{
        if (categories.includes(newCategory)) return;
        setCategories( [newCategory, ...categories]);
    }
    return (
        <>
            <h1>GifExpertApp</h1>
            {/*Emitir evento al ppadre*/}
            <AddCategory
                onNewCategory = {event => onAddCategory(event)}/>
            {/*<button onClick={onAddCategori}>Agregar</button>*/}
            {categories.map(category => (
                    <GifGrid category={category} key={ category } />
                ))
            }
        </>
    );
}