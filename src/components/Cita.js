const Cita = ({cita, eliminarCita}) => ( 
    <div className="cita">
        <p>Mascota: <span>{cita.mascota}</span></p>
        <p>Duenio: <span>{cita.propietario}</span></p>
        <p>Fecha: <span>{cita.fecha}</span></p>
        <p>Hora: <span>{cita.hora}</span></p>
        <p>Sintoma: <span>{cita.sintoma}</span></p>

        <button
            className="button eliminar u-full-width"
            onClick={() => eliminarCita(cita.id)}
        >Eliminar &times;</button>
    </div>
);
 
export default Cita;