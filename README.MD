# Proyecto Final: API REST de Productos con Node.js, Express y Firebase

Este proyecto consiste en el desarrollo de una API REST profesional construida con **Node.js** y **Express**, utilizando **Firebase Firestore** como servicio de datos en la nube. La aplicación implementa una arquitectura en capas (Rutas, Controladores, Servicios y Modelos), manejo estructurado de errores y protección de rutas mediante **JSON Web Tokens (JWT)**.

---

## 🚀 Requerimientos del Proyecto

### 1. Configuración Inicial
El proyecto está configurado para utilizar la sintaxis moderna de JavaScript (**ESModules**) y un flujo de ejecución estandarizado:
* **Punto de entrada:** `index.js`
* **Habilitación de ESModules:** Configurado mediante `"type": "module"` en el archivo `package.json`.
* **Script de Inicio:** Ejecución optimizada mediante el comando:
    ```bash
    npm run start
    ```

### 2. Dependencias del Proyecto
Se han instalado e integrado las siguientes herramientas clave para garantizar el correcto funcionamiento, seguridad y escalabilidad del servicio:
* **express**: Framework web para la creación de la API y manejo de rutas.
* **cors**: Middleware para permitir peticiones de origen cruzado (CORS) desde las aplicaciones Frontend de la empresa.
* **body-parser**: Middleware global para procesar e interpretar los cuerpos de las peticiones en formato JSON.
* **dotenv**: Gestión segura de variables de entorno mediante un archivo `.env`.
* **firebase**: SDK para la integración y persistencia de datos en Firestore.
* **jsonwebtoken**: Implementación de autenticación y autorización basada en tokens JWT.

---

## 📂 Estructura de Arquitectura en Capas

El proyecto sigue un patrón de diseño limpio y modular, dividiendo las responsabilidades de la siguiente manera:

```text
├── config/
│   └── firebase.js          # Configuración y conexión a Firebase
├── controllers/
│   ├── auth.controller.js   # Lógica de control para autenticación
│   └── products.controller.js# Lógica de control para productos
├── middlewares/
│   ├── auth.middleware.js   # Validación de JWT y protección de rutas
│   └── error.middleware.js  # Manejo global de errores y rutas 404
├── models/
│   └── products.model.js    # Interacción directa con la colección de Firestore
├── routes/
│   ├── auth.routes.js       # Definición de rutas de autenticación
│   └── products.routes.js   # Definición de rutas de productos
├── services/
│   ├── auth.service.js      # Lógica de negocio para autenticación
│   └── products.service.js  # Lógica de negocio para productos
├── .env                     # Variables de entorno (Configuración privada)
├── index.js                 # Punto de entrada de la aplicación
└── package.json             # Dependencias y scripts

