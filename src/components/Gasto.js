import React from 'react';

const Gasto = ({nombreGasto, cantidad}) => ( 
    <li className="gastos">
        <p>
            {nombreGasto}
            <span className="gasto">$ {cantidad}</span>
        </p>
    </li>
);

export default Gasto;