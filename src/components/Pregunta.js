import React, { Fragment, useState } from 'react';
import Error from '../components/Error';

const Pregunta = ({guardarPresupuesto, guardarRestante, actualizarPregunta}) => {

    // State para el error
    const [error, guardarError] = useState(false);

    // State para la cantidad
    const [cantidad, guardarCantidad] = useState(0);

    const agregarPresupuesto = e => {
        e.preventDefault();

        // Validar
        if ( cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            setTimeout( () => {
                guardarError(false);
            }, 5000);
            return;
        }
        guardarError(false);

        // Pasa validacion
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad)

        actualizarPregunta(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="Hubo un error, por favor introduce una cantidad válida"/> : null }

            <form onSubmit={agregarPresupuesto}>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e => guardarCantidad( Number(e.target.value) )}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />

            </form>
        </Fragment>
    );
}

export default Pregunta;