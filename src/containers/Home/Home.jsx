import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Layout from '../../hocs/Layout'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

import { connect } from 'react-redux'

import { get_stores_by_arrival } from '../../redux/actions/stores'
import Banner from '../../components/home/Banner'
import Stores_arrivals from '../../components/home/Store_arrivals'
import Footer from '../../components/home/Footer'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

const Home = ({ get_stores_by_arrival, stores_arrival }) => {

  useEffect(() => {
    window.scrollTo(0,0);
    get_stores_by_arrival();

  }, []);


  return (
    <Layout>
      <Banner/>
      <Stores_arrivals data={stores_arrival}/>
      <Footer/>
    </Layout>
  )
}

const mapStateToProps = state => ({
  stores_arrival: state.Stores.stores_arrival
})

export default connect(mapStateToProps, {
  get_stores_by_arrival
})(Home)
