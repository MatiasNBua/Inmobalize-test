export default function SectionIntro () {

    return (
        <section className="section section--intro lg:h-[50vh] z-20 ">
        <div className="flex justify-between items-center flex-wrap lg:gap-x-2 gap-y-2 lg:gap-y-6 lg:p-14 px-4 md:mt-16 lg:mt-0">
            <div className="flex text-9xl basis-[100%] uppercase text-clamp-xl-5 font-medium lg:font-medium text-darkColor mr-2 fadeInLeftToRight">inmobalize®</div>
            <p className="hidden md:inline-block text-lg lg:text-xl xl:text-2xl font-medium text-darkColor sm:basis-[30%] md:basis-[35%] 2xl:basis-[22%]">
            ¡Bienvenido a Inmobalize! El lugar idóneo para convertirte en inversor inmobiliario
            <br />
                <span className="underline underline-offset-2 font-bold">desde 100€.</span>
            </p>
            <div className="flex text-9xl uppercase text-clamp-xl-5 font-medium lg:font-medium text-darkColor basis-[60%] fadeInRightToLeft">dividimos</div>
            <div className="flex text-9xl basis-[100%] uppercase text-clamp-xl-5 font-medium lg:font-medium text-darkColor mr-2 fadeInLeftToRight">PARA INVERTIR</div>

        </div>
        </section>
    )
}