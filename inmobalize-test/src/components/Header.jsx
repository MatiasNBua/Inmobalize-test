import React, { useState } from 'react';

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="w-full text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <button className="flex items-center space-x-2 text-black" onClick={toggleNav}>
                    <div className="text-xl font-bold">X</div>
                    <p className="text-lg">INMOBALIZE</p>
                </button>

                <nav className="hidden md:flex">
                    <a href="#" className="text-black mr-4">Log in</a>
                    <a href="#" className="text-black">Register</a>
                </nav>

                <div className="md:hidden">
                    <button
                        className="text-white"
                        onClick={toggleNav}
                    >
                        {isNavOpen ? 'Cerrar' : 'Menú'}
                    </button>
                </div>
            </div>

            {isNavOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-stone-200 text-white z-50">
                    <div className="flex flex-col justify-between h-full">
            <div className='flex justify-between p-4'>
                <button
                    className="text-black"
                    onClick={toggleNav}
                >
                    X INMOBALIZE
                </button>
                <nav className="hidden md:flex">
                    <a href="#" className="mr-4 text-black">Log in</a>
                    <a href="#" className="text-black">Register</a>
                </nav>
                </div>

   <div className="flex  md:px-10 pt-20 md:pt-4 md:justify-center items-start min-h-[60vh] md:min-h-[80vh] flex-col p-2 bg-lightGrayColor">
                <div className="flex text-center">
                    <button className='flex text-black font-bold text-clamp-option-header sm:text-clamp-option-header  py-1 px-4 md:font-medium text-darkColor uppercase hover:border-darkColor'>SELLER CENTRAL®</button>
                </div>
                <div className="flex text-center">
                    <button className='flex text-black font-bold text-clamp-option-header sm:text-clamp-option-header  py-1 px-4 md:font-medium text-darkColor uppercase hover:border-darkColor'>SOBRE NOSOTROS</button>
                </div>
                <div className="flex text-center">
                    <button className='flex text-black font-bold text-clamp-option-header sm:text-clamp-option-header  py-1 px-4 md:font-medium text-darkColor uppercase hover:border-darkColor'>INMOBALIZE CLUB®</button>
                </div>
                <div className="flex text-center">
                    <button className='flex text-black font-bold text-clamp-option-header sm:text-clamp-option-header  py-1 px-4 md:font-medium text-darkColor uppercase hover:border-darkColor'>MEDIA PRESS BLOG</button>
                </div>
                </div>
            
            <div className="text-center flex justify-between p-2">
                <p className='text-black text-xs uppercase py-2'>Copyright © 2023 Inmobalize®</p>
                <div className="flex gap-4 justify-center py-2">
                    <a href="" className='text-black'>IN</a>
                    <a href="" className='text-black'>IG</a>
                    <a href="" className='text-black'>YT</a>
                </div>
                <p className='text-black uppercase py-2 cursor-pointer'>ayuda</p>
            </div>
        </div>
                </div>
            )}
        </header>
    );
}
