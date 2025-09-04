import { Button } from "@/components/ui/button";
import Title from "./Title";
import Container from "./Container";

function HomeBanner() {
  const tangoHero = "./assets/yo2.jpg";

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${tangoHero})` }}
        ></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-white">
              Escuela de
              <span className="block text-secondary">Tango</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
              Descubre la pasión y elegancia del tango argentino con nuestros
              instructores profesionales. Clases para todos los niveles en el
              corazón de Helsinki.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="ghost" size="lg" className="px-8 py-4">
                Ver Clases
              </Button>
              <Button variant="link" size="lg" className="px-8 py-4">
                Reservar Ahora
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-8 max-w-md">
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">15+</div>
                <div className="text-sm text-muted-foreground">
                  Años de experiencia
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-muted-foreground">
                  Estudiantes graduados
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">10</div>
                <div className="text-sm text-muted-foreground">
                  Instructores expertos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container className="mt-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <Title className="uppercase text-3xl md:text-4xl font-bold text-center  text-black">
            Nuestras Clases
          </Title>
          <p className="text-sm text-center text-lightColor/80 font-medium max-w-[480px] ">
            Ofrecemos clases para todos los niveles, desde principiantes hasta
            avanzados. Cada clase está diseñada para brindarte la mejor
            experiencia de aprendizaje.
          </p>
        </div>
      </Container>
    </>
  );
}

export default HomeBanner;
