# Guía de Edición de Contenido y Despliegue para NB Gaming Experience

¡Hola! En este documento encontrarás la locación exacta de cada bloque de código para que te sea muy sencillo editar el contenido (precios, paquetes, textos, links) y los comandos que necesitas ejecutar para que esos cambios se vean reflejados en tu página pública hospedada en GitHub Pages.

> **⚠️ Nota Técnica (Sobre el Diseño):** Si además de textos deseas alterar espaciados o diseño, **hazlo siempre con clases de Tailwind (`mx-auto`, `px-4`)** en el archivo del componente. Esta versión Tailwind CSS v4 emplea un sistema de CSS `@layers`. Hacer un *CSS Reset* genérico modificando `src/app/globals.css` con estilos sin capa anulará el maquetado de toda la página y la desalineará.

---

## 1. ¿Dónde se encuentra cada cosa? (Mapa de Contenido)

Absolutamente **TODO** el contenido dinámico de la página lo encuentras en un solo archivo:
👉 `src/lib/constants.ts`

Al abrir ese archivo, no necesitas tocar los componentes de React, solo modificar los textos o valores dentro de los bloques declarados. Aquí el mapa de qué edita cada bloque:

*   **`URGENCY_BANNER`** (Aprox. Línea 11)
    *   *Qué edita:* El banner rojo de la parte de hasta arriba que dice "Fechas Limitadas" y su enlace.
*   **`HERO_CONTENT`** (Aprox. Línea 18)
    *   *Qué edita:* La primera sección que ve el usuario al entrar (Subtítulo verde, titulo en pantalla completa y enlace del CTA principal de WhatsApp).
*   **`FEATURE_STRIP`** (Aprox. Línea 29)
    *   *Qué edita:* Los 4 emojis con beneficios cortos ("Diversión sin parar", "Equipos modernos", etc) ubicados debajo de la sección principal.
*   **`EVENT_CATEGORIES`** (Aprox. Línea 37)
    *   *Qué edita:* Las casillas grandes con bordes verdes que detallan para qué eventos es ideal ("Fiestas", "Corporativos").
*   **`EVENT_TYPES`** (Aprox. Línea 66)
    *   *Qué edita:* La sección de adaptabilidad, las franjas completas horizontales que alternan imagen y descripción.
*   **`TRUST_POINTS`** (Aprox. Línea 90)
    *   *Qué edita:* Los puntos de confianza sobre "Por qué NB" (Lado izquierdo, con el check o el escudo).
*   **`PACKAGES`** (Aprox. Línea 114)
    *   *Qué edita:* **¡Las Tarjetas de Paquetes!** Aquí puedes cambiar los nombres de las experiencias, los puntos a incluir, el link exacto del WhatsApp para cada botón y cuál paquete lleva la etiqueta de fuego "🔥 Más contratado" (eso lo hace la propiedad `highlight: true`). También puedes cambiarles la foto mediante la propiedad `image`.
*   **`TESTIMONIALS`** (Aprox. Línea 162)
    *   *Qué edita:* Los comentarios que hace la clientela y las estrellas que reciben en el carrusel animado.
*   **`CLIENT_LOGOS`** (Aprox. Línea 215)
    *   *Qué edita:* Las empresas en el carrusel infinito de la sección de confianza (COCA-COLA, AMAZON, etc).
*   **`FOOTER`** (Aprox. Línea 225)
    *   *Qué edita:* El pie inferior de la página, los enlaces de redes sociales (dentro de `FOOTER_SOCIALS`) y los servicios enlistados.

---

## 2. ¿Cómo actualizar la página para todos en Internet? (Guía de GitHub Pages)

Cuando hayas alterado el código en tu archivo `constants.ts` y estés listo para actualizar tu landing page pública, debes correr los siguientes comandos en la terminal de Visual Studio Code (`Terminal > New Terminal`). Te recomiendo parar tu servidor local si lo tenías corriendo presionando `CTRL + C` antes de hacer esto.

**Paso 1: Exportar la Web a su Versión Estática Final**
En la terminal escribe y presiona enter:
```bash
npm run build
```
*(Espera a que termine. Esto empaqueta los archivos de React a una página estática rápida y optimizada en la carpeta `out/`)*

**Paso 2: Registrar tus cambios en Git (Guardado Local)**
```bash
git add .
git commit -m "Actualizacion de textos e imagenes"
```
*(Con estos dos comandos guardas tu progreso de forma segura en tu computadora)*

**Paso 3: Subir a Internet (Despliegue a GitHub Pages)**
```bash
npm run deploy
```
*(El sistema instalará y procesará automáticamente todos tus archivos generados directo a tu rama pública `gh-pages` dentro de tu repositorio GitHub).*

> **Aviso Importante**: GitHub Pages cuenta con un sistema de caché (memoria temporal). Tras ejecutar el paso 3 y que la consola diga que fue un éxito, puede tardar entre **1 a 3 minutos** en reflejarse visualmente cuando entres desde tu celular o computadora. Solo refresca un par de veces y los cambios aparecerán.
