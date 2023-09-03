import React, { useState } from 'react';
import iconIG from '../assets/instagram.svg'
import iconYT from '../assets/youtube.svg'
import iconLK from '../assets/linkedin.svg'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="w-full text-white p-4">
            <div className="flex justify-between items-center p-4">
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
                <div className="fixed top-0 left-0 w-full h-full bg-stone-200 p-4 text-white z-50">
                    <div className="flex flex-col justify-between h-full">
                        <div className='flex justify-between p-4'>
                            <button
                                className="flex items-center space-x-2 text-black"
                                onClick={toggleNav}
                            >
                                <div className="text-xl font-bold">X</div>
                                <p className="text-lg">INMOBALIZE</p>
                            </button>
                            <nav className="hidden md:flex">
                                <a href="#" className="mr-4 text-black">Log in</a>
                                <a href="#" className="text-black">Register</a>
                            </nav>
                        </div>

                        <div className="flex gap-4 md:px-10 pt-20 md:pt-4 md:justify-center items-start min-h-[60vh] md:min-h-[80vh] flex-col p-2 bg-lightGrayColor">
                            <div className="flex text-center">
                                <button className='flex text-black text-7xl sm:text-clamp-option-header  py-1 px-4 font-normal text-darkColor uppercase hover:border-darkColor'>SELLER CENTRAL®</button>
                            </div>
                            <div className="flex text-center">
                                <button className='flex text-black text-7xl sm:text-clamp-option-header  py-1 px-4 font-normal text-darkColor uppercase hover:border-darkColor'>SOBRE NOSOTROS</button>
                            </div>
                            <div className="flex text-center">
                                <button className='flex text-black text-7xl sm:text-clamp-option-header  py-1 px-4 font-normal text-darkColor uppercase hover:border-darkColor'>INMOBALIZE CLUB®</button>
                            </div>
                            <div className="flex text-center">
                                <button className='flex text-black text-7xl sm:text-clamp-option-header  py-1 px-4 font-normal text-darkColor uppercase hover:border-darkColor'>MEDIA PRESS BLOG</button>
                            </div>
                        </div>


                        <div className="text-center flex justify-between p-2">
                            <p className='text-black text-xs uppercase py-2'>Copyright © 2023 Inmobalize®</p>
                            <div className="flex gap-4 justify-center py-2">
                                <a href="" className='text-black'><img className='w-8 h-8' src={iconLK} alt="" /></a>
                                <a href="" className='text-black'><img className='w-8 h-8' src={iconIG} alt="" /></a>
                                <a href="" className='text-black'><img className='w-8 h-8' src={iconYT} alt="" /></a>
                            </div>
                            <p className='text-black uppercase py-2 cursor-pointer'>ayuda</p>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
