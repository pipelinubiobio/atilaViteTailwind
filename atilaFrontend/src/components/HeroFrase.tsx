function HeroFrase() {
  return (
    <div className="w-full md:w-2/3 text-center md:text-left space-y-4 max-w-2xl">
      <span className="uppercase tracking-wide text-sm font-semibold text-white/80">
        Sucursal Atila Centro Medico Concepcion
      </span>
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Somos salud 
        <br />Con propósito social
      </h1>
      <p className="text-lg text-white/90">
        Atención especializada al mejor precio.
      </p>
      <a
        href="#servicios"
        className="inline-block px-6 py-3 mt-4 border-2 border-white rounded-full text-white font-semibold hover:bg-white hover:text-sky-600 transition"
      >
        Nuestras especialidades
      </a>
    </div>
  )
}
export default HeroFrase
