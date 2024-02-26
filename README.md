<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->



## Para instalar las dependencias con pnpm

pnpm add @hookform/resolvers react-hook-form zod

## Herramientas de Desarrollo de React

https://es.react.dev/learn/react-developer-tools
 

## Pasos para crear un Formulario con React Hook Form y Zod

1. Instala las dependencias necesarias. Necesitarás react, react-dom, @hookform/resolvers, react-hook-form y zod.

npm install react react-dom @hookform/resolvers react-hook-form zod

2. Importa los módulos necesarios en tu archivo de componente.

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { object, string } from 'zod';

3. Define tu esquema de validación con Zod.

const schema = object({
    name: string().nonempty({ message: 'El nombre es requerido' }),
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
  <form onSubmit={handleSubmit(data => console.log(data))}>
    <Controller
      name="nombre"
      control={control}
      defaultValue=""
      render={({ field }) => <input {...field} />}
    />
    {errors.nombre && <p>{errors.nombre.message}</p>}

    <Controller
      name="email"
      control={control}
      defaultValue=""
      render={({ field }) => <input {...field} />}
    />
    {errors.email && <p>{errors.email.message}</p>}

    <input type="submit" />
  </form>
);

