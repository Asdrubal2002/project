/* This example requires Tailwind CSS v2.0+ */
import { Link } from "react-router-dom"

export default function Stores_arrivals({
    data
}) {
    return (
        <div className="z-0">
            <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl tracking-tight font-bold text-color_letra_blanca sm:text-4xl">
                            Tiendas
                        </h2>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">

                        {data &&
                            data !== null &&
                            data !== undefined &&
                            data.map((store) => (
                                <div key={store.slug} className="flex flex-col rounded-lg shadow-lg overflow-hidden shadow-stone-800">
                                    <div className="flex-shrink-0">
                                        <Link to={`store/${store.slug}`} className="block mt-2">
                                            <img
                                                src={store.banner}
                                                alt="hola"
                                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                            />
                                        </Link>
                                    </div>
                                    <div className="flex-1 bg-neutral-900  p-6 flex flex-col justify-between">
                                        <div className="flex-1">
                                            <Link to="/" className="text-sm font-medium text-azul_corp_ho">
                                               
                                                {store.category}
                                               
                                            </Link>

                                            <Link to="/" className="block mt-2">
                                                <p className="text-xl font-semibold text-gray-200">
                                                    {store.name}
                                                </p>

                                                <p className="text-base font-semibold text-gray-400">
                                                {store.location}
                                                </p>


                                                <p className="float-right mt-3 text-base text-gray-500">
                                                {store.schedule}
                                                </p>
                                            </Link>
                                        </div>
                                        <div className="mt-6 flex items-center">
                                            <div className="flex-shrink-0">
                                                <Link to="/">
                                                    <img className="h-10 w-10 rounded-full"
                                                        src={store.logo}
                                                        alt="" />
                                                </Link>
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-300">
                                                    <a href="#" className="hover:underline">
                                                    {store.name}
                                                    </a>
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
                            ))}




                    </div>

                </div>
            </div>
        </div>


    )
}
