import Layout from "../../hocs/Layout"

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, XMarkIcon, ArrowDownIcon, ArrowUpIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

import { connect } from 'react-redux'
import { get_categories } from "../../redux/actions/store_categories"
import { get_stores, get_search_stores } from "../../redux/actions/stores"
import { Link, Navigate } from "react-router-dom"
import Stores_arrivals from "../../components/home/Store_arrivals"
import SearchBox from "../../components/store/SearchBox"
import StoreCard from "../../components/store/StoreCard"
import LoadingStores from "../../components/home/LoadingStores"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Mall = ({
    get_categories,
    categories,
    get_stores,
    stores,
    get_search_stores,
    search_stores,
    loading
}) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [filtered, setFiltered] = useState(false)
    const [render, setRender] = useState(false);

    const [formData, setFormData] = useState({
        search: '',
        category_id: '0'
    })
    const {
        category_id,
        search
    } = formData

    useEffect(() => {
        get_categories()
        get_stores()
        window.scrollTo(0, 0)
    }, [])

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        get_search_stores(search, category_id)
        setFiltered(true)
    }

    const onBuscar = e => {
        e.preventDefault()
        get_search_stores(search, category_id)
        setRender(!render)
        console.log(search)
        console.log(category_id)
    }

    if (render) {
        return <Navigate to='/search/stores' />;
    }


    const showStores = () => {
        let results = []
        let display = []

        if (
            search_stores &&
            search_stores !== null &&
            search_stores !== undefined &&
            filtered
        ) {
            search_stores.map((store, index) => {
                return display.push(
                    <div key={index}>
                        <StoreCard store={store} />
                    </div>
                );
            });
        } else if (
            !filtered &&
            stores &&
            stores !== null &&
            stores !== undefined
        ) {
            stores.map((store, index) => {
                return display.push(
                    <div key={index}>
                        <StoreCard store={store} />
                    </div>
                );
            });

        }
        for (let i = 0; i < display.length; i += 3) {
            results.push(
                <div key={i} className="relative max-w-7xl mx-auto">
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {display[i] ? display[i] : <div className=''></div>}
                        {display[i + 1] ? display[i + 1] : <div className=''></div>}
                        {display[i + 2] ? display[i + 2] : <div className=''></div>}
                    </div>
                </div>


            )
        }
        return results

    }

    return (
        <Layout>
            <div >
                <div>
                    {/* Mobile filter dialog */}
                    <Transition.Root show={mobileFiltersOpen} as={Fragment}>
                        <Dialog as="div" className="fixed inset-0 flex z-[100] lg:hidden " onClose={setMobileFiltersOpen}>
                            <Transition.Child
                                as={Fragment}
                                enter="transition-opacity ease-linear duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="transition-opacity ease-linear duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                                    <div className="px-4 flex items-center justify-between">
                                        <h2 className="text-lg font-medium text-gray-900">Categorias</h2>
                                        <button
                                            type="button"
                                            className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                                            onClick={() => setMobileFiltersOpen(false)}
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>

                                    {/* Filters */}
                                    <form onSubmit={e => onSubmit(e)} className="mt-4 border-t border-gray-300">

                                        {
                                            categories &&
                                            categories !== null &&
                                            categories !== undefined &&
                                            categories.map(category => (
                                                <Disclosure as="div" key={category.id} className="border-t border-gray-200 px-4 py-6">
                                                    {({ open }) => (
                                                        <>
                                                            <h3 className="-mx-2 -my-3 flow-root">
                                                                <Disclosure.Button className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                                    <span className="font-medium text-gray-900">{category.name}</span>
                                                                    <span className="ml-6 flex items-center">
                                                                        {open ? (
                                                                            <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
                                                                        ) : (
                                                                            <ArrowDownIcon className="h-5 w-5" aria-hidden="true" />
                                                                        )}
                                                                    </span>
                                                                </Disclosure.Button>
                                                            </h3>
                                                            <Disclosure.Panel className="pt-6">
                                                                <div className="space-y-6">
                                                                    {category.sub_categories.map((sub_category) => (
                                                                        <div key={sub_category.id} className="flex items-center">
                                                                            <input
                                                                                name='category_id'
                                                                                type='radio'
                                                                                value={sub_category.id.toString()}
                                                                                onChange={e => onChange(e)}
                                                                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                            />
                                                                            <label
                                                                                className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                            >
                                                                                {sub_category.name}
                                                                            </label>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </Disclosure.Panel>
                                                        </>
                                                    )}
                                                </Disclosure>
                                            ))}
                                        <button
                                            onClick={() => setMobileFiltersOpen(false)}
                                            type="submit"
                                            className="inline-flex items-center px-20 py-2 m-6 text-sm font-medium rounded-md shadow-sm text-white bg-azul_corp hover:bg-azul_corp_ho">
                                            Filtrar categoria
                                        </button>
                                    </form>
                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition.Root>

                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative z-10 flex items-baseline justify-between pt-14 pb-6 border-b border-gray-200">
                            <div className="w-3/4" >
                                <SearchBox
                                    search={search}
                                    onChange={onChange}
                                    onSubmit={onBuscar}
                                    categories={categories} />
                            </div>
                            <div className="flex items-center overflow-hidden mx-auto">
                                <h2 className="text-3xl tracking-tight font-bold text-color_letra_blanca sm:text-4xl max-lg:hidden">
                                    Tiendas
                                </h2>
                                <button
                                    type="button"
                                    className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                                    onClick={() => setMobileFiltersOpen(true)}
                                >
                                    <span className="sr-only">Categorias</span>
                                    <h2 className="text-3xl tracking-tight font-bold text-color_letra_blanca sm:text-4xl">
                                        <AdjustmentsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                                    </h2>
                                </button>
                            </div>
                        </div>
                        <div aria-labelledby="products-heading" className="pt-6 pb-24">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                                {/* Filters */}
                                <form onSubmit={e => onSubmit(e)} className="hidden lg:block">
                                    {
                                        categories &&
                                        categories !== null &&
                                        categories !== undefined &&
                                        categories.map(category => (
                                            <Disclosure as="div" key={category.id} className="border-b border-gray-200 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-my-3 flow-root">
                                                            <Disclosure.Button className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-white">{category.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <ArrowUpIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <ArrowDownIcon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-4">
                                                                {category.sub_categories.map((sub_category) => (
                                                                    <div key={sub_category.id} className="flex items-center ml-2">
                                                                        <input
                                                                            name='category_id'
                                                                            type='radio'
                                                                            value={sub_category.id.toString()}
                                                                            onChange={e => onChange(e)}
                                                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600"
                                                                        />
                                                                        <label
                                                                            htmlFor={sub_category.id}
                                                                            className="ml-3 text-sm text-gray-100"
                                                                        >
                                                                            {sub_category.name}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    <button
                                        type="submit"
                                        className="inline-flex items-center px-20 py-2 m-2 text-sm font-medium rounded-md shadow-sm text-white bg-azul_corp hover:bg-azul_corp_ho">
                                        Filtrar categoria
                                    </button>
                                </form>
                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    {loading ?
                                        <LoadingStores />
                                        :
                                        <>
                                         {stores && showStores()}
                                        </>
                                    }

                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </Layout >
    )
}

const mapStateToProps = state => ({
    categories: state.Store_Categories.categories,
    stores: state.Stores.stores,
    search_stores: state.Stores.search_stores,
    loading: state.Stores.loading
})

export default connect(mapStateToProps, {
    get_categories,
    get_stores,
    get_search_stores
})(Mall)