import Layout from "../../hocs/Layout";

import { Link, useParams } from "react-router-dom";
import { connect } from "react-redux";

import { get_store, get_related_stores } from "../../redux/actions/stores";
import { useEffect, useState, Fragment } from "react";

import { HandThumbUpIcon, ChatBubbleBottomCenterTextIcon, UserGroupIcon, CakeIcon } from '@heroicons/react/24/solid'
//import { get_products } from "../../redux/actions/products";
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

import { ClockIcon, MapIcon, GlobeAmericasIcon } from "@heroicons/react/24/outline";
import LoadingStore from "../../components/store/LoadingStore";
import { ConetenedorBanner, ConetenedorBanner1, ConetenedorInfo, ConetenedorInfo1, ConetenedorInfo2, ConetenedorProfile, ConetenedorProfile1, ConetenedorProfile2, ConetenedorProfile3, EspacioContenedor, Principal } from "../../components/store/styles/LoadingStore";
import { BotonesMeGustaNOMegusta, ContenedorEstadists, ContenedorEstadists1, ContenedorGraficaEsdistics, ContenedorInfoUbication, ContenedorInfoUbication1, DescriptionStore, EncabezadoContenedorEstadistics, EspacioPhotos, ListaGraficaEsdistics, Photo, PrimerItemLinea, PrimerItemLinea1, PrimerItemLinea2, PrimerItemLinea3, PrimerItemLineaFigura, PrimerItemLineaTexto, PrimerItemLineaTexto1, PrimerItemLineaTexto2, StoreProfile, TituloEstadistics, TituloEstadisticsDescr } from "./styles/StoreDetail";
import { CheckIcon } from '@heroicons/react/24/solid'

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/24/solid'

import { get_categories_products_store } from "../../redux/actions/product_categories";
import LoadingCategoriesStores from "../../components/store/LoadingCategoriesStores";

import { get_products, get_products_list_page } from "../../redux/actions/products";
import LoadingStores from "../../components/home/LoadingStores";
import ProductList from "../../components/store/ProductList";
import Searcher from "../../components/store/Searcher";

const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
    {
        id: 'color',
        name: 'Color',
        options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
        ],
    },
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'size',
        name: 'Size',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const StoreDetail = ({
    get_store,
    get_related_stores,
    store,
    loading,
    get_categories_products_store,
    categories,
    loading_categories,
    get_products,
    get_products_list_page,
    products,
    loading_products,
    count,
    next,
    previous


}) => {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

    const params = useParams()
    const storeSlug = params.storeSlug

    useEffect(() => {
        get_store(storeSlug)
        get_related_stores(storeSlug)
        get_categories_products_store(storeSlug)
        get_products(storeSlug)
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

                                            </ConetenedorInfo>
                                        </ConetenedorProfile3>
                                        {/* Store name */}
                                        <ConetenedorInfo2>
                                            <h1 className="text-2xl text-color_letra_blanca">
                                                {store && store.name}
                                                {store && store.verified ? <CheckBadgeIcon className="h-5 w-5 inline-block text-blue-500" /> : <></>}




                                            </h1>
                                        </ConetenedorInfo2>
                                        {/* Store description */}
                                        <DescriptionStore>
                                            {store && store.description}
                                        </DescriptionStore>

                                        {/* Store data */}
                                        <ContenedorInfoUbication>
                                            <ContenedorInfoUbication1>
                                                <GlobeAmericasIcon className="h-4 w-4 mr-2 inline-block" />{store && store.city.nombre}
                                            </ContenedorInfoUbication1>
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
                                                    <h2 className="text-lg font-medium text-gray-900">Categorias</h2>
                                                    <div className="fixed inset-0 z-40 flex">
                                                        <Transition.Child
                                                            as={Fragment}
                                                            enter="ease-in-out duration-300"
                                                            enterFrom="translate-x-full"
                                                            enterTo="translate-x-0"
                                                            leave="ease-in-out duration-300"
                                                            leaveFrom="translate-x-0"
                                                            leaveTo="translate-x-full"
                                                        >
                                                            <Dialog.Panel className="ml-auto w-full max-w-xs h-full flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                                                <div className="px-4">
                                                                    <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-200">
                                                                        {loading_categories ? (
                                                                            <LoadingCategoriesStores />
                                                                        ) : (
                                                                            categories?.map((category) => (
                                                                                <li key={category.name} className="rounded-md py-2 px-9 bg-stone-900 hover:bg-azul_corp">
                                                                                    <Link to={`/products_by_category/${storeSlug}/${category.slug}`} className="block w-full text-left">
                                                                                        {category.name}
                                                                                    </Link>
                                                                                </li>
                                                                            ))
                                                                        )}
                                                                    </ul>
                                                                </div>
                                                            </Dialog.Panel>
                                                        </Transition.Child>
                                                    </div>
                                                </div>
                                            </Dialog.Panel>
                                        </Transition.Child>
                                    </div>
                                </Dialog>
                            </Transition.Root>
                            <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-300">{count} Productos</h1>
                                    <Searcher/>
                                    <div className="flex items-center">
                                        <Menu as="div" className="relative inline-block text-left">
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
                                        </Menu>

                                        <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                                            <span className="sr-only">View grid</span>
                                            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                                        </button>
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



                                            <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-200">
                                                {loading_categories ?
                                                    <LoadingCategoriesStores />
                                                    :
                                                    (categories && categories.map((category) => (
                                                        <li key={category.name} className="rounded-md py-2 px-9 bg-stone-900 hover:bg-azul_corp">
                                                            <Link to={`/products_by_category/${storeSlug}/${category.slug}`} className="block w-full text-left">{category.name}</Link>
                                                        </li>
                                                    )))
                                                }
                                            </ul>
                                        </form>

                                        {/* Product grid */}
                                        <div className="lg:col-span-3">

                                            {loading_products ?
                                                <LoadingStores /> : <>

                                                    <ProductList products={products && products} get_products_list_page={get_products_list_page} storeSlug={storeSlug} count={count && count} />
                                                </>}

                                        </div>
                                    </div>
                                </section>
                            </main>
                        </div>
                    </div>
                </>
            }
        </Layout>
    )
}

const mapStateToProps = state => ({
    store: state.Stores.store,
    loading: state.Stores.loading,
    categories: state.Store_Categories_Products.categories,
    loading_categories: state.Store_Categories_Products.loading_category_products,
    products: state.Products.products,
    loading_products: state.Products.loading_products,
    count: state.Products.count,
    next: state.Products.next,
    previous: state.Products.previous,

})

export default connect(mapStateToProps, {
    get_store,
    get_related_stores,
    get_categories_products_store,
    get_products,
    get_products_list_page
})(StoreDetail)