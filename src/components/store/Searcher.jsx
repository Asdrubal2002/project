import React from 'react'
import { useEffect, useState, Fragment } from 'react'

import { connect } from 'react-redux'
import { get_categories } from '../../redux/actions/store_categories'
import { Navigate, useNavigate } from 'react-router-dom';


function Searcher({
    get_categories,
    categories,
}) {

    const navigate = useNavigate()

    useEffect(() => {
        get_categories()
        window.scrollTo(0, 0);

    }, []);

    const [formData, setFormData] = useState({
        search: '',
        slug: ''
    })

    const {
        slug,
        search
    } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault()
        setTimeout(() => navigate(`/search/${slug}/${search}`), 0.2);
    }
    return (
        <div className="mt-2 flex items-center">
            <form onSubmit={e => onSubmit(e)} className="flex items-center flex-1">
                {/* Input de desplegable con autocompletado */}
                <select
                    name='slug'
                    onChange={e => onChange(e)}
                    className="bg-stone-800 py-2 pl-4 pr-2 rounded-l-full text-gray-300 text-sm leading-5 focus:outline-none w-1/3"
                >
                    <option value="" disabled hidden>Selecciona una opción</option>
                    {
                        categories &&
                        categories !== null &&
                        categories !== undefined &&
                        categories.map((category, index) => (
                            <option key={index} value={category.slug}>
                                {category.name}
                            </option>
                        ))
                    }
                </select>

                {/* Input de texto más largo */}
                <input
                    type="text"
                    name="search"
                    onChange={e => onChange(e)}
                    value={search}
                    className="
            flex-1
            bg-stone-800
            py-2 
            pl-4
            rounded-r-full 
            text-gray-300 
            placeholder:text-gray-400 
            text-sm 
            leading-5
            focus:outline-none
            w-full md:w-96"
                    placeholder="Busca tu localidad, barrio, estado, tienda"
                />
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.Store_Categories.categories,

})

export default connect(mapStateToProps, {
    get_categories,
})(Searcher)