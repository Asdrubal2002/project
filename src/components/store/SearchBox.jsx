import React from 'react'

const SearchBox = ({categories}) => {
    return (
        <div>
            <div className="relative mt-2 rounded-full shadow-sm">
                <input
                    type="text"
                    name="price"
                    id="price"
                    className="
            bg-stone-900
            block
            w-full
            rounded-full 
            py-1.5 
            pl-36
            text-gray-300 
            placeholder:text-gray-400 
            sm:text-sm 
            sm:leading-6
            "
                    placeholder="Busca tu localidad, barrio, estado"
                />
                <div className="absolute inset-y-0 left-0  items-center">
                    <label htmlFor="currency" className="sr-only">
                        Currency
                    </label>
                    <select
                        name="category_id"
                        className="h-full rounded-full  bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm"
                    >
                       <option value={0}>Categorias</option>
                        {
                            categories && 
                            categories !== null &&
                            categories !== undefined &&
                            categories.map((category, index) => (
                                <option key={index} value={category.id}>
                                    {category.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
            </div>
        </div>
    )
}
export default SearchBox
