import EspecialidadConBurbujas from './EspecialidadConBurbujas'

function EspecialidadKinesiologia() {
  return (
    <EspecialidadConBurbujas
      titulo="Kinesiología"
      imagen="/foto5_54.jpg"
      servicios={[
        { nombre: 'Rehabilitación traumatológica', descripcion: 'Recuperación física post-lesión o cirugía.' },
        { nombre: 'Terapia manual', descripcion: 'Técnicas manuales para mejorar movilidad y reducir dolor.' },
        { nombre: 'Electro Estimulación', descripcion: 'Estimulación eléctrica para fortalecimiento muscular.' },
        { nombre: 'Evaluación postural', descripcion: 'Análisis de postura para prevenir dolencias crónicas.' },
      ]}
    />
  )
}

export default EspecialidadKinesiologia
