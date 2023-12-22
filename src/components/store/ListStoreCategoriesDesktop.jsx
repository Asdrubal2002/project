import { Disclosure } from '@headlessui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import React from 'react'

export const ListStoreCategoriesDesktop = ({
    categories,
    onSubmit,
    onChange
}) => {
    return (
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
                                                    name='slug'
                                                    type='radio'
                                                    value={sub_category.slug}
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
    )
}
