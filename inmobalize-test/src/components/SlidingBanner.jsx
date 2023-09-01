export default function SlidingBanner (){

    return(
        <section className="p-6">
        <div className="heading flex flex-col gap-4 items-start h-1/2 md:h-2/5">
            <h1 className="text-5xl	">Primeros pasos</h1>
            <p>¿Listo para invertir en inmuebles? ¡Estos son los pasos que debes de seguir!</p>
            <div className="flex flex-col gap-2 sm:my-4 w-full h-1/4">
                <div className="flex flex-row p-2 w-full justify-between mt-[5rem]">
                    <div className="">
                        <p className="text-xs font-light text-left uppercase w-max hidden md:block">REGÍSTRATE</p>
                        <p className="text-4xl">01</p>
                    </div>
                    <div className="">
                        <p className="text-xs font-light text-left uppercase w-max hidden md:block">REGÍSTRATE</p>
                        <p className="text-4xl">02</p>
                    </div>
                    <div className="">
                        <p className="text-xs font-light text-left uppercase w-max hidden md:block">REGÍSTRATE</p>
                        <p className="text-4xl">03</p>
                    </div>
                    <div className="">
                        <p className="text-xs font-light text-left uppercase w-max hidden md:block">REGÍSTRATE</p>
                        <p className="text-4xl">04</p>
                    </div>
                    <div className="">
                        <p className="text-xs font-light text-left uppercase w-max hidden md:block">REGÍSTRATE</p>
                        <p className="text-4xl">05</p>
                    </div>
                    <div className="">
                        <p className="text-xs font-light text-left uppercase w-max hidden md:block">REGÍSTRATE</p>
                        <p className="text-4xl">06</p>
                    </div>
                </div>
                <div className="border-2 border-grey"></div>
            </div>
        </div>

        </section>
    )
}