import Navbar from './components/Navbar'

import HeroSection from './components/HeroSection'
import ServiciosSection from './components/ServiciosSection'

function App() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar fija */}
      <Navbar />

      {/* Contenido principal */}
      <main className="pt-0">
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center bg-gray-50"
        >
          <HeroSection />

        </section>

        <section
          id="servicios"
          className="min-h-screen flex items-center justify-center bg-white"
        >
          <ServiciosSection />
        </section>

        <section
          id="especialistas"
          className="min-h-screen flex items-center justify-center bg-gray-100"
        >
          <h2 className="text-3xl font-bold">Especialistas</h2>
        </section>
      </main>
    </div>
  )
}

export default App
