



## Para instalar las dependencias con pnpm

pnpm add @hookform/resolvers react-hook-form zod


## Pasos para crear un Formulario con React Hook Form y Zod

1. Instala las dependencias necesarias. Necesitarás react, react-dom, @hookform/resolvers, react-hook-form y zod.

pnpm install react react-dom @hookform/resolvers react-hook-form zod

2. Importa los módulos necesarios en tu archivo de componente.

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string, number } from 'zod';


3. Define tu esquema de validación con Zod.

const schema = object({
    name: string().nonempty({ message: 'El nombre es requerido' }).regex(/^[^\d]+$/, { message: 'El nombre no debe contener números' }),
    age: number().nonnegative({ message: 'La edad debe ser un número positivo' }),
    email: string().email({ message: 'El email no es válido' }),
    password: string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});


4. Configura useForm con el esquema de validación.

const { handleSubmit, control, formState: { errors }, reset } = useForm({
        resolver: zodResolver(schema)
    });
 
5. Crea tu formulario usando Controller para conectar los campos del formulario con react-hook-form.

 return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(({ name, label, type }, index) => (
        <div key={index}>
          <label>{label}</label>

          <Controller
            name={name}
            control={control}
            defaultValue={type === 'number' ? 0 : ''}
            render={({ field }) => (

              <input
                {...field}
                type={type}
                placeholder={`Enter your ${name.toLocaleLowerCase()}`}
                value={field.value}
                onChange={(e) => field.onChange(type === 'number' ? parseInt(e.target.value, 10) : e.target.value)}
              />
            )}
          />
        </div>
      ))}

      <Button width="100%" height='30px' />

    </form>
  );

