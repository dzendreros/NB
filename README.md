<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge" alt="GSAP" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer" alt="Framer Motion" />
</div>

<div align="center">
  <h1>🎮 NB Gaming Experience</h1>
  <p><strong>Landing Page de Alta Conversión y Diseño Premium para la Sub-Marca de Gaming de Eventos NB</strong></p>
</div>

---

## 📖 Descripción del Proyecto

**NB Gaming Experience** es una plataforma web desarrollada como una **máquina de conversión** optimizada para la captación de leads (a través de WhatsApp). Diseñada con una estética moderna, inyecta elementos visuales agresivos y "Premium Gaming" (luces de neón, glassmorphism y microinteracciones de físicas rebotantes) para ofrecer una experiencia cinemática y envolvente.

El objetivo principal es convertir el interés en reservas, utilizando sesgos psicológicos de escasez, prueba social y alto impacto visual en menos de 3 segundos de carga.

---

## 🏗️ Arquitectura y Tecnologías Core

El proyecto está diseñado bajo un enfoque de **frontend moderno y altamente responsivo**, apalancado en las capacidades estáticas y de optimización de Next.js.

### Stack Tecnológico
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router).
- **Lenguaje Principal:** [TypeScript 5](https://www.typescriptlang.org/) (Strict mode para tipado seguro).
- **Estilos y UI:** [Tailwind CSS v4](https://tailwindcss.com/) (Sistema de diseño utilitario con configuración CSS moderna).
- **Motores de Animación:** 
  - **GSAP 3 + ScrollTrigger:** Para animaciones avanzadas basadas en el scroll, parallaxing y entradas tipo "Reveal".
  - **Framer Motion:** Manejo de microinteracciones de interfaz, rebotes tipo elástico táctiles y gestos enfocados a asimilar interfaces de videojuegos.

---

## 📂 Estructura de Directorios

La base de código sigue un patrón escalable de Feature-based en componentes modulares:

```text
nb-gaming/
├── public/
│   └── images/              # Activos estáticos, logos y media optimizada
├── src/
│   ├── app/
│   │   ├── globals.css      # Variables CSS base, utilidades de neón y animaciones (Keyframes)
│   │   ├── layout.tsx       # Root Layout (Configuración de metadata, fuentes HTML globales)
│   │   └── page.tsx         # Composición final de la Landing Page
│   ├── components/          # Componentes aislados y reutilizables
│   │   ├── Navbar.tsx       # Navegación fija tipo glass, retención de marca
│   │   ├── HeroSection.tsx  # Zona WOW con impacto inmediato (Duales CTA)
│   │   ├── ExperienceSection.tsx  # Contexto y solución de problemas
│   │   ├── GallerySection.tsx     # Bento Grid asimétrico para catálogo de simuladores
│   │   ├── EventTypesSection.tsx  # Aplicación de servicio
│   │   ├── CredibilitySection.tsx & SocialProofSection.tsx # Prueba Social y Autoridad
│   │   ├── PricingSection.tsx     # Display de paquetes, precios y beneficios
│   │   └── CTASection.tsx         # Conversión de cierre y urgencia
│   ├── hooks/
│   │   └── useAnimations.ts # Hooks centralizados de la lógica compleja de GSAP
│   └── lib/
│       └── constants.ts     # SINGLE SOURCE OF TRUTH: Textos, copys de marketing y rutas
├── next.config.ts           # Configuración del servidor y paths (basePath configurado)
├── tailwind.config.ts       # Themes, breakpoints y extend rules
└── package.json
```

---

## 🎨 Filosofía de Diseño y UI (Gamer Premium)

El diseño está pensado para comunicar "estado del arte". Se respeta la paleta base de la marca pero modernizando la aplicación:

1. **Iluminación Reactiva:** Se utilizan clases `.glow-green` simulando retroiluminación RGB.
2. **Glassmorphism:** Las tarjetas utilizan la técnica de diseño `glass-card` permitiendo transparencia sobre grids y backgrounds oscuros (`#0D0D0D`).
3. **Bento Grid Asimétrico:** La `GallerySection` renderiza los simuladores organizados como un dashboard de consola de siguiente generación.
4. **Cinemática Scroll:** Elementos escalan, difuminan y entran en frame de forma fluida mientras el usuario hace scroll hacia abajo.

---

## 🧠 Lógica de CRO (Conversion Rate Optimization)

Cada sección de la arquitectura de la página fue programada con un rol psicológico en el *Customer Journey*:
- **Atracción Rápida:** Hero Section con copys asertivos.
- **Prueba Tangible:** Galería atractiva e interactiva.
- **Derribo de Objeciones:** Sección de credibilidad (+50,000 personas de impacto).
- **Escasez y Urgencia:** CTAs finales que motivan a reservar una fecha antes de que se agoten (Directo a WhatsApp).

---

## ⚙️ Guía de Desarrollo e Instalación

Para ejecutar este entorno localmente y aportar a su desarrollo:

### 1. Clonar e Instalar
```bash
git clone <url-del-repositorio>
cd nb-gaming

# Requerido: Node.js 20+
npm install
```

### 2. Entorno Local de Desarrollo
```bash
npm run dev
```
Inicia el entorno de desarrollo con *Fast Refresh* en [http://localhost:3000](http://localhost:3000).

### 3. Scripts Principales

| Comando | Acción | Detalles |
| :--- | :--- | :--- |
| `npm run dev` | Iniciar dev server | Levanta el servidor local con soporte HMR. |
| `npm run build` | Compilación Prod | Compila la aplicación basculando configuraciones de `next.config.ts`. Genera la exportación estática en `out/` debido a `output: 'export'`. |
| `npm run lint` | Análisis Estático | Ejecuta ESLint sobre todo el código fuente en la carpeta `/src/`. |
| `npm run deploy` | Despliegue Directo | Construye, crea un archivo `.nojekyll`, y pushea la carpeta exportada estáticamente hacia la rama `gh-pages` usando `gh-pages` CLI. |

---

## ⚠️ Notas de Desarrollo Críticas (Tailwind v4)

Dado que utilizamos **Tailwind CSS v4**, las clases utilitarias (`mx-auto`, `px-4`, etc.) se generan dentro de `@layer` en CSS. 
**Regla de oro:** JAMÁS utilices un reset universal no-capado en `src/app/globals.css` como `* { margin: 0; padding: 0; }`. Las reglas sin capa (unlayered) anulan el sistema de capas de Tailwind, rompiendo el centrado y los espaciados en toda la landing page. Tailwind v4 ya incluye su propio Preflight optimizado que no rompe las utilidades.

---

## 🔧 Mantenimiento y Escalabilidad

1. **Gestión de Textos sin Riesgo:** 
   Todo copy, textos de botones, ítems de galerías y testimonios están mapeados en `src/lib/constants.ts`. Evitar inyectar código duro (*hardcoding*) en los componentes `.tsx` previene problemas al editar rápidamente promociones.

2. **Gestión Multimedia Externa:**
   Al usar GitHub Pages para exportación estática (`output: 'export'`), el optimizador inteligente de imágenes de Next.js está deshabilitado. Se recomienda siempre subir imágenes en formato **WebP o AVIF** hiper-comprimidas en la carpeta `public/images/`.

3. **Arquitectura y Modificación del Grid:**
   La `GallerySection` de equipos arcade puede escalarse fácilmente. Modifica la propiedad de objeto `spanClass` en los metadatos de los productos en caso de introducir tarjetas más grandes o en diferentes filas dentro del Layout.

---

## 🚀 Entorno de Despliegue (Production Setup)

El proyecto actual está configurado especialmente para desplegarse mediante plataformas de exportación estática en subdirectorios, como **GitHub Pages** (rutas relativas apuntadas mediante condicionales `basePath`).

- El `next.config.ts` ajusta el base path automáticamente cuando se prepara un Build.
- El comando `npm run deploy` sirve para realizar la publicación automática utilizando el generador `gh-pages`.

Para migrar el proyecto a **Vercel** o la raíz de un dominio propio, recuerda deshabilitar/modificar el `basePath` en el `next.config.ts` antes del despliegue.

---

<div align="center">
  <p><strong>Privado / Eventos NB</strong> &copy; 2026 Reservados todos los derechos.</p>
</div>
