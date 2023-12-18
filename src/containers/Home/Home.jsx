import { useEffect, useState } from 'react'
import Layout from '../../hocs/Layout'
import { connect } from 'react-redux'
import { get_stores_by_arrival } from '../../redux/actions/stores';
import Banner from '../../components/home/Banner';
import Stores_arrivals from '../../components/home/Store_arrivals';
import Footer from '../../components/home/Footer';
import LoadingStores from '../../components/home/LoadingStores'

const Home = ({ get_stores_by_arrival, stores_arrival, loading }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
    get_stores_by_arrival();

  }, []);


  return (
    <Layout>
      <Banner />
      <div className="z-0">
        <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">

          {loading ?
            <LoadingStores />
            :
            <Stores_arrivals data={stores_arrival} />
          }
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

const mapStateToProps = state => ({
  stores_arrival: state.Stores.stores_arrival,
  loading: state.Stores.loading
})

export default connect(mapStateToProps, {
  get_stores_by_arrival
})(Home)
