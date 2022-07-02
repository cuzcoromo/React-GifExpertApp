import {useState} from "react";

export const AddCategory = ({onNewCategory}) =>{
    const [inputValue, setInputValue] = useState('');
    const onInputValue = ({target}) =>{
        setInputValue(target.value)
    }
    const onPrevent = (event) =>{
        event.preventDefault();
        //evitar ingresar si esta VACIO EL CAMPO
        const removeTrim = inputValue.trim();
        if (removeTrim.length <=2) return;
        // console.log(inputValue)
        // console.log (onNewCategory(inputValue));
        onNewCategory(removeTrim);
        setInputValue('');
    }
    return (
        <form onSubmit={onPrevent}>
            <input
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={onInputValue}
            />
        </form>
    );
}