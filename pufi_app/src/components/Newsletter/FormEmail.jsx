import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import img from '../../images/flecha-correcta.png'

function ContactForm() {
  const [state, handleSubmit] = useForm("myyvwrbj");
  if (state.succeeded) {
      return <p>Gracias por suscribirte</p>;
  }
  return (
      <form className='form' onSubmit={handleSubmit}>
      <label htmlFor="email">
      </label>
      <input
        className='input_email'
        placeholder='Ingresa tu email'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
       <img src={img} alt="icon"></img>
      </button>
    </form>
  );
}
function FormEmail() {
  return (
    <ContactForm />
  );
}
export default FormEmail;