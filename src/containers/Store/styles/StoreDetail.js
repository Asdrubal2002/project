import tw from "tailwind-styled-components";
import styled, { css } from "styled-components";

import { Link } from "react-router-dom";


//La parte principal esta en ..omponents/store/styles/LoadingStore

export const Photo = tw.img`
    w-full 
    h-full 
    object-cover
`;

export const EspacioPhotos = tw.div`
    absolute 
    inset-0 
    mix-blend-multiply
`;

export const StoreProfile = tw.img`
    h-24
    w-24 
    rounded-full 
    ring-2 
    dark:ring-dark-second 
    ring-gray-700 
    sm:h-32 
    sm:w-32 
    hover:bg-gray-100
`;

export const BotonesMeGustaNOMegusta = tw(Link)` 
    rounded-3xl 
    bg-azul_corp 
    px-3.5 
    py-2.5 
    text-sm 
    font-semibold 
    text-white 
    shadow-sm 
    hover:bg-azul_corp_ho 
    focus-visible:outline 
    focus-visible:outline-2 
    focus-visible:outline-offset-2 
    focus-visible:outline-indigo-600
`;

export const DescriptionStore = tw.p`
    mt-2 
    max-w-4xl 
    text-sm 
    text-color_letra_oscura_clara
`;

export const ContenedorInfoUbication = tw.div`
    inline-flex 
    grid-cols-4 
    mt-5
`;

export const ContenedorInfoUbication1 = tw.p`
    mt-2 
    max-w-4xl 
    text-base 
    mx-1 
    text-color_letra_blanca 
    cursor-default
`;

export const ContenedorEstadists = tw.div`
    py-10 
    sm:py-10
`;

export const ContenedorEstadists1 = tw.div`
    mx-auto 
    max-w-7xl 
    px-6 
    lg:px-8
`;

export const EncabezadoContenedorEstadistics = tw.div`
    mx-auto 
    max-w-2xl 
    lg:mx-0
`;

export const TituloEstadistics = tw.h2`
    text-3xl 
    text-color_letra_blanca 
    sm:text-4xl
`;

export const TituloEstadisticsDescr = tw.p`
    mt-2 
    text-base 
    leading-8 
    text-color_letra_oscura_clara
`;

export const ContenedorGraficaEsdistics = tw.div`
    mx-auto 
    mt-10 
    max-w-2xl 
    border-t 
    border-gray-200 
    pt-10 
    sm:mt-16 
    sm:pt-16 
    lg:mx-0 
    lg:max-w-none  
`;

export const ListaGraficaEsdistics = tw.ol`
    items-center 
    sm:flex 
`;

export const PrimerItemLinea = tw.li`
    relative 
    mb-6 
    sm:mb-0
`;

export const PrimerItemLinea1 = tw.div`
    flex 
    items-center
`;

export const PrimerItemLinea2 = tw.div`
    z-10 
    flex 
    items-center 
    justify-center 
    w-6 
    h-6 
    bg-blue-100 
    rounded-full 
    ring-0 
    ring-white 
    dark:bg-blue-900 
    sm:ring-8 
    dark:ring-gray-900 
    shrink-0
`;

export const PrimerItemLinea3 = tw.div`
    hidden 
    sm:flex 
    w-full 
    bg-gray-200 
    h-0.5 
    dark:bg-gray-700
`;

export const PrimerItemLineaFigura = tw.div`
    mt-3 
    sm:pe-8
`;

export const PrimerItemLineaTexto = tw.h3`
    text-lg 
    font-semibold 
    text-white
`;

export const PrimerItemLineaTexto1 = tw.p`
    block 
    mb-2 
    text-sm 
    font-normal 
    leading-none 
    text-gray-400 
    dark:text-gray-500
`;

export const PrimerItemLineaTexto2 = tw.p`
    text-base 
    font-normal 
    text-gray-500
`;







