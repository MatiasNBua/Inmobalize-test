import React from "react";
import { useState } from "react";

import image from "../assets/Battlo.jpg";

export default function BackGround() {
  const JSON = [
    {
      image: image,
      nombre: "barrio de los poetas",
      inversionTotal: 130,
      PrecioPorNft: 100,
      duracion: 60,
      inicioRenta: 2023 / 10 / 1,
      rentabilidadAnual: 10.18,
    },
    {
      image: image,
      nombre: "barrio de los poetas",
      inversionTotal: 11111,
      PrecioPorNft: 1111,
      duracion: 1111,
      inicioRenta: 2023 / 10 / 1,
      rentabilidadAnual: 1111,
    },
    {
      image: image,
      nombre: "barrio de los poetas",
      inversionTotal: 22222,
      PrecioPorNft: 22222,
      duracion: 22222,
      inicioRenta: 2023 / 10 / 1,
      rentabilidadAnual: 22222,
    },
    {
      image: image,
      nombre: "barrio de los poetas",
      inversionTotal: 10000,
      PrecioPorNft: 10000,
      duracion: 10000,
      inicioRenta: 2023 / 10 / 1,
      rentabilidadAnual: 10000,
    },
    {
      image: image,
      nombre: "barrio de los poetas",
      inversionTotal: 999,
      PrecioPorNft: 999,
      duracion: 999,
      inicioRenta: 2023 / 10 / 1,
      rentabilidadAnual: 999,
    },
    {
      image: image,
      nombre: "barrio de los poetas",
      inversionTotal: 130,
      PrecioPorNft: 100,
      duracion: 60,
      inicioRenta: 2023 / 10 / 1,
      rentabilidadAnual: 10.18,
    },
  ];

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
      <div key={index} className="container bg-black">
        <div className="bg-black flex flex-col  shadow-lg p-4 rounded-lg">
          <img
            src={item.image}
            alt={`Imagen ${index}`}
            className="w-full h-auto max-h-60 object-cover"
          />
          <h2 className="text-lg text-white font-semibold mt-2 py-2">
            {item.nombre}
          </h2>
          <div className="text-white border-white border-t-2 py-2 flex justify-between">
            <li className="list-none"> Inversión Total: </li>
            <li className="list-none"> {item.inversionTotal} € </li>
          </div>
          <div className="text-white border-white border-t-2 py-2 flex justify-between">
            <li className="list-none"> Precio por NFT: </li>
            <li className="list-none">{item.PrecioPorNft} €</li>
          </div>
          <div className="text-white border-white border-t-2 py-2 flex justify-between">
            <li className="list-none">Duración:</li>
            <li className="list-none">{item.duracion} meses</li>
          </div>
          <div className="text-white border-white border-t-2 py-2 flex justify-between">
            <li className="list-none">Inicio de Renta:</li>
            <li className="list-none">{item.inicioRenta}</li>
          </div>
          <div className="text-white border-white border-t-2 border-b-2 py-2 flex justify-between">
            <li className="list-none">Rentabilidad Anual:</li>
            <li className="list-none">{item.rentabilidadAnual} %</li>
          </div>
          <div className="w-100 py-4 text-center">
            <button className="bg-amber-200 text-black uppercase rounded-lg w-4/5 xl:w-1/2 font-medium py-2">
              Ver Proyecto
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="mt-60 bg-black">
      <div className="text-white text-6xl py-20 container mx-auto px-4">
        <h2 className="text-clamp-xl-3 text-white">
          Últimos
          <br />
          proyectos
        </h2>
      </div>
      <div className="flex overflow-hidden container mx-auto">{renderImages()}</div>
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
