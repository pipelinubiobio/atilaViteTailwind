import EspecialidadConBurbujas from './EspecialidadConBurbujas'

function EspecialidadPsicologia() {
  return (
    <EspecialidadConBurbujas
      titulo="Psicología"
      imagen="/foto4_54.jpg"
      invertir
      servicios={[
        { nombre: 'Terapia individual', descripcion: 'Apoyo emocional y tratamiento psicológico personalizado.' },
        { nombre: 'Evaluación psicológica', descripcion: 'Diagnóstico profesional de salud mental.' },
        { nombre: 'Psicoeducación', descripcion: 'Orientación sobre manejo emocional y conductual.' },
        { nombre: 'Atención en crisis', descripcion: 'Intervención breve ante situaciones críticas o de urgencia.' },
      ]}
    />
  )
}

export default EspecialidadPsicologia
