import React from 'react';
import Gasto from '../components/Gasto';

const Listado = ({gastos}) => ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>
        {
            gastos.map( gasto => (
                <Gasto 
                    key={gasto.id}
                    nombreGasto={gasto.nombreGasto}
                    cantidad={gasto.cantidad}
                />
            ))
        }

    </div>
);

export default Listado;