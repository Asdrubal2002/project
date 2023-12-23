import { Disclosure } from '@headlessui/react'
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'

export const ListStoreCategoriesDesktop = ({
    categories,
    onSubmit,

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
                                        {category.sub_categories.map((sub_category, index) => (
                                            <div key={sub_category.id} className="inline-flex items-center items-center">

                                                <Link key={index} to={`/category/${sub_category.slug}`}
                                                    className=" px-2 py-2 m-0.5 text-sm font-medium rounded-md shadow-sm text-white bg-stone-900 hover:bg-azul_corp_ho">
                                                    {sub_category.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                ))}
        </form>
    )
}

