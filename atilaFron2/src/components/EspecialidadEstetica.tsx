import BloqueEspecialidad from './BloqueEspecialidad'

function EspecialidadEstetica() {
  return (
    <BloqueEspecialidad
      titulo="Medicina Estética Facial"
      imagen="/public/foto1.jpg" // Asegúrate de que esta imagen esté en public/assets/
      servicios={[
        'Limpieza facial profunda',
        'Ácido hialurónico',
        'Toxina botulínica (Botox)',
        'Peeling químico',
      ]}
      invertir // Imagen a la derecha
    />
  )
}

export default EspecialidadEstetica
