import BloqueEspecialidad from './BloqueEspecialidad'

function EspecialidadKinesiologia() {
  return (
    <BloqueEspecialidad
      titulo="Kinesiología"
      imagen="/assets/kinesiologia.jpg" // Asegúrate de que esta imagen esté en public/assets/
      servicios={[
        'Rehabilitación traumatológica',
        'Terapia manual',
        'Electroestimulación',
        'Evaluación postural',
      ]}
    />
  )
}

export default EspecialidadKinesiologia
