import Layout from "../../hocs/Layout"

import { Fragment, useEffect, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon, XMarkIcon, ArrowDownIcon, ArrowUpIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

import { connect } from 'react-redux'
import { get_categories } from "../../redux/actions/store_categories"
import { get_store_list_category, get_store_list_category_page } from "../../redux/actions/stores"
import { Navigate, useParams } from "react-router-dom"
import SearchBox from "./SearchBox"
import StoreCard from "./StoreCard"
import LoadingStores from "../home/LoadingStores"
import LoadingCategoryStore from "./LoadingCategoryStore"
import { ListStoreCategoriesDesktop } from "./ListStoreCategoriesDesktop"
import { ListStoreCategoriesMobile } from "./ListStoreCategeoriesMobile"
import SmallSetPagination from "../pagination/SmallSetPagination"

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Category= ({
    get_categories,
    categories,
    get_store_list_category,
    get_store_list_category_page,
    stores,
    count,
    next,
    previous,
}) => {
    
    const params = useParams()
    const slug = params.slug
    

    useEffect(() => {
        window.scrollTo(0,0)
        get_categories()
        get_store_list_category(slug)
    }, [])




    const showStores = () => {
        let results = []
        let display = []

        if (
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
                    {/* <ListStoreCategoriesMobile
                        categories={categories}
                        onSubmit={onSubmit}
                        onChange={onChange}
                        loading_category_store={loading_category_store}
                        mobileFiltersOpen={mobileFiltersOpen}
                        setMobileFiltersOpen={setMobileFiltersOpen}
                    /> */}

                    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative z-10 flex items-baseline justify-between pt-14 pb-6 border-b border-stone-600">
                            <div className="w-3/4" >
                                {/* <SearchBox
                                    search={search}
                                    onChange={onChange}
                                    onSubmit={onBuscar}
                                    categories={categories} /> */}
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
                            <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                                {/* Filters */}
                               
                                        <ListStoreCategoriesDesktop
                                            categories={categories}
                                        />
                                   
                                {/* Product grid */}
                                <div className="lg:col-span-3">
                                   
                                        Categorias {slug}
                                        {/* {stores && showStores()}2:17:02 */}
                                       
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
    stores: state.Stores.store_list_category,
    count: state.Stores.count,
    next: state.Stores.next,
    previous: state.Stores.previous
})

export default connect(mapStateToProps, {
    get_categories,
    get_store_list_category,
    get_store_list_category_page
})(Category)