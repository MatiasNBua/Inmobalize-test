import React from "react";
import { useState } from "react";

import image from "../assets/Battlo.jpg"

export default function BackGround() {

    const JSON = [
        {
            image: image,
            nombre: "barrio de los poetas",
            inversionTotal: 130,
            PrecioPorNft: 100,
            duracion: 60,
            inicioRenta: 2023 / 10 / 1,
            rentabilidadAnual: 10.18
        },
        {
            image:image,
            nombre: "barrio de los poetas",
            inversionTotal: 11111,
            PrecioPorNft: 1111,
            duracion: 1111,
            inicioRenta: 2023 / 10 / 1,
            rentabilidadAnual: 1111
        },
        {
            image:image,
            nombre: "barrio de los poetas",
            inversionTotal: 22222,
            PrecioPorNft: 22222,
            duracion: 22222,
            inicioRenta: 2023 / 10 / 1,
            rentabilidadAnual: 22222
        },
        {
            image:image,
            nombre: "barrio de los poetas",
            inversionTotal: 10000,
            PrecioPorNft: 10000,
            duracion: 10000,
            inicioRenta: 2023 / 10 / 1,
            rentabilidadAnual: 10000
        },
        {
            image:image,
            nombre: "barrio de los poetas",
            inversionTotal: 999,
            PrecioPorNft: 999,
            duracion: 999,
            inicioRenta: 2023 / 10 / 1,
            rentabilidadAnual: 999
        },
        {
            image:image,
            nombre: "barrio de los poetas",
            inversionTotal: 130,
            PrecioPorNft: 100,
            duracion: 60,
            inicioRenta: 2023 / 10 / 1,
            rentabilidadAnual: 10.18
        },
    ]

    const [currentGroup, setCurrentGroup] = useState(0);
    const itemsPerGroup = 3;
    const totalGroups = Math.ceil(JSON.length / itemsPerGroup);

    const nextGroup = () => {
        setCurrentGroup((prevGroup) => (prevGroup + 1) % totalGroups);
      };
    
      const prevGroup = () => {
        setCurrentGroup((prevGroup) => (prevGroup - 1 + totalGroups) % totalGroups);
      };


const renderImages = () => {
    const startIndex = currentGroup * itemsPerGroup;
    const endIndex = Math.min(startIndex + itemsPerGroup, JSON.length);

    return JSON.slice(startIndex, endIndex).map((item, index) => (
      <div key={index} className="w-full md:w-1/3 flex px-4 flex-shrink-0">
        <div className="bg-black flex flex-col gap-4 shadow-lg p-4 rounded-lg">
          <img
            src={item.image}
            alt={`Imagen ${index}`}
            className="w-full h-auto max-h-60 object-cover"
          />
          <h2 className="text-lg text-white font-semibold mt-2">{item.nombre}</h2>
          <p className="text-white border-white border-t-2 ">Inversión Total: {item.inversionTotal} €</p>
          <p className="text-white border-white border-t-2 ">Precio por NFT: {item.PrecioPorNft} €</p>
          <p className="text-white border-white border-t-2 ">Duración: {item.duracion} meses</p>
          <p className="text-white border-white border-t-2 ">Inicio de Renta: {item.inicioRenta}</p>
          <p className="text-white border-white border-t-2 border-b-2 ">Rentabilidad Anual: {item.rentabilidadAnual} %</p>
        
        <button className="bg-amber-200 text-black uppercase rounded-lg w-4/5 xl:w-1/2 font-medium">Ver Proyecto</button>
        </div>
        
      </div>
    ));
  };

  return (
    <div className="mt-60 bg-black">
      <div className="flex overflow-hidden">
        {renderImages()}
      </div>
      <div className="mt-4 flex justify-center gap-4 p-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full mr-2"
          onClick={prevGroup}
        >
          Anterior
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-full"
          onClick={nextGroup}
        >
          Siguiente
        </button>
      </div>
    </div>
  );

}