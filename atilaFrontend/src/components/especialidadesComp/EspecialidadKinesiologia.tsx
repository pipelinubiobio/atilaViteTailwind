import EspecialidadConBurbujas from './EspecialidadConBurbujas'

function EspecialidadKinesiologia() {
  return (
    <EspecialidadConBurbujas
      titulo="Kinesiología"
      imagen="/assets/kinesiologia.jpg"
      servicios={[
        { nombre: 'Rehabilitación traumatológica', descripcion: 'Recuperación física post-lesión o cirugía.' },
        { nombre: 'Terapia manual', descripcion: 'Técnicas manuales para mejorar movilidad y reducir dolor.' },
        { nombre: 'Electroestimulación', descripcion: 'Estimulación eléctrica para fortalecimiento muscular.' },
        { nombre: 'Evaluación postural', descripcion: 'Análisis de postura para prevenir dolencias crónicas.' },
      ]}
    />
  )
}

export default EspecialidadKinesiologia
