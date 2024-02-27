import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, number } from 'zod';
import { Button } from ".";
import { FormInput, FormInputRow, FormLabel, FormMessage, FormWrapper } from "../styles/FormStyles";

const schema = object({
    name: string().nonempty({ message: 'El nombre es requerido' }).regex(/^[^\d]+$/, { message: 'El nombre no debe contener números' }),
    age: number().nonnegative({ message: 'La edad debe ser un número positivo' }),
    email: string().email({ message: 'El email no es válido' }),
    password: string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

const Form = () => {

    const [success, setSuccess] = useState(null);






    const { handleSubmit, control, formState: { errors }, reset } = useForm({


        resolver: zodResolver(schema)
    });




    const onSubmit = (data) => {
        console.log(data);

        reset({ name: '', age: 0, email: '', password: '' });





        setSuccess('Application was submitted!');
        setTimeout(() => {
            setSuccess(null);
        }, 3000);
    };

    const errorMessages = Object.values(errors).map(error => error.message);








    const messageAnimation = {
        hidden: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
    };






    const formFields = [
        { name: 'name', label: 'Name', type: 'text' },
        { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age' },
        { name: 'email', label: 'Email', type: 'text' },
        { name: 'password', label: 'Password', type: 'password' },
    ];

    return (

        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            {formFields.map(({ name, label, type }, index) => (
                <FormInputRow key={index}>
                    <FormLabel>{label}</FormLabel>

                    <Controller
                        name={name}
                        control={control}
                        defaultValue={type === 'number' ? 0 : ''}
                        render={({ field }) => (





                            <FormInput
                                {...field}
                                type={type}
                                placeholder={`Enter your ${name.toLocaleLowerCase()}`}
                                value={field.value}
                                onChange={(e) => field.onChange(type === 'number' ? parseInt(e.target.value, 10) : e.target.value)}
                            />
                        )}
                    />
                </FormInputRow>
            ))}

            <Button width="100%" height='30px' />

            {errorMessages.length > 0 && errorMessages.map((message, index) => (
                <FormMessage key={index} variants={messageAnimation} initial="hidden" animate="animate" exit="hidden">{message}</FormMessage>
            ))}
            {success && <FormMessage variants={messageAnimation} initial="hidden" animate="animate" exit="hidden">{success}</FormMessage>}

        </FormWrapper>
    );
};






















export default Form; 