import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Pacientes = ({citas}) => {

    if(citas.length === 0) return null; 

    return (
        <Fragment>
            <h1 className="my-5">Administrador de Pacientes</h1>

            <div className="container mt-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5 d-flex justify-content-center">
                        <Link to={'/nueva'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Cita</Link>
                    </div>

                    <div className="col-md-8 mx-auto">
                        <div className="list-group">
                            {citas.map(cita => (
                                <Link to={`/cita/${cita._id}`} key={cita._id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{cita.nombre}</h3>
                                        <small className="fecha-alta">
                                            {cita.fecha} - {cita.hora}
                                        </small>
                                    </div>

                                    <p className="mb-0">
                                        {cita.sintomas}
                                    </p>
                                    <div className="contacto py-3">
                                        <p>Dueño: {cita.propietario}</p>
                                        <p>Teléfono: {cita.telefono}</p>
                                    </div> 
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>

        </Fragment>

     );
}
 
export default Pacientes;