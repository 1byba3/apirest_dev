# 📘 API REST de Gestión de Estudiantes con Express.js

## 📌 Descripción

Este proyecto consiste en el desarrollo de una **API REST** utilizando **Node.js** y **Express.js**, diseñada para gestionar información de estudiantes mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

Los datos se almacenan temporalmente en memoria utilizando un arreglo de JavaScript, por lo que **no se requiere una base de datos** para su funcionamiento.

### Características principales

* Consulta de todos los estudiantes registrados.
* Consulta de estudiantes por identificador (ID).
* Creación de nuevos registros.
* Actualización de información existente.
* Eliminación de registros.
* Arquitectura sencilla para fines educativos y de aprendizaje de APIs REST.

> **Nota:** Los datos son temporales. Al reiniciar el servidor, la información vuelve a su estado inicial.

---

# 🚀 Instalación y Ejecución

## 1️⃣ Inicializar el proyecto

```bash
pnpm init
```

o instalar dependencias existentes:

```bash
pnpm install
```

---

## 2️⃣ Crear la estructura del proyecto

```text
project/
│
├── src/
│   └── index.js
│
├── package.json
└── nodemon.json
```

---

## 3️⃣ Instalar Express

```bash
pnpm add express
```

---

## 4️⃣ Instalar Nodemon

Nodemon permite reiniciar automáticamente el servidor cada vez que se detectan cambios en el código.

```bash
pnpm add -D nodemon
```

---

## 5️⃣ Configurar el script de ejecución

Agregar en el archivo `package.json`:

```json
{
  "scripts": {
    "start": "nodemon src/index.js"
  }
}
```

---

## 6️⃣ Crear el archivo `nodemon.json`

```json
{
  "watch": ["src"],
  "ext": "js",
  "ignore": ["node_modules"],
  "exec": "node src/index.js"
}
```

---

## 7️⃣ Ejecutar el servidor

```bash
pnpm start
```

---

# 📡 Endpoints Disponibles

| Método HTTP | Endpoint        | Descripción                        |
| ----------- | --------------- | ---------------------------------- |
| GET         | `/students`     | Obtener todos los estudiantes      |
| GET         | `/students/:id` | Obtener un estudiante por ID       |
| POST        | `/students`     | Crear un nuevo estudiante          |
| PUT         | `/students/:id` | Actualizar un estudiante existente |
| DELETE      | `/students/:id` | Eliminar un estudiante             |

---

# 📋 Ejemplo de Estudiante

```json
{
  "id": 1,
  "nombre": "Juan Pérez",
  "edad": 18,
  "carrera": "Desarrollo de Software"
}
```

---

# 🛠️ Tecnologías Utilizadas

* Node.js
* Express.js
* pnpm
* Nodemon
* HTTPie
* JavaScript (ES6+)

---

# 🎯 Objetivos de Aprendizaje

Este proyecto permite practicar conceptos fundamentales como:

* Creación de servidores con Express.js.
* Manejo de rutas y parámetros.
* Uso de métodos HTTP.
* Diseño de APIs REST.
* Manipulación de arreglos y objetos en JavaScript.
* Pruebas de servicios mediante clientes HTTP.

---

# 📄 Licencia

Este proyecto tiene fines educativos y académicos.

---

# 👨‍💻 Autor

**Ing. José Huberto Batres Rivera**

Docente de Bachillerato en Desarrollo de Software
