import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'


function StoreCardHorizontal({ data, index }) {
  return (
    <div className="pt-5">
      <article key={data.id} className="flex w-full flex-col items-start justify-between">
        <div className="w-full flex justify-between items-center text-xs">
          <div className="text-gray-300">
            {data.city.nombre} 
          </div>
          <a
            href={''}
            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
          >
            Me gusta
          </a>
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-300 group-hover:text-azul_corp_ho">
            <Link to={`/store/${data.slug}`}>
              <span className="absolute inset-0" />
              {data.name}  {data.verified ? <CheckBadgeIcon className="h-5 w-5 inline-block text-blue-500" /> : <></>}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-300">{data.description.length > 150 ? data.description.slice(0, 300) : data.description}</p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <img src={data.logo} alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-400">
              <Link to={`/store/${data.slug}`}>
                <span className="absolute inset-0" />
                {data.name}
              </Link>
            </p>
            <p className="text-gray-600"> {data.schedule}</p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default StoreCardHorizontal