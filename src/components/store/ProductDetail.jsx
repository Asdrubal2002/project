import React, { useEffect, useState } from 'react'
import Layout from '../../hocs/Layout'
import { connect } from "react-redux";
import { StarIcon } from '@heroicons/react/24/solid'
import { RadioGroup } from '@headlessui/react'


import { get_product } from '../../redux/actions/products'
import { useParams } from 'react-router-dom';

function ProductDetail({
    get_product,
    product
}) {

    const params = useParams()
    const slugProduct = params.slugProduct

    useEffect(() => {
        get_product(slugProduct)
        window.scrollTo(0, 0);
    }, [])

  return (
    
    <Layout>
     {product && product.name}
     5:41:27 
    </Layout>
  )
}

const mapStateToProps = state => ({
    product: state.Products.product,


})

export default connect(mapStateToProps, {
    get_product
})(ProductDetail)