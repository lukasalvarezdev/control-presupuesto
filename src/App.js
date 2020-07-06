import React, { Fragment, useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Form from './components/Form';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

	// States
	const [ presupuesto, guardarPresupuesto ] = useState(0);
	const [ restante, guardarRestante ] = useState(0);

	const [ mostrarpregunta, actualizarPregunta ] = useState(true);

	const [ gastos, guardarGastos ] = useState([]);
	const [ gasto, guardarGasto ] = useState({});
	const [ creargasto, guardarCrearGasto ] = useState(false);

	// UseEffect que actualiza el restante
	useEffect( () => {
		if ( creargasto ) {
			// Modifica el state de los gastos (se usa el ...gastos para crear una copia, y luego añade el nuevo elemento al array)
			guardarGastos([
				...gastos,
				gasto
			]);

			// Resta el presupuesto
			const presupuestoRestante = restante - gasto.cantidad;
			guardarRestante(presupuestoRestante);

			// Reset a false
			guardarCrearGasto(false);
		}
	}, [gasto, creargasto, gastos, restante]);

	return (
		<Fragment>
			<div className="container">
				<header>
					<h1>Maneja tu presupuesto semanal</h1>
				</header>
				<div className="contenido-principal contenido">
					{ mostrarpregunta ? 					
						( 
							<Pregunta
								guardarPresupuesto={guardarPresupuesto}
								guardarRestante={guardarRestante}
								actualizarPregunta={actualizarPregunta}
							/> 
						) :
						(
							<div className="row">
								<div className="one-half column">
									<Form 
										actualizarPregunta={actualizarPregunta}
										guardarGasto={guardarGasto}
										guardarCrearGasto={guardarCrearGasto}
									/>
								</div>
								<div className="one-half column">
									<Listado
										gastos={gastos}
									/>
									<ControlPresupuesto 
										presupuesto={presupuesto}
										restante={restante}
									/>
								</div>
							</div>
						)
					}
				</div>
			</div>
		</Fragment>
	);

}

export default App;
