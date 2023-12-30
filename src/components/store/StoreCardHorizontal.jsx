import React from 'react'
import { Link } from 'react-router-dom'


const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

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
              {data.name}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-300">{data.description.length > 150 ? data.description.slice(0, 300) : data.description}</p>
        </div>

        <div className="relative mt-8 flex items-center gap-x-4">
          <img src={data.logo} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
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