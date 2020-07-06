export const revisarPresupuesto = (presupuesto, restante) => {
    let clase;
    if ( (presupuesto / 4) > restante ) {
        clase = 'alert alert-danger'
    } else if ( (presupuesto / 2) > restante ) {
        clase = 'alert alert-warning'
    } else if ( restante < 0 ) {
        alert('Ten cuidado, has gastado todo tu presupuesto');
        clase = 'alert alert-success'
    } else {
        clase = 'alert alert-success'
    }

    return clase;
}