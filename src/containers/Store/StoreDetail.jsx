import Layout from "../../hocs/Layout";

import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { get_store, get_related_stores } from "../../redux/actions/stores";
import { useEffect } from "react";

import { HandThumbUpIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, CakeIcon } from '@heroicons/react/24/solid'


import { ClockIcon, MapIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import LoadingStore from "../../components/store/LoadingStore";
import { ConetenedorBanner, ConetenedorBanner1, ConetenedorInfo, ConetenedorInfo1, ConetenedorInfo2, ConetenedorProfile, ConetenedorProfile1, ConetenedorProfile2, ConetenedorProfile3, EspacioContenedor, Principal } from "../../components/store/styles/LoadingStore";
import { BotonesMeGustaNOMegusta, ContenedorEstadists, ContenedorEstadists1, ContenedorGraficaEsdistics, ContenedorInfoUbication, ContenedorInfoUbication1, DescriptionStore, EncabezadoContenedorEstadistics, EspacioPhotos, ListaGraficaEsdistics, Photo, PrimerItemLinea, PrimerItemLinea1, PrimerItemLinea2, PrimerItemLinea3, PrimerItemLineaFigura, PrimerItemLineaTexto, PrimerItemLineaTexto1, PrimerItemLineaTexto2, StoreProfile, TituloEstadistics, TituloEstadisticsDescr } from "./styles/StoreDetail";

const StoreDetail = ({
    get_store,
    get_related_stores,
    store,
    loading

}) => {

    const params = useParams()
    const storeSlug = params.storeSlug

    useEffect(() => {
        get_store(storeSlug)
        get_related_stores(storeSlug)
        window.scrollTo(0, 0);
    }, [])

    return (
        <Layout>
            {loading ?
                <LoadingStore />
                :
                <>
                    <Principal>
                        {/* banner img */}
                        <ConetenedorBanner>
                            <ConetenedorBanner1>
                                <Photo src={store && store.banner} />
                                <EspacioPhotos ria-hidden="true" />
                            </ConetenedorBanner1>
                            <EspacioContenedor />
                        </ConetenedorBanner>
                        {/* COMPANY PROFILE */}
                        <ConetenedorProfile>
                            <ConetenedorProfile1>
                                <div>
                                    {/* User info */}
                                    <ConetenedorProfile2>
                                        <ConetenedorProfile3>
                                            {/* profile picture */}
                                            <div className="flex">
                                                <StoreProfile src={store && store.logo} alt="Store Photo" />
                                            </div>
                                            <ConetenedorInfo>
                                                <ConetenedorInfo1>
                                                    <BotonesMeGustaNOMegusta to="/mall">Me gusta</BotonesMeGustaNOMegusta>
                                                </ConetenedorInfo1>
                                                <ConetenedorInfo1>
                                                    <BotonesMeGustaNOMegusta to="/mall">No me gusta</BotonesMeGustaNOMegusta>
                                                </ConetenedorInfo1>
                                            </ConetenedorInfo>
                                        </ConetenedorProfile3>
                                        {/* Store name */}
                                        <ConetenedorInfo2>
                                            <h1 className="text-2xl text-color_letra_blanca">
                                                {store && store.name}
                                                <CheckBadgeIcon className="h-5 w-5 inline-block text-blue-500" />
                                            </h1>
                                        </ConetenedorInfo2>
                                        {/* Store description */}
                                        <DescriptionStore>
                                            {store && store.description}
                                        </DescriptionStore>

                                        {/* Store data */}
                                        <ContenedorInfoUbication>
                                            <ContenedorInfoUbication1>
                                                <MapIcon className="h-4 w-4 mr-2 inline-block" />{store && store.location}
                                            </ContenedorInfoUbication1>
                                            <ContenedorInfoUbication1>
                                                <ClockIcon className="h-4 w-4 mr-2 inline-block" />{store && store.schedule}
                                            </ContenedorInfoUbication1>
                                        </ContenedorInfoUbication>
                                    </ConetenedorProfile2>
                                </div>
                            </ConetenedorProfile1>
                        </ConetenedorProfile>
                    </Principal>
                    <ContenedorEstadists>
                        <ContenedorEstadists1>
                            <EncabezadoContenedorEstadistics>
                                <TituloEstadistics>
                                    Estadisticas
                                </TituloEstadistics>
                                <TituloEstadisticsDescr>
                                    Impacto de {store && store.name} en usuarios.
                                </TituloEstadisticsDescr>
                            </EncabezadoContenedorEstadistics>
                            <ContenedorGraficaEsdistics>
                                <ListaGraficaEsdistics>
                                    <PrimerItemLinea>
                                        <PrimerItemLinea1>
                                            <PrimerItemLinea2>
                                                <HandThumbUpIcon className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" />
                                            </PrimerItemLinea2>
                                            <PrimerItemLinea3 />
                                        </PrimerItemLinea1>
                                        <PrimerItemLineaFigura>
                                            <PrimerItemLineaTexto>{store && store.likes}</PrimerItemLineaTexto>
                                            <PrimerItemLineaTexto1>Personas les gusta {store && store.name}</PrimerItemLineaTexto1>
                                            <PrimerItemLineaTexto2>Clientes satisfechos con sus productos, asesorías y ventas.</PrimerItemLineaTexto2>
                                        </PrimerItemLineaFigura>
                                    </PrimerItemLinea>
                                    <PrimerItemLinea>
                                        <PrimerItemLinea1>
                                            <PrimerItemLinea2>
                                                <ChatBubbleBottomCenterTextIcon className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" />
                                            </PrimerItemLinea2>
                                            <PrimerItemLinea3 />
                                        </PrimerItemLinea1>
                                        <PrimerItemLineaFigura>
                                            <PrimerItemLineaTexto>32</PrimerItemLineaTexto>
                                            <PrimerItemLineaTexto1>Personas han comentado</PrimerItemLineaTexto1>
                                            <PrimerItemLineaTexto2>Sugerencias, quejas o felicitaciones en el servicios de {store && store.name}.</PrimerItemLineaTexto2>
                                        </PrimerItemLineaFigura>
                                    </PrimerItemLinea>
                                    <PrimerItemLinea>
                                        <PrimerItemLinea1>
                                            <PrimerItemLinea2>
                                                <UserGroupIcon className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" />
                                            </PrimerItemLinea2>
                                            <PrimerItemLinea3 />
                                        </PrimerItemLinea1>
                                        <PrimerItemLineaFigura>
                                            <PrimerItemLineaTexto>1</PrimerItemLineaTexto>
                                            <PrimerItemLineaTexto1>Personas no les gusta {store && store.name}</PrimerItemLineaTexto1>
                                            <PrimerItemLineaTexto2>Clientes insatisfechos con sus productos, asesorías y ventas.</PrimerItemLineaTexto2>
                                        </PrimerItemLineaFigura>
                                    </PrimerItemLinea>
                                    <PrimerItemLinea>
                                        <PrimerItemLinea1>
                                            <PrimerItemLinea2>
                                                <CakeIcon className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" />
                                            </PrimerItemLinea2>
                                            <PrimerItemLinea3 />
                                        </PrimerItemLinea1>
                                        <PrimerItemLineaFigura>
                                            <PrimerItemLineaTexto>2323</PrimerItemLineaTexto>
                                            <PrimerItemLineaTexto1>Productos listos para la venta</PrimerItemLineaTexto1>
                                            <PrimerItemLineaTexto2>Disponibilidad de productos libres al mercado.</PrimerItemLineaTexto2>
                                        </PrimerItemLineaFigura>
                                    </PrimerItemLinea>
                                </ListaGraficaEsdistics>
                            </ContenedorGraficaEsdistics>
                        </ContenedorEstadists1>
                    </ContenedorEstadists>
                </>
            }
        </Layout>
    )
}

const mapStateToProps = state => ({
    store: state.Stores.store,
    loading: state.Stores.loading

})

export default connect(mapStateToProps, {
    get_store,
    get_related_stores
})(StoreDetail)