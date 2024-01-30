import { useState } from "react";
function Button(props) {

    const [color,setColor] = useState("#151414");
    document.body.style.backgroundColor = color;

    return (
        <button id={props.id} 
                onClick={()=> setColor(props.function)}>
                    {props.color}  
        </button>
     )
}
export default Button
