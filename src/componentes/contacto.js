import React from "react";
import "./estilos/home.css"
import Button from 'react-bootstrap/Button';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {

    const [state, handleSubmit] = useForm("mkneagjq");
     if (state.succeeded) {
        return <p className="FormExitoso">Su consulta a sido enviada con éxito!</p>;
    } 
    
    return (
        <form onSubmit={handleSubmit} className="form">
            <fieldset className="campos">

                <legend>Complete el formulario</legend>

                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" placeholder="ingresa tu nombre" required className="celda" />

                <label for="apellido">Apellido</label>
                <input type="text" name="apellido" id="apellido" placeholder="ingresa tu apellido" required className="celda" />

                <label for="telefono">Telefono de contacto</label>
                <input type="text" name="telefono" id="telefono" placeholder="ingrese su numero de contacto" className="celda" />

                <label htmlFor="email" for="correo">Email</label>
                <input type="email" name="correo" id="correo" placeholder="ingresa tu email" className="celda" />

                <label for="mensaje">Escribi un mensaje</label>
                <textarea name="mensaje" id="mensaje" cols="25" rows="10"  required placeholder="Ingrese aquí su consulta"></textarea>

                <div className="socios">


                    <input type="radio" name="socio" value="socio" />
                    <label for="socios">socio</label>

                    <input type="radio" name="socio" value="no socio" />
                    <label for="socios">no socio</label>
                </div>

                <div className="terminos">
                    <input type="checkbox" name="acepta" id="acepta" value="1" required />
                    <label for="acepta">Acepta los terminos y condiciones </label>
                </div>


                <div className="botones">
                    <Button variant="dark" type="submit" size="lg" value="Enviar" disabled={state.submitting}>Enviar</Button>
                    <Button variant="dark" type="reset" size="lg">Restablecer</Button>
                </div>

{/*                 <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                /> */}
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </fieldset>
        </form>

    );
}
function App() {
    return (
        <ContactForm />
    );
}
export default App;




/* import { useForm } from 'react-hook-form';




const Contacto = () => {
    const { register, formState:{ errors} , handleSubmit} = useForm('');
const onSubmit = (data) => {
    console.log(data);
}


    return (

        <form onSubmit={handleSubmit(onSubmit)} await fetch="https://formspree.io/f/mkneagjq" className="form" method="post">

            <fieldset className="campos">
                <legend>Complete el formulario</legend>

                <label for="nombre">Nombre</label>
                <input type="text" {...register('nombre' ,{required:true})} name="nombre" id="nombre" placeholder="ingresa tu nombre" className="celda" />
{errors.nombre?.type ==='required' && <p className="camposObligatorios">*Este campo es obligatorio</p>}
                <label for="apellido">Apellido</label>
                <input type="text" {...register('apellido' ,{required:true})} name="apellido" id="apellido" placeholder="ingresa tu apellido" className="celda" />
                {errors.apellido?.type ==='required' && <p className="camposObligatorios">*Este campo es obligatorio</p>}
                
                <label for="telefono">Telefono de contacto</label>
                <input type="text" {...register('telefono' ,{required:true})} name="telefono" id="telefono" placeholder="ingrese su numero de contacto" className="celda" />
                {errors.telefono?.type ==='required' && <p className="camposObligatorios">*Este campo es obligatorio</p>}
                
                
                <label for="correo">Email</label>
                <input type="email" {...register('correo',{pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })} name="correo" id="correo" placeholder="ingresa tu email" className="celda" />
                {errors.apellido?.type ==='pattern' && <p className="camposObligatorios">*No es el formato correcto</p>}

                <label for="fecha">Fecha de nacimiento</label>
                <input type="date" {...register('fecha')} name="fecha" id="fecha" className="celda" />

                <label for="mensaje">Escribi un mensaje</label>
                <textarea name="mensaje" {...register('mensaje')} id="mensaje" cols="25" rows="10" placeholder="Ingrese aquí su consulta"></textarea>

                <div className="socios">


                    <input type="radio" {...register('socio')} name="socio" value="socio" />
                    <label for="socios">socio</label>

                    <input type="radio" {...register('socio')} name="socio" value="no socio" />
                    <label for="socios">no socio</label>
                </div>

                <div className="terminos">
                    <input type="checkbox" name="acepta" id="acepta" value="1" required />
                    <label for="acepta">Acepta los terminos y condiciones </label>
                </div>

                <div className="botones">

                    <Button variant="dark" type="submit" value="Enviar">enviar</Button>
                    <Button variant="dark" type="reset">restablecer</Button>

                </div>
            </fieldset>
        </form>
    )
}

export default MyForm*/