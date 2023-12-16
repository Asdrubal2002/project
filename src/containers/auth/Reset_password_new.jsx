import Layout from "../../hocs/Layout";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { connect } from "react-redux";

import { Boton, ContenedorFormulario, ContenedorFormulario2, Formulario, MensajeError } from "./styles/Formulario";
import { useState } from "react";
import ComponenteInput from "./components/ComponenteInput";

import { Rings } from "react-loader-spinner";

import { reset_password_confirm } from "../../redux/actions/auth";

import { Link, Navigate, useParams } from "react-router-dom";

const Reset_password_new = ({ reset_password_confirm, loading }) => {

    const [new_password, changePassNew] = useState({ campo: "", valido: null });
    const [re_new_password, changePass2New] = useState({ campo: "", valido: null });

    const expresiones = {
        clave:
            /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/, // 8 a 16 digitos.
    };

    const [formularioValido, cambiarFormularioValido] = useState(null);

    const [requestSent, setRequestSent] = useState(false);

    const validarPassword2 = () => {
        if (new_password.campo.length > 0) {
            if (new_password.campo !== re_new_password.campo) {
                changePass2New((prevState) => {
                    return { ...prevState, valido: "false" };
                });
            } else {
                changePass2New((prevState) => {
                    return { ...prevState, valido: "true" };
                });
            }
        }
    };

    const params = useParams()


    const onSubmit = (e) => {
        e.preventDefault();
        const uid = params.uid
        const token = params.token

        if (new_password.valido === "true" && re_new_password.valido === "true") {
            reset_password_confirm(uid, token, new_password.campo, re_new_password.campo)
            setRequestSent(true);
            window.scrollTo(0, 0);
            cambiarFormularioValido(true);
            changePassNew({ campo: "", valido: null });
            changePass2New({ campo: "", valido: null });
            // ...
        } else {
            cambiarFormularioValido(false);
        }
    };

    if (requestSent) return <Navigate to="/login" replace={true} />;

    return (
        <Layout>
            <>
                <div className="grid grid-cols-1 md:grid-cols-2">

                    <div className="w-full px-4 pt-16">
                        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-azul_corp hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                            <span>What is your refund policy?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            If you're unhappy with your purchase for any reason, email us
                                            within 90 days and we'll refund you in full, no questions asked.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-azul_corp hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-azul_corp hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-azul_corp hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                            <span>Do you offer technical support?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            No.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    </div>



                    <ContenedorFormulario>
                        <ContenedorFormulario2>
                            <Formulario onSubmit={onSubmit}>
                                <ComponenteInput
                                    estado={new_password}
                                    cambiarEstado={changePassNew}
                                    placeholder="Nueva Contraseña"
                                    tipo="password"
                                    numero="20"
                                    label=""
                                    name="new_password"
                                    leyendaError="La contraseña debe tener al entre 8 y 16 caracteres, al menos un número, una minúscula, una mayúscula y al menos un carácter no alfanumérico (símbolo)."
                                    expresionRegular={expresiones.clave}
                                />

                                <ComponenteInput
                                    estado={re_new_password}
                                    cambiarEstado={changePass2New}
                                    tipo="password"
                                    numero="20"
                                    placeholder="Confirma tu contraseña"
                                    label=""
                                    name="re_new_password"
                                    leyendaError="Ambas contraseñas deben ser iguales."
                                    funcion={validarPassword2}
                                />

                                <div>
                                    {loading ? (
                                        <Boton type="submit">
                                            <Rings width={20} height={20} color="#fff" radius="6" />
                                        </Boton>
                                    ) : (
                                        <Boton type="submit">Registrar nueva contraseña</Boton>
                                    )}
                                </div>
                            </Formulario>

                           
                        </ContenedorFormulario2>
                    </ContenedorFormulario>
                </div>
            </>

        </Layout>
    )
};
const mapStateToProps = (state) => ({
    loading: state.Auth.loading,
});

export default connect(mapStateToProps, {
    reset_password_confirm,
})(Reset_password_new);