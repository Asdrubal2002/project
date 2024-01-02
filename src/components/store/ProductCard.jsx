import React from 'react'

function dataCard({ data, index }) {
    return (
       
                <div key={data.id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                            src={data.photo}
                            alt={data.imageAlt}
                            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                            <h3 className="text-sm text-gray-700">
                                <a href={data.href}>
                                    <span aria-hidden="true" className="absolute inset-0" />
                                    {data.name}
                                </a>
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">{data.description.length > 150 ? data.description.slice(0, 100) : data.description}...</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{data.price}</p>
                    </div>
                </div>
    )
}

export default dataCard