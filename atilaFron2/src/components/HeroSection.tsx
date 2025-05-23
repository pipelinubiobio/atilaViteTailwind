import HeroCarrusel from './HeroCarrusel'
import HeroFrase from './HeroFrase'

function HeroSection() {
  return (
    <section id="inicio" className="relative w-full bg-sky-400 text-white overflow-hidden">
      {/* Curva inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
            className="relative block w-full h-[80px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none">   
          <path  
          d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Contenido hero */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-center w-full px-6 py-16 md:py-30 gap-12">
        {/* Imagen lado izquierdo */}
        <HeroCarrusel />

        {/* Frase lado derecho */}
        <HeroFrase />
      </div>
    </section>
  )
}

export default HeroSection
