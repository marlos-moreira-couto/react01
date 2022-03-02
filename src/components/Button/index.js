import React from "react";

const Button = (props) => {
    return (
        <div>
            <div>{props.title} - {props.descricao}</div>
            <button onClick={props.press}>{props.children}</button>
        </div>
    );

}

export default Button;
