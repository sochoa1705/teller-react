import React, {useEffect, useState} from "react";
import {Divider} from 'primereact/divider';
import {Button} from 'primereact/button';
import {Image} from 'primereact/image';
import {Formik, Field, Form} from 'formik';
import {createAPIEndpoint, ENDPOINTS} from "../../../api";
import axios from "axios";
import banc from "./../../../assets/banc.jpg";

export default function LoginDemo() {
    const [value, setValue] = useState('');
    axios.defaults.headers['X-API-KEY'] = 'ccb12090';
    useEffect(() => {

    }, []);

    return (<div className="card flex justify-content-center contex">
        <div className="flex flex-column md:flex-row md:w-50rem">
            <div className="w-full md:w-4 flex align-items-center justify-content-center py-4">
                <table className="default">
                    <tr>
                        <td><Image src={banc} alt="Image" width="650"/></td>
                    </tr>
                    <tr>
                    </tr>
                </table>
            </div>
            <div className="w-full md:w-3">
                <Divider layout="horizontal" className="flex md:hidden" align="center">
                    <b></b>
                </Divider>
            </div>
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
                <div className="text-center mb-5">
                    <img src={banc} alt="hyper" height={50} className="mb-3"/>
                    <div className="text-900 text-3xl font-medium mb-3">Bienvenido</div>
                    <span className="text-600 font-medium line-height-3">No tienes una cuenta?</span>
                    <a href={"register"} className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Solicitala!</a>
                </div>

                <div>
                    <Formik
                        initialValues={{
                            user: '', password: '',
                        }}
                        onSubmit={data => {
                            console.log(data);

                            createAPIEndpoint(ENDPOINTS.accounts).fetch()
                                .then(function (res) {
                                    for (let item of res.data) {
                                        console.log(item)
                                        if (item.Username === data.user && item.Password === data.password) {
                                            window.location.href = '/accounts';
                                        } else {

                                        }

                                    }


                                })
                                .catch(function (res) {
                                    console.log(res)
                                });
                        }}

                    >

                        <Form>
                            <label htmlFor="user" className="block text-900 font-medium mb-2">Usuario</label>
                            <Field id="user" name="user" type="text" placeholder="Ingresa tu Usuario"
                                   className="w-full mb-3 texts"/>

                            <label htmlFor="password" className="block text-900 font-medium mb-2">Contraseña</label>
                            <Field type="password" name="password" placeholder="Ingresa tu Contraseña"
                                   className="w-full mb-3 texts"/>

                            <div className="flex align-items-center justify-content-between mb-6">
                                <div className="flex align-items-center">

                                    <label htmlFor="rememberme"></label>
                                </div>
                                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Olvidaste
                                    tu contraseña?</a>
                            </div>

                            <Button label="Iniciar Sesión" icon="pi pi-user" className="w-full"/>
                        </Form>
                    </Formik>
                </div>
            </div>


        </div>
    </div>)
}

