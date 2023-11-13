import "bootstrap/dist/css/bootstrap.css";
import MostrarContador from "./MostrarContador";
import Incrementar from "./Incrementar";
import { useState } from "react";

//este va a contener todos los estados del contador
//vamos a hacer un componente funcional
//ya habiamos hecho uno en otras clases, que era todo en uno, ahora hacemos todo en varios componentes

const ContadorPropsDrilling = () => {
    
    const [contador, setContador] = useState(0);

    return (
        <div className="border mx-auto text-center p-3 shadow" style={{maxWidth:"60w"}}>
            <h3>Ejemplo de contador con Props-Drilling</h3>
            <MostrarContador valor={contador}/>
            <Incrementar valor={contador} onModificarContador={(nuevoValor)=> {setContador(nuevoValor)}}/>
        </div>
    )
}

export default ContadorPropsDrilling;