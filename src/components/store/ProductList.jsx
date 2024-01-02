import React from 'react'
import ProductCard from './ProductCard'

function ProductList({ products, get_products_list_page, storeSlug, count }) {
    return (
        <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {products && products.map((product, index) => (
                    <ProductCard data={product} key={index} index={index} />
                ))}
            </div>
        </div>
    )
}

export default ProductList