function HeroFrase() {
  return (
    <div className="w-full md:w-2/3 text-center md:text-left space-y-4 max-w-2xl">
      <span className="uppercase tracking-wide text-sm font-semibold text-white/80">
        Sucursales de MiClínica
      </span>
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
        Una clínica dental<br />para devolver sonrisas
      </h1>
      <p className="text-lg text-white/90">
        Somos una clínica dental que ofrece atención especializada al mejor precio.
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
