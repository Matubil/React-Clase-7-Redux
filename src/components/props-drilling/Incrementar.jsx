import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const Incrementar = ({valor, onModificarContador}) => {

    return (
        <button className="btn btn-primary"
            onClick={() => {onModificarContador(valor+1)}}>
            +
        </button>
    )
}

export default Incrementar;