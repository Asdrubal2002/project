import Layout from "../../hocs/Layout";

import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { get_store, get_related_stores } from "../../redux/actions/stores";
import { useEffect } from "react";

import { HandThumbUpIcon, ClockIcon, MapIcon, CalendarDaysIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const StoreDetail = ({
    get_store,
    get_related_stores,
    store

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
            <main className='min-h-screen w-full py-5 overflow-x-hidden'>
                {/* banner img */}
                <div className="relative bg-gray-800 max-w-full">
                    <div className="absolute inset-0">
                        <img className="w-full h-full object-cover" src={store && store.banner} alt="" />
                        <div className="absolute inset-0 mix-blend-multiply" aria-hidden="true"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"></div>
                </div>
                {/* COMPANY PROFILE */}
                <div className="md:grid md:gap-6 relative flex space-x-22 pt-4">
                    <div className="mt-5 md:mt-0 ">
                        <div>
                            {/* User info */}
                            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-4">
                                    {/* profile picture */}
                                    <div className="flex">
                                        <img src={store && store.logo} alt="Store Photo" className="h-24 w-24 rounded-full ring-2 dark:ring-dark-second ring-gray-700 sm:h-32 sm:w-32 hover:bg-gray-100" />
                                    </div>

                                    <div
                                        class=" mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                        <div
                                            class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">

                                            <Link
                                                to="/mall"
                                                className="rounded-lg bg-azul_corp px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-azul_corp_ho focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                            >
                                                Me gusta
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className=" sm:block  mt-6 min-w-0 flex-1">
                                    <h1 className="text-2xl font-bold text-color_letra_blanca truncate">
                                        {store && store.name}
                                        <CheckBadgeIcon className="h-5 w-5 inline-block text-blue-500" />

                                    </h1>
                                </div>
                                <p className="mt-2 max-w-4xl text-sm dark:text-dark-txt text-gray-500">{store && store.description}</p>
                                <div className="inline-flex grid-cols-4">
                                    <p className="mt-2 max-w-4xl text-sm mx-1 text-gray-500 cursor-default">
                                        <MapIcon className="h-4 w-4 mr-2 inline-block" />{store && store.location}
                                    </p>
                                   
                                    <p className="mt-2 max-w-4xl text-sm mx-1 text-gray-500 cursor-default">
                                        <HandThumbUpIcon className="h-4 w-4 mr-2 inline-block" />{store && store.likes} les gusta esta empresa
                                    </p>
                                    <p className="mt-2 max-w-4xl text-sm mx-1 text-gray-500 cursor-default">
                                        <ClockIcon className="h-4 w-4 mr-2 inline-block" />{store && store.schedule}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </Layout>
    )
}

const mapStateToProps = state => ({
    store: state.Stores.store
})

export default connect(mapStateToProps, {
    get_store,
    get_related_stores
})(StoreDetail)