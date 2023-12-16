import Layout from "../../hocs/Layout";
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

import { Boton, ContenedorFormulario, ContenedorFormulario2, Formulario, MensajeError } from "./styles/Formulario";
import { useState } from "react";
import ComponenteInput from "./components/ComponenteInput";

import { signup } from "../../redux/actions/auth";

import { Rings } from "react-loader-spinner";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

const SignUp = ({ signup, loading }) => {

    const [email, changeMail] = useState({ campo: "", valido: null });
    const [password, changePass] = useState({ campo: "", valido: null });
    const [re_password, changePass2] = useState({ campo: "", valido: null });
    const [formularioValido, cambiarFormularioValido] = useState(null);

    const [accountCreated, setAccountCreated] = useState(false);

    const expresiones = {
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        clave:
            /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/, // 8 a 16 digitos.
    };

    const validarPassword2 = () => {
        if (password.campo.length > 0) {
            if (password.campo !== re_password.campo) {
                changePass2((prevState) => {
                    return { ...prevState, valido: "false" };
                });
            } else {
                changePass2((prevState) => {
                    return { ...prevState, valido: "true" };
                });
            }
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (
            email.valido === "true" &&
            password.valido === "true" &&
            re_password.valido === "true"
        ) {
            signup(
                email.campo,
                password.campo,
                re_password.campo
            );
            setAccountCreated(true);
            cambiarFormularioValido(true);
            changeMail({ campo: "", valido: null });
            changePass({ campo: "", valido: null });
            changePass2({ campo: "", valido: null });

            // ...
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
                                            <span>¿Como creo mi cuenta?</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                            En el proceso de completar la solicitud, por favor, asegúrate de proporcionar con precisión todos los datos solicitados. Te instamos a revisar detenidamente cada campo y brindar la información correspondiente, cumpliendo con los requisitos especificados.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-azul_corp hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                            <span>Especificaciones para tu contraseña</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">

                                            Por favor, verifica que tu contraseña cumple con los siguientes requisitos: longitud de 8 a 16 caracteres, al menos un número, una minúscula, una mayúscula y un carácter no alfanumérico. Esta combinación refuerza la seguridad. Gracias por colaborar en la protección de tus datos.
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="mt-2">
                                {({ open }) => (
                                    <>
                                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-azul_corp hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                            <span>Términos y Condiciones de Ruvlo</span>
                                            <ChevronUpIcon
                                                className={`${open ? 'rotate-180 transform' : ''
                                                    } h-5 w-5 text-purple-500`}
                                            />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                                        Al acceder y utilizar Ruvlo, aceptas y te comprometes a cumplir con estos términos y condiciones.
                                        <Link to="/conditions" className="text-blue-800 text-bold"> Términos y Condiciones</Link>
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
                                    leyendaError="Digita tu correo"
                                    expresionRegular={expresiones.correo}
                                />
                                <ComponenteInput
                                    estado={password}
                                    cambiarEstado={changePass}
                                    placeholder="Contraseña"
                                    tipo="password"
                                    numero="20"
                                    label=""
                                    name="password"
                                    leyendaError="La contraseña debe tener al entre 8 y 16 caracteres, al menos un número, una minúscula, una mayúscula y al menos un carácter no alfanumérico (símbolo)."
                                    expresionRegular={expresiones.clave}
                                />
                                <ComponenteInput
                                    estado={re_password}
                                    cambiarEstado={changePass2}
                                    tipo="password"
                                    numero="20"
                                    placeholder="Confirma tu contraseña"
                                    label=""
                                    name="re_password"
                                    leyendaError="Ambas contraseñas deben ser iguales."
                                    funcion={validarPassword2}
                                />
                                <div>
                                    {loading ? (
                                        <Boton type="submit">
                                            <Rings width={20} height={20} color="#fff" radius="6" />
                                        </Boton>
                                    ) : (
                                        <Boton type="submit">Regístrarse</Boton>
                                    )}

                                </div>
                            </Formulario>
                            <div className="mt-6">
                                {/* <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-stone-900 text-gray-400">O continua con</span>
                    </div>
                  </div> */}
                                {formularioValido === false && (
                                    <MensajeError>
                                        <p className="flex">
                                            <b className="h-5 w-5 mr-2">
                                                <InformationCircleIcon />
                                            </b>
                                            Por favor rellena el formulario completamente.
                                        </p>
                                    </MensajeError>
                                )}
                                <div className="mt-6 grid grid-cols-3 gap-3">
                                    <div>
                                        <a
                                            href="#"
                                            className="w-full inline-flex justify-center py-2 px-4 border border-stone-900 rounded-md shadow-sm bg-stone-800 text-sm font-medium text-gray-500 hover:bg-stone-600"
                                        >
                                            <span className="sr-only">Sign in with Facebook</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="w-full inline-flex justify-center py-2 px-4 border border-stone-900 rounded-md shadow-sm bg-stone-800 text-sm font-medium text-gray-500 hover:bg-stone-600"
                                        >
                                            <span className="sr-only">Sign in with Twitter</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a
                                            href="#"
                                            className="w-full inline-flex justify-center py-2 px-4 border border-stone-900 rounded-md shadow-sm bg-stone-800 text-sm font-medium text-gray-500 hover:bg-stone-600"
                                        >
                                            <span className="sr-only">Sign in with GitHub</span>
                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ContenedorFormulario2>
                    </ContenedorFormulario>
                </div>
            </>
        </Layout>
    )
}
const mapStateToProps = (state) => ({
    loading: state.Auth.loading,
});
export default connect(mapStateToProps, {
    signup
})(SignUp);
