import { ArrowDownIcon, ArrowUpIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import LoadingCategoryStore from './LoadingCategoryStore'

export const ListStoreCategoriesMobile = ({
    categories,
    onSubmit,
    onChange,
    loading_category_store,
    mobileFiltersOpen,
    setMobileFiltersOpen
}) => {
    return (
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
                        {loading_category_store ?
                            <LoadingCategoryStore />
                            : <>
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
                                                                            name='slug'
                                                                            type='radio'
                                                                            value={sub_category.slug}
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
                            </>}

                    </div>
                </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}
