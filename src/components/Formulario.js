import React, {Fragment, useState} from 'react';
import { v4 as uuid } from 'uuid';

const Formulario = ({crearCita}) => {

    // Creando State de Citas
    const [cita, actualizarCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintoma: ''
    });

    const [ error, actualizarError] = useState(false)

    // Funcion que se ejecuta cada que el usuario escribe en un input
    const actualizarState = e => {
        actualizarCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    // Extraer los valores
    const { mascota, propietario, fecha, hora, sintoma } = cita

    //cuando el usuario presiona agregar cita
    const submitCita = e =>{
        e.preventDefault();
        
        // Validar
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintoma.trim() === ''){
            actualizarError(true)
            return;
        }
        //Eliminar mensaje previo
        actualizarError(false)

        // Asignar un ID
        cita.id = uuid();

        // Crear una cita
        crearCita(cita);

        //Reiniciar form
        actualizarCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintoma: ''
        })
    }

    return ( 
        <Fragment>
            <h2>Crear cita</h2>

            { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}

            <form
                onSubmit={submitCita}
            >
                <label>Nombre Mascota</label>
                <input 
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={actualizarState}
                    value={mascota}
                />

                <label>Nombre Duenio</label>
                <input 
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Duenio de la mascota"
                    onChange={actualizarState}
                    value={propietario}
                />

                <label>Fecha </label>
                <input 
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={fecha}
                />

                <label>Hora</label>
                <input 
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={actualizarState}
                    value={hora}
                />

                <label>Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintoma"
                    onChange={actualizarState}
                    value={sintoma}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>
                
            </form>
        </Fragment>
     );
}
 
export default Formulario;