import BloqueEspecialidad from './BloqueEspecialidad'

function EspecialidadDental() {
  return (
    <BloqueEspecialidad
      titulo="Odontología"
      imagen="/assets/dental.jpg"
      servicios={[
        'Limpieza dental',
        'Ortodoncia invisible',
        'Implantes dentales',
        'Blanqueamiento',
      ]}
    />
  )
}

export default EspecialidadDental
