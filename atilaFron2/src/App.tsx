import Navbar from './components/Navbar'

function App() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navbar fija */}
      <Navbar />

      {/* Contenido principal */}
      <main className="pt-16">
        <section
          id="inicio"
          className="min-h-screen flex items-center justify-center bg-gray-50"
        >
          <h2 className="text-3xl font-bold">Inicio</h2>
        </section>

        <section
          id="servicios"
          className="min-h-screen flex items-center justify-center bg-white"
        >
          <h2 className="text-3xl font-bold">Nuestros Servicios</h2>
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
