import React from 'react'
import { Link } from 'react-router-dom'

const StoreCard = ({ store }) => {
    return (

        <div key={store.slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden shadow-stone-900">
            <div className="flex-shrink-0">
                <Link to={`/store/${store.slug}`} className="block mt-2">
                    <img
                        src={store.banner}
                        alt="hola"
                        className="h-full w-full object-cover object-center lg:h-40 lg:w-full"
                    />
                </Link>
            </div>
            <div className="flex-1 bg-neutral-900  p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <Link to="/" className="text-sm font-medium text-azul_corp_ho">

                        {store.category.name}

                    </Link>

                    <Link to={`/store/${store.slug}`} className="block mt-2">
                        <p className="text-xl font-semibold text-gray-200">
                            {store.name}
                        </p>

                        <p className="text-base font-semibold text-gray-400">
                            {store.location}
                        </p>


                        <p className="float-right mt-3 text-base text-gray-500">
                            {store.likes} Me gusta
                        </p>
                    </Link>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <Link to={`/store/${store.slug}`}>
                            <img className="h-10 w-10 rounded-full"
                                src={store.logo}
                                alt="" />
                        </Link>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-300">
                            <Link to={`store/${store.slug}`} className="hover:underline">
                                {store.name}
                            </Link>
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <div>
                                {store.schedule}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>







    )
}

export default StoreCard