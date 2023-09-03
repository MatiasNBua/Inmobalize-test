import { useState, useEffect } from "react";
import SlideWords from '../components/SlideWords'

export default function SectionIntro () {
    const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowTransition(true);
    }, 200);
  }, []);
    

    return (
        <section className="section section--intro lg:h-[100%] z-20 ">
        <div className="flex justify-between items-center flex-wrap lg:gap-x-2 gap-y-2 lg:gap-y-6 lg:p-14 px-4 md:mt-16 lg:mt-0">
            <div className={`flex text-9xl basis-[100%] uppercase text-clamp-xl-5 font-medium lg:font-medium text-darkColor mr-2 fadeInLeftToRight ${
            showTransition
            ? 'transition-transform-opacity duration-[2000ms] ease-in-out transform -translate-x-0 opacity-100'
            : 'transform -translate-x-80 opacity-0'
          }`}>inmobalize®</div>
            <p className="font-small md:inline-block text-lg lg:text-xl xl:text-1xl font-small text-darkColor sm:basis-[30%] md:basis-[35%] 2xl:basis-[22%]">
            ¡Bienvenido a Inmobalize! El lugar idóneo para convertirte en inversor inmobiliario
            <br />
                <span className="underline underline-offset-2 font-medium ">desde 100€.</span>
            </p>
            <div className={`flex text-9xl uppercase text-clamp-xl-5 font-medium lg:font-medium text-darkColor basis-[60%] ${
            showTransition
              ? "transition-transform-opacity duration-[2000ms] ease-in-out transform -translate-x-20 -translate-x-0 opacity-100"
              : "transform translate-x-0 opacity-0"
          }`}>dividimos</div>
            <div className={`flex text-9xl basis-[100%] uppercase text-clamp-xl-5 font-medium lg:font-medium text-darkColor mr-2 fadeInLeftToRight ${
            showTransition
              ? "transition-transform-opacity duration-[2000ms] ease-in-out transform -translate-x-0 opacity-100"
              : "transform -translate-x-80 opacity-0"
          }`}>Para invertir</div>

        </div>

        <div className="flex text-darkColor font-medium px-4 md:px-14 py-14 lg:pt-32 text-clamp-lg">
          <button className="hover:border-b hover:border-solid hover:border-darkColor underline">
          Ver todos los proyectos
          </button>
        </div>

        <SlideWords/>
        </section>
    )
}