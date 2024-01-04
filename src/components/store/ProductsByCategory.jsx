import React, { useEffect } from 'react'
import { connect } from "react-redux";


import { get_products_by_category, get_products_by_category_page } from '../../redux/actions/products'
import Layout from '../../hocs/Layout';
import { useParams } from 'react-router-dom';
import ProductList from './ProductList';
import LoadingStores from '../home/LoadingStores';

const ProductsByCategory = ({
  get_products_by_category,
  get_products_by_category_page,
  products,
  count,
  next,
  previous,
  loading_products
}) => {
  const params = useParams()
  const storeSlug = params.storeSlug
  const categorySlug = params.categorySlug

  useEffect(() => {
    get_products_by_category(storeSlug, categorySlug)
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <div>
        {loading_products ?
          <LoadingStores /> : <>

            <ProductList products={products && products} get_products_list_page={get_products_by_category_page} storeSlug={storeSlug} count={count && count} />
          </>}
      </div>
    </Layout>
  )
}

const mapStateToProps = state => ({
  products: state.Products_By_Category.products,
  count: state.Products_By_Category.count,
  next: state.Products_By_Category.next,
  previous: state.Products_By_Category.previous,
  loading_products: state.Products_By_Category.loading_products_by_category,

})
export default connect(mapStateToProps, {
  get_products_by_category,
  get_products_by_category_page
})(ProductsByCategory)