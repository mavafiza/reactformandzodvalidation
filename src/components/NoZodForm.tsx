import React, { useState } from 'react'



import { Button} from ".";
import { FormInput, FormInputRow, FormLabel, FormMessage, FormWrapper } from "../styles/FormStyles";

import { Validator } from ".";






const Form = () => {

  const [name, setName] = useState<string>('');     
  const [age, setAge] = useState<number | null>(null);     
  const [email, setEmail] = useState<string>('');   
  const [password, setPassword] = useState<string>(''); 
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();                                            
    const resultError = Validator({ name, age, email, password });     

    if (resultError !== null) {                                   
      setError(resultError);
      return;
    }




    setName('');
    setAge(null);
    setEmail('');
    setPassword('');
    setError(null);

    setSuccess('Application was submitted!');
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Convertir el valor ingresado a un número
    const ageValue = parseInt(e.target.value);
    // Verificar si el valor ingresado es un número
    if (!isNaN(ageValue)) {
      setAge(ageValue);
    }
  };

  const messageAnimation = {                            
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
  };

  
  
  
  
  
  
  
  // SE ESQUEMATIZA EL FORMULARIO
  const formFields = [                             
    { label: 'Name', value: name, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value), type: 'text' },
    { label: 'Age', value: age === null ? '' : age.toString(), onChange: handleAgeChange, type: 'number' },
    { label: 'Email', value: email, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value), type: 'email' },
    { label: 'Password', value: password, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value), type: 'password' },
  ];

  return (
    <>
      <FormWrapper onSubmit={handleSubmit}>
        {formFields.map((element, index) => (
          <FormInputRow key={index}>
            <FormLabel>{element.label}</FormLabel>
            
            


            
            
            
            
            
            
            
            <FormInput
              type={element.type}
              placeholder={`Enter your ${element.label.toLocaleLowerCase()}`}
              value={element.value}
              onChange={element.onChange}
              />


          
          </FormInputRow>
        ))}

        <Button width="100%" height='30px' />   
      
      
      
      
      
      
      </FormWrapper>

      {error && (
        <FormMessage
        variants={messageAnimation}         //  4-   UTILIZAMOS UNA ANIMACIÓN DE css PARA LOS MENSAJES DE error y éxito
        initial="hidden"
        animate="animate"
        error
        >
          {error}
        </FormMessage>
      )}
      {success && (
        <FormMessage
        variants={messageAnimation}
        initial="hidden"
        animate="animate"
        >
          {success}
        </FormMessage>
      )}
    </>
  )
}

export default Form       