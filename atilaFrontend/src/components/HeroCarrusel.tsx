import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

function HeroCarrusel() {
  return (
    <div className="w-full md:w-1/3 flex justify-center">
      <div className="w-full max-w-xs">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={4000}
          showArrows={false}
        >
          {['/foto1.jpg', '/foto2.jpg', '/dentista.png'].map((src, i) => (
            <div key={i} className="flex justify-center items-center bg-transparent">
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="h-[30rem] object-cover rounded-full shadow-md"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default HeroCarrusel
