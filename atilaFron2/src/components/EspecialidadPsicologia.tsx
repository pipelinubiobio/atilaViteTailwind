import BloqueEspecialidad from './BloqueEspecialidad'

function EspecialidadPsicologia() {
  return (
    <BloqueEspecialidad
      titulo="Psicología"
      imagen="/assets/psicologia.jpg" // Asegúrate de que esta imagen esté en public/assets/
      servicios={[
        'Rehabilitación traumatológica',
        'Terapia manual',
        'Electroestimulación',
        'Evaluación postural',
      ]}
      invertir
    />
  )
}

export default EspecialidadPsicologia