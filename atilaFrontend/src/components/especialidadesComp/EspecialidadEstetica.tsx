import EspecialidadConBurbujas from './EspecialidadConBurbujas'

function EspecialidadEstetica() {
  return (
    <EspecialidadConBurbujas
      titulo="Medicina Estética Facial"
      imagen="/foto1.jpg"
      invertir
      servicios={[
        { nombre: 'Limpieza facial profunda', descripcion: 'Remueve impurezas y mejora la textura de la piel.' },
        { nombre: 'Ácido hialurónico', descripcion: 'Rellena arrugas y surcos con efecto natural.' },
        { nombre: 'Toxina botulínica', descripcion: 'Reduce líneas de expresión y previene arrugas.' },
        { nombre: 'Peeling químico', descripcion: 'Renueva las capas superficiales de la piel.' },
      ]}
    />
  )
}
export default EspecialidadEstetica
