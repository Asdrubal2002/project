import Layout from "../../hocs/Layout"
import { useEffect, useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { useParams } from "react-router-dom";

import { get_search_stores, get_search_stores_page } from '../../redux/actions/stores';
import StoreList from "../../components/store/StoreList";

import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { FunnelIcon } from '@heroicons/react/24/solid'

import LoadingStores from "../../components/home/LoadingStores";
import { Helmet } from "react-helmet";
import Searcher from "../../components/store/Searcher";



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Mall = ({
    get_search_stores,
    get_search_stores_page,
    stores,
    count,
    next,
    previous,
    loading

}) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)


    const params = useParams()
    const search = params.search
    const slug = params.slug


    useEffect(() => {
        window.scrollTo(0, 0)
        get_search_stores(slug, search)
    }, [])


    return (
        <Layout>
            <Helmet>
                <title>Ruvlo | {search}</title>
                <meta name="description" content="Lo que sale en google" />
                <meta name="keywords" content='palabras para google' />
                <meta name="robots" content='all' />
                <link rel="canonical" href="https://www.ruvlo.com/" />
                <meta name="author" content='Ruvlo' />
                <meta name="publisher" content='Ruvlo' />

                {/* Social Media Tags */}
                <meta property="og:title" content='Ruvlo |  Busqueda tiendas' />
                <meta property="og:description" content='descripcion.' />
                <meta property="og:url" content="https://www.ruvlo.com/" />
                <meta property="og:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />

                <meta name="twitter:title" content='Ruvlo |  Busqueda tiendas' />
                <meta
                    name="twitter:description"
                    content='descripcion.'
                />
                <meta name="twitter:image" content='https://bafybeicwrhxloesdlojn3bxyjqnxgsagtd4sl53a7t4cn4vfe2abmybzua.ipfs.w3s.link/lightbnuilbg.jpg' />
                <meta name="twitter:card" content="summary_large_image" />
            </Helmet>
            <div>
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-[100] lg:hidden" onClose={setMobileFiltersOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 z-40 flex">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transition ease-in-out duration-300 transform"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transition ease-in-out duration-300 transform"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                        <div className="flex items-center justify-between px-4">
                                            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                                            <button
                                                type="button"
                                                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                                onClick={() => setMobileFiltersOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </button>
                                        </div>




                                        <LoadingStores />
                                        <LoadingStores />
                                        <LoadingStores />
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </Dialog>
                    </Transition.Root>

                    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
                            <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
                                Resultados de búsqueda: {count}
                            </h2>

                            <div className="flex items-center">
                                {/* <Menu as="div" className="relative inline-block text-left">
                                    <div>
                                        <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                            Sort
                                            <ChevronDownIcon
                                                className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                                aria-hidden="true"
                                            />
                                        </Menu.Button>
                                    </div>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <div className="py-1">
                                                {sortOptions.map((option) => (
                                                    <Menu.Item key={option.name}>
                                                        {({ active }) => (
                                                            <a
                                                                href={option.href}
                                                                className={classNames(
                                                                    option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                                    active ? 'bg-gray-100' : '',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                {option.name}
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu> */}

                                {/* <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                    <span className="sr-only">View grid</span>
                                    <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                                </button> */}
                                <button
                                    type="button"
                                    className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Filters</span>
                                    <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                                </button>
                            </div>
                        </div>

                        <section aria-labelledby="products-heading" className="pb-24 pt-6">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    <h3 className="sr-only">Categories</h3>
                                    <div className="bg-neutral-900 py-6 rounded-lg shadow">
                                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                                            <h2 className="text-2xl font-bold text-gray-300 mb-6">Centro atención</h2>
                                            <div className="divide-y divide-gray-200">
                                                {/* Noticia 1 */}
                                                <div className="py-4">
                                                    <a href="#" className="text-lg font-medium text-gray-300 hover:text-gray-400">Centro de compras</a>
                                                    <p className="text-sm text-gray-400 mt-1">Breve descripción o extracto de la noticia...</p>
                                                    <a href="#" className="text-sm font-medium text-azul_corp_ho hover:text-indigo-500 mt-2">Leer más</a>
                                                </div>

                                                {/* Noticia 2 */}
                                                {/* Repite el bloque anterior para más noticias, cambiando los datos correspondientes */}

                                                {/* Más noticias */}
                                                <div className="py-4">
                                                    <a href="#" className="text-base font-medium text-azul_corp_ho hover:text-indigo-500">Ver todas las noticias</a>
                                                </div>
                                            </div>
                                            <div className="divide-y divide-gray-200">
                                                {/* Noticia 1 */}
                                                <div className="py-4">
                                                    <a href="#" className="text-lg font-medium text-gray-300 hover:text-gray-400">Centro de citas</a>
                                                    <p className="text-sm text-gray-400 mt-1">Breve descripción o extracto de la noticia...</p>
                                                    <a href="#" className="text-sm font-medium text-azul_corp_ho hover:text-indigo-500 mt-2">Leer más</a>
                                                </div>

                                                {/* Noticia 2 */}
                                                {/* Repite el bloque anterior para más noticias, cambiando los datos correspondientes */}

                                                {/* Más noticias */}
                                                <div className="py-4">
                                                    <a href="#" className="text-base font-medium text-azul_corp_ho hover:text-indigo-500">Ver todas las noticias</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <LoadingStores />
                                    <LoadingStores />
                                    <LoadingStores />


                                </form>

                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    {loading ?

                                        <LoadingStores />
                                        :
                                        <>
                                            <StoreList stores={stores && stores} get_store_list_page={get_search_stores_page} slug={slug} search={search} count={count && count} />
                                        </>
                                    }
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>


        </Layout >
    )
}

const mapStateToProps = state => ({
    stores: state.Stores.search_stores,
    count: state.Stores.count,
    next: state.Stores.next,
    previous: state.Stores.previous,
    loading: state.Stores.loading
})

export default connect(mapStateToProps, {
    get_search_stores,
    get_search_stores_page
})(Mall)