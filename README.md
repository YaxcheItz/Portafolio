# Portafolio Personal - YaxcheItz

Portafolio personal construido con React, Vite y Tailwind CSS. Incluye integración con GitHub API y sistema de contacto mediante EmailJS.

## Características

- ✨ Diseño moderno y responsive
- 🎨 Tailwind CSS para estilos
- 📱 Menú hamburguesa para móviles
- 🚀 Integración con GitHub API para mostrar proyectos
- 📧 Formulario de contacto funcional con EmailJS
- 🎯 Optimizado para SEO con meta tags
- ♿ Accesible y con aria-labels

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build
```

## Configuración del Formulario de Contacto

El formulario actualmente usa `mailto` como fallback. Para configurar EmailJS (recomendado):

### Opción 1: EmailJS (Recomendado)

1. Instala el paquete de EmailJS:
   ```bash
   npm install @emailjs/browser
   ```

2. Agrega el import en `src/App.jsx`:
   ```javascript
   import emailjs from '@emailjs/browser';
   ```

3. Crea una cuenta en [EmailJS](https://www.emailjs.com/)

4. Configura un servicio de email (Gmail, Outlook, etc.)

5. Crea una plantilla de email con los siguientes campos:
   - `{{from_name}}` - Nombre del remitente
   - `{{from_email}}` - Email del remitente
   - `{{message}}` - Mensaje

6. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

7. Completa las variables de entorno en `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   ```

8. Agrega el script de EmailJS en `index.html` (dentro de `<head>`):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
   <script>
     emailjs.init("TU_PUBLIC_KEY");
   </script>
   ```

### Opción 2: Mailto (Actual)

El formulario abrirá tu cliente de correo predeterminado. Cambia el email en `src/App.jsx` línea con `mailto:tu-email@ejemplo.com`

## Tecnologías Utilizadas

- React 19
- Vite
- Tailwind CSS
- EmailJS
- GitHub API

## Estructura del Proyecto

```
mi-portafolio/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── public/              # Archivos estáticos
└── index.html           # HTML principal
```

## Personalización

1. Edita los datos personales en `src/App.jsx`
2. Reemplaza los enlaces de GitHub y LinkedIn
3. Actualiza las habilidades y experiencias
4. Agrega tu foto de perfil
5. Coloca tu CV en la carpeta `public/`
