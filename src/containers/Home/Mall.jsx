import Layout from "../../hocs/Layout"

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, XMarkIcon, Bars4Icon, Bars2Icon } from "@heroicons/react/24/outline"

import { connect } from 'react-redux'
import { get_categories } from "../../redux/actions/store_categories"
import { get_stores, get_search_stores } from "../../redux/actions/stores"
import { Link } from "react-router-dom"
import Stores_arrivals from "../../components/home/Store_arrivals"
import SearchBox from "../../components/store/SearchBox"
import StoreCard from "../../components/store/StoreCard"




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

const Mall = ({
    get_categories,
    categories,
    get_stores,
    stores,
    get_search_stores,
    search_stores
}) => {
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
    const [filtered, setFiltered] = useState(false)
    const [formData, setFormData] = useState({
        category_id: '0'
    })

    const {
        category_id
    } = formData


    useEffect(() => {
        get_categories()
        get_stores()
        window.scrollTo(0, 0)
    }, [])

    const onChange = e => setFormstores({ ...formstores, [e.target.name]: e.target.value })

    const onSubmit = e => {
        e.preventDefault()
        get_search_stores(category_id)
        setFiltered(true)
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
                        {/* <Stores_arrivals data={store} /> */}
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
                <div className="relative max-w-7xl mx-auto">

                    <div key={i} className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
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
                                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
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
                                    <form className="mt-4 border-t border-gray-300">
                                        <h3 className="sr-only">Categories</h3>
                                        <ul role="list" className="font-medium text-color_letra_blanca px-2 py-3">
                                            {
                                                categories &&
                                                categories !== null &&
                                                categories !== undefined &&
                                                categories.map(category => {
                                                    if (category.sub_categories.length === 0) {
                                                        return (
                                                            <div key={category.id} className='flex items-center h-5 my-5'>
                                                                <input
                                                                    name='category_id'
                                                                    onChange={e => onChange(e)}
                                                                    value={category.id.toString()}
                                                                    type='radio'
                                                                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                                />
                                                                <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                    {category.name}
                                                                </label>
                                                            </div>
                                                        )
                                                    } else {
                                                        let result = []
                                                        result.push(
                                                            <div key={category.id} className='flex items-center h-5'>
                                                                <input
                                                                    name='category_id'
                                                                    onChange={e => onChange(e)}
                                                                    value={category.id.toString()}
                                                                    type='radio'
                                                                    className='focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded-full'
                                                                />
                                                                <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                    {category.name}
                                                                </label>
                                                            </div>
                                                        )

                                                        category.sub_categories.map(sub_category => {
                                                            result.push(
                                                                <div key={sub_category.id} className='flex items-center h-5 ml-2 my-5'>
                                                                    <input
                                                                        name='category_id'
                                                                        onChange={e => onChange(e)}
                                                                        value={sub_category.id.toString()}
                                                                        type='radio'
                                                                        className='focus:ring-blue-500 h-4 w-4 text-blue-700 border-gray-300 rounded-full'
                                                                    />
                                                                    <label className="ml-3 min-w-0 flex-1 text-gray-500">
                                                                        {sub_category.name}
                                                                    </label>
                                                                </div>
                                                            )
                                                        })

                                                        return result
                                                    }
                                                })
                                            }
                                        </ul>

                                        {filters.map((section) => (
                                            <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                                                {({ open }) => (
                                                    <>
                                                        <h3 className="-mx-2 -my-3 flow-root">
                                                            <Disclosure.Button className="px-2 py-3 w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                                                                <span className="font-medium text-gray-900">{section.name}</span>
                                                                <span className="ml-6 flex items-center">
                                                                    {open ? (
                                                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-6">
                                                                {section.options.map((option, optionIdx) => (
                                                                    <div key={option.value} className="flex items-center">
                                                                        <input
                                                                            id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            name={`${section.id}[]`}
                                                                            defaultValue={option.value}
                                                                            type="checkbox"
                                                                            defaultChecked={option.checked}
                                                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
                                                                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                            className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                        >
                                                                            {option.label}
                                                                        </label>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </Disclosure.Panel>
                                                    </>
                                                )}
                                            </Disclosure>
                                        ))}
                                    </form>
                                </div>
                            </Transition.Child>
                        </Dialog>
                    </Transition.Root>

                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
                            <div className="w-3/4" >
                                <SearchBox categories={categories} />
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
                                    <span className="sr-only">Filters</span>
                                    <h2 className="text-3xl tracking-tight font-bold text-color_letra_blanca sm:text-4xl">
                                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                                    </h2>
                                </button>
                            </div>
                        </div>
                        <section aria-labelledby="products-heading" className="pt-6 pb-24">
                            <h2 id="products-heading" className="sr-only">
                                Products
                            </h2>
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                                {/* Filters */}
                                <form className="hidden lg:block">
                                    <h2 className="bg-stone-900  rounded-full ">Categorias de tiendas</h2>
                    
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
                                                                        <Bars2Icon className="h-5 w-5" aria-hidden="true" />
                                                                    ) : (
                                                                        <Bars4Icon className="h-5 w-5" aria-hidden="true" />
                                                                    )}
                                                                </span>
                                                            </Disclosure.Button>
                                                        </h3>
                                                        <Disclosure.Panel className="pt-6">
                                                            <div className="space-y-4">
                                                                {category.sub_categories.map((sub_category) => (
                                                                    
                                                                    <div key={sub_category.id} className="lex items-center ml-2">
                                                                        <inputf
                                                                            name='sub_category.id'
                                                                            type='radio'
                                                                            className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                                                        />
                                                                        <label
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
                                </form>
                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                    {/* Replace with your content */}

                                    {/* <Stores_arrivals data={stores}/>*/}
                                    {stores && showStores()}

                                    {/* /End replace */}

                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </Layout>
    )
}

const mapStateToProps = state => ({
    categories: state.Store_Categories.categories,
    stores: state.Stores.stores,
    search_stores: state.Stores.search_stores

})

export default connect(mapStateToProps, {
    get_categories,
    get_stores
})(Mall)