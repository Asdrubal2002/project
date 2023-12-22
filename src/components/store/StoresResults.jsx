import Layout from "../../hocs/Layout"

import { useEffect, useState } from 'react'
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline"

import { connect } from 'react-redux'
import { get_categories } from "../../redux/actions/store_categories"
import { get_stores, get_search_stores, get_search_stores_page } from "../../redux/actions/stores"
import { Navigate } from "react-router-dom"
import SearchBox from "../../components/store/SearchBox"
import StoreCard from "../../components/store/StoreCard"
import { ListStoreCategoriesMobile } from "./ListStoreCategeoriesMobile"
import LoadingCategoryStore from "./LoadingCategoryStore"
import { ListStoreCategoriesDesktop } from "./ListStoreCategoriesDesktop"
import SmallSetPagination from "../pagination/SmallSetPagination"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const StoreResults = ({
  get_categories,
  categories,
  get_stores,
  stores,
  get_search_stores,
  search_stores,
  loading,
  loading_category_store,
  count,
  next,
  previous,
  get_search_stores_page
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
  }

  if (render) {
    return <Navigate to='/search_stores' />;
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
    }
    else if (
      search_stores &&
      search_stores !== null &&
      search_stores !== undefined
    ) {
      search_stores.map((store, index) => {
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
          <ListStoreCategoriesMobile
            categories={categories}
            onSubmit={onSubmit}
            onChange={onChange}
            loading_category_store={loading_category_store}
            mobileFiltersOpen={mobileFiltersOpen}
            setMobileFiltersOpen={setMobileFiltersOpen}
          />

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between pt-14 pb-6 border-b border-gray-200">
              <div className="w-3/4" >
                <SearchBox
                  search={search}
                  onChange={onChange}
                  onSubmit={onBuscar}
                  categories={categories}
                />
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
                    <AdjustmentsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
                  </h2>
                </button>
              </div>
            </div>
            <div className="pt-4">
              <h3 className="text-2xl font-bold text-color_letra_blanca  ">
                Tiendas({
                  search_stores &&
                  search_stores !== null &&
                  search_stores !== undefined &&
                  search_stores.length
                })
              </h3>
            </div>

            <div aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
                {/* Filters */}
                {loading_category_store ?
                  <LoadingCategoryStore />
                  :
                  <>
                    <ListStoreCategoriesDesktop
                      categories={categories}
                      onSubmit={onSubmit}
                      onChange={onChange}
                    />
                  </>
                }
                {/* Product grid */}
                <div className="lg:col-span-3">
                  {stores && showStores()}
                </div>
              </div>
            </div>
            <div className="pb-10 ">
                            <SmallSetPagination 
                            list_page={get_search_stores_page} 
                            list={stores} 
                            count={count && count} />
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
  loading: state.Stores.loading,
  loading_category_store: state.Store_Categories.loading_category_store,
  count: state.Stores.count,
  next: state.Stores.next,
  previous: state.Stores.previous

})

export default connect(mapStateToProps, {
  get_categories,
  get_stores,
  get_search_stores,
  get_search_stores_page
})(StoreResults)