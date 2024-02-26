import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, number } from 'zod';
import { Button} from ".";
import { FormInput, FormInputRow, FormLabel, FormMessage, FormWrapper } from "../styles/FormStyles";

// SE ESQUEMATIZA EL FORMULARIO
const schema = object({ 
    name: string().nonempty({ message: 'El nombre es requerido' }),
    age: number().nonnegative({ message: 'La edad debe ser un número positivo' }),
    email: string().email({ message: 'El email no es válido' }),
    password: string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

const Form = () => {
    const { handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema)
    });

    const [success, setSuccess] = useState(null);

    const onSubmit = (data) => {
        console.log(data);
        reset({ name: '', age: 0, email: '', password: '' });
        setSuccess('Application was submitted!');
    };

    return (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
            <FormInputRow>
                <FormLabel>Name</FormLabel>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <FormInput {...field} />}
                />
                {errors.name && <FormMessage>{errors.name.message}</FormMessage>}
            </FormInputRow>

            <FormInputRow>
                <FormLabel>Age</FormLabel>
                <Controller
                    name="age"
                    control={control}
                    defaultValue={0}
                    render={({ field }) => <FormInput {...field} type="number" value={field.value || ''} onChange={(e) => field.onChange(e.target.value ? parseInt(e.target.value, 10) : null)} />}
                />
                {errors.age && <FormMessage>{errors.age.message}</FormMessage>}
            </FormInputRow>

            <FormInputRow>
                <FormLabel>Email</FormLabel>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <FormInput {...field} />}
                />
                {errors.email && <FormMessage>{errors.email.message}</FormMessage>}
            </FormInputRow>

            <FormInputRow>
                <FormLabel>Password</FormLabel>
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <FormInput {...field} />}
                />
                {errors.password && <FormMessage>{errors.password.message}</FormMessage>}
            </FormInputRow>

            <Button width="100%" height='30px' />
            {success && <FormMessage>{success}</FormMessage>}
        </FormWrapper>
    );
};

export default Form;
