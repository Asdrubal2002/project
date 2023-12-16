import Layout from "../../hocs/Layout";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import { connect } from "react-redux";

import { Boton, ContenedorFormulario, ContenedorFormulario2, Formulario, MensajeError } from "./styles/Formulario";
import { useState } from "react";
import ComponenteInput from "./components/ComponenteInput";

import { Rings } from "react-loader-spinner";

import { reset_password } from "../../redux/actions/auth";

import { Navigate } from "react-router-dom";

const Reset_password = ({ reset_password, loading }) => {

    const [email, changeMail] = useState({ campo: "", valido: null });

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const [formularioValido, cambiarFormularioValido] = useState(null);
    const [requestSent, setRequestSent] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
    
        if (email.valido === "true") {
          reset_password(email.campo);
          setRequestSent(true)
          window.scrollTo(0, 0);
          cambiarFormularioValido(true);
          changeMail({ campo: "", valido: null });
        } else {
          cambiarFormularioValido(false);
        }
      };


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
                                    estado={email}
                                    cambiarEstado={changeMail}
                                    placeholder="Correo Electrónico"
                                    tipo="text"
                                    numero="40"
                                    label=""
                                    name="email"
                                    leyendaError="Digita el correo que registraste"
                                    expresionRegular={expresiones.correo}
                                />

                                <div className="flex items-center justify-between">
                                </div>
                                <div>
                                    {loading ? (
                                        <Boton type="submit">
                                            <Rings width={20} height={20} color="#fff" radius="6" />
                                        </Boton>
                                    ) : (
                                        <Boton type="submit">Recuperar mi contraseña</Boton>
                                    )}
                                </div>
                            </Formulario>
                            <div className="mt-6">
                                {formularioValido === false && (
                                    <MensajeError>
                                        <p className="flex">
                                            <b className="h-5 w-5 mr-2">
                                                <InformationCircleIcon />
                                            </b>
                                            Por favor escribe tu correo electrónico registrado.
                                        </p>
                                    </MensajeError>
                                )}

                             
                            </div>
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
    reset_password
})(Reset_password);