import EspecialidadDental from './EspecialidadDental'
import EspecialidadEstetica from './EspecialidadEstetica'
import EspecialidadKinesiologia from './EspecialidadKinesiologia'

function ServiciosSection() {
  return (
    <section id="servicios" className="bg-white py-20 px-6 space-y-24">
      <EspecialidadDental />
      <EspecialidadEstetica />
      <EspecialidadKinesiologia />
    </section>
  )
}

export default ServiciosSection
