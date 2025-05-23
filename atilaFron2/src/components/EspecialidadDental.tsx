import BloqueEspecialidad from './BloqueEspecialidad'

function EspecialidadDental() {
  return (
    <BloqueEspecialidad
      titulo="Odontología"
      imagen="/public/foto3.jpg"
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
