# 📚 Documentación del Proyecto: NB Gaming Experience

El proyecto "NB Gaming Experience" ha sido reestructurado como una **máquina de conversión** optimizada para captación de leads mediante WhatsApp. Este documento describe la arquitectura técnica, las decisiones de UX/UI y CRO, y una guía de mantenimiento para garantizar escalabilidad.

---

## 1. 🏗️ Arquitectura y Estructura del Proyecto

El proyecto está construido sobre **Next.js 15+ (App Router)** utilizando **React, TypeScript, Tailwind CSS v4** y motores de animación avanzados como **GSAP** y **Framer Motion**.

### Estructura de Directorios Clave

```text
c:\Users\User2\Documents\Proyectos\NB\
├── public/
│   └── images/              # Activos visuales (logo.png, fotos de simuladores)
├── src/
│   ├── app/
│   │   ├── globals.css      # Sistema de diseño, Keyframes y CSS variables
│   │   ├── layout.tsx       # Root Layout (Fonts, Google metadata, config de <html>)
│   │   └── page.tsx         # Composición principal de la Landing Page
│   ├── components/          # Componentes modulares de interfaz
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── GallerySection.tsx (Bento Grid)
│   │   ├── EventTypesSection.tsx
│   │   ├── CredibilitySection.tsx
│   │   ├── SocialProofSection.tsx
│   │   └── CTASection.tsx
│   ├── hooks/
│   │   └── useAnimations.ts # Custom Hooks de GSAP
│   └── lib/
│       └── constants.ts     # Centralización de textos (copys), links y assets
└── next.config.ts           # Configuración (Export estático, basePath: '/NB')
```

---

## 2. 🧠 Lógica de Conversión (CRO & Marketing)

Cada componente cumple un rol psicológico específico dentro del "Customer Journey" del visitante:

1. **Navbar (`Navbar.tsx`):**
   - **Objetivo:** Retención de marca y acceso rápido al funnel de venta.
   - Integra `logo.png` con tratamiento de neón sutil al hacer hover para atrapar la mirada.
   - Botón CTA estático que persigue al usuario durante el *scroll*.

2. **Hero (`HeroSection.tsx`):**
   - **Objetivo:** Generar "Efecto WOW" y atacar la curiosidad/dolor en menos de 3 segundos.
   - Textos modificados: Apuntan a transformar "eventos aburridos" en experiencias "épicas".
   - Botones duales: Un botón de alta fricción pero alta recompensa ("Reserva tu fecha ahora") y un botón exploratorio ("Ver el Arsenal").

3. **El Problema / La Solución (`ExperienceSection.tsx`):**
   - **Objetivo:** Contextualizar el servicio. Apelar al cero estrés por parte del organizador ("Tú disfruta, nosotros armamos").

4. **El Arsenal (`GallerySection.tsx`):**
   - **Objetivo:** Mostrar valor tangible.
   - **Layout:** Bento Grid moderno de 8 cuadrantes. Las tarjetas expanden y reaccionan de manera hiperdinámica para asimilarse a interfaces de videojuegos modernos.

5. **Prueba Social y Credibilidad (`SocialProofSection.tsx`, `CredibilitySection.tsx`):**
   - **Objetivo:** Romper la barrera del escepticismo empresarial. 
   - Argumento numérico: "+50,000 personas lo han vivido".

6. **CTA de Cierre (`CTASection.tsx`):**
   - **Objetivo:** Conversión final.
   - Táctica de Escasez: "Agenda limitada", "Asegura tu fecha antes de que se agote". 

---

## 3. 🎨 Diseño y UI (Gamer Premium)

El diseño respeta la paleta base, pero inyecta agresividad visual para denotar "Gaming Premium":
- **Luces Neón:** Modificadores `.glow-green` y `.glow-green-intense` en `globals.css` que simulan fugas de luz RGB.
- **Glassmorphism:** Tarjetas transparentes (`.glass-card`) que permiten ver las texturas y fondos (grid).
- **Animaciones GSAP:** ScrollParallax, entradas Reveal (Texto que emerge desde abajo), Staggering (elementos que entran en cascada secuencial) en componentes como `GallerySection` y `EventTypesSection`.
- **Framer Motion Microinteracciones:** Se usaron en los CTAs para rebotes tipo "elástico", dándole esa sensación táctil y responsiva propia de un videojuego.

---

## 4. ⚙️ Recomendaciones de Mantenimiento y Escalabilidad

Para que el proyecto se mantenga sano a medida que crecen los servicios o cambian los copys:

### Gestión de Contenido (Textos e Imágenes)
Todo el texto pesado y las rutas de imágenes se alojan en `src/lib/constants.ts`. 
**Mejor Práctica:** *Nunca "quemar" (hardcode) textos de promociones en los componentes `.tsx`*. Siempre modifica el archivo `constants.ts` para actualizar copys o cambiar un asset de imagen en la galería.

### Optimización de Assets (Imágenes)
Las nuevas 8 imágenes provistas (`futbolito2.jpg`, `arcade2.jpg`, etc.) han sido integradas, pero al ser exportadas por GitHub Pages/Next de forma estática (`unoptimized: true` en el config), el navegador carga el tamaño completo. 
**Recomendación Futura:** Aplicar compresión WebP offline a la carpeta `/public/images/` para aligerar la carga de red si se agregan más de 20 imágenes.

### Modificación del Bento Grid (`GallerySection`)
La sección de galería usa clases Tailwind tipo `sm:col-span-2 sm:row-span-2` dentro de un display grid. Si se desean quitar o agregar más simuladores, bastará con modificar la variable `spanClass` dentro del objeto `galleryImages` en `GallerySection.tsx` para ajustarlo estéticamente.

### Despliegue (Deployment)
Actualmente el proyecto compila para *Static HTML Export* mediante `next.config.ts`.
Asegúrate de ejecutar:
```bash
npm run build
```
La carpeta `out/` contendrá los estáticos que GitHub Actions requiere para publicar en la ruta `/NB`. No modifiques el `basePath: '/NB'` mientras el alojamiento principal siga siendo en subdirectorio.
