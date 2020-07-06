import React, {Fragment, useState} from 'react';
import Error from '../components/Error';
import shortid from 'shortid';

const Form = ({actualizarPregunta, guardarGasto, guardarCrearGasto}) => {

    // State para el error
    const [error, guardarError] = useState(false);

    // State para los campos del form
    const [ nombreGasto, guardarNombreGasto ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);

    // Cuando se agrega el gasto o se envia el formulario
    const agregarGasto = e => {
        e.preventDefault();

        // Validar
        if ( nombreGasto.trim() === '' || cantidad < 1 || isNaN(cantidad) ) {
            guardarError(true);
            setTimeout( () => {
                guardarError(false);
            }, 5000);
            return;
        }
        guardarError(false);

        // Construir el gasto
        const gasto = {
            nombreGasto,
            cantidad,
            id: shortid.generate()
        }

        // Pasa el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // Resetear el formulario
        guardarNombreGasto('');
        guardarCantidad(0);
    }

    return ( 
        <Fragment>
            <h2>Agrega tus gastos aquí</h2>
            { error ? <Error mensaje="Hubo un error, todos los campos son obligatorios"/> : null }
            <form
                onSubmit={agregarGasto}
            >
                <div className="campo">
                    <label htmlFor="nombre-gasto">Nombre del gasto</label>
                    <input
                        name="nombre-gasto"
                        className="u-full-width"
                        placeholder="Ejemplo: Transporte"
                        type="text"
                        value={nombreGasto}
                        onChange={ e => guardarNombreGasto(e.target.value) }
                    />
                </div>
                <div className="campo">
                    <label htmlFor="cantidad-gasto">Cantidad del gasto</label>
                    <input
                        name="cantidad-gasto"
                        className="u-full-width"
                        type="number"
                        value={cantidad}
                        onChange={ e => guardarCantidad( Number(e.target.value) ) }
                    />
                </div>
                <input
                    className="button-primary u-full-width"
                    value="Agregar gasto"
                    type="submit"
                />
                <button 
                    className="boton-otro-pres"
                    onClick={ e => {
                        e.preventDefault();
                        actualizarPregunta(true);
                    }}
                >Agregar otro presupuesto</button>
            </form>
        </Fragment>
    );
}

export default Form;