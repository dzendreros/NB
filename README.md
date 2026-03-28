# 🎮 NB Gaming Experience

> **Landing page premium** para la sub-marca de gaming de **Eventos NB**. Una experiencia visual de alto impacto con animaciones cinematográficas, diseño futurista y rendimiento optimizado.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![GSAP](https://img.shields.io/badge/GSAP-3-88CE02?style=for-the-badge)

---

## ✨ Características

- ⚡ **Next.js 16** con App Router y TypeScript
- 🎨 **Tailwind CSS v4** para estilos utility-first
- 🎬 **GSAP + ScrollTrigger** para animaciones avanzadas de scroll
- 🎭 **Framer Motion** para microinteracciones y transiciones
- 📱 **Responsive design** mobile-first
- 🖼️ **Optimización de imágenes** con next/image (WebP/AVIF)
- 🔍 **SEO optimizado** con metadata estructurada
- 🌙 **Diseño oscuro premium** con paleta verde gaming
- ♿ **Accesibilidad** con semantic HTML y ARIA labels

## 🚀 Stack Tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 16 | Framework React con SSR/SSG |
| TypeScript | Type safety |
| Tailwind CSS v4 | Sistema de estilos |
| GSAP 3 + ScrollTrigger | Animaciones de scroll avanzadas |
| Framer Motion | Microinteracciones y transiciones |

## 📁 Estructura del Proyecto

```
nb-gaming/
├── public/
│   └── images/              # Imágenes optimizadas
│       ├── arcade.jpg
│       ├── banner_1 zona de juegos.jpg
│       ├── futbolito.jpg
│       ├── simulador carro.jpg
│       └── simulador vr.jpg
├── src/
│   ├── app/
│   │   ├── globals.css      # Design system + Tailwind
│   │   ├── layout.tsx       # Root layout con fonts y SEO
│   │   └── page.tsx         # Página principal
│   ├── components/
│   │   ├── Navbar.tsx       # Navegación fija con glass effect
│   │   ├── HeroSection.tsx  # Hero con parallax cinematográfico
│   │   ├── ExperienceSection.tsx  # Categorías de experiencia
│   │   ├── GallerySection.tsx     # Galería de equipos
│   │   ├── EventTypesSection.tsx  # Tipos de evento
│   │   ├── CredibilitySection.tsx # Stats y credibilidad
│   │   ├── SocialProofSection.tsx # Testimonios y logos
│   │   ├── CTASection.tsx   # Call-to-action final
│   │   └── Footer.tsx       # Footer con contacto
│   ├── hooks/
│   │   └── useAnimations.ts # Custom hooks GSAP reutilizables
│   └── lib/
│       └── constants.ts     # Datos y configuración central
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/nb-gaming.git
cd nb-gaming

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera el build de producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta ESLint |

## 🌐 Deploy en Vercel

### Opción 1: Deploy directo

1. Sube el proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Importa el repositorio
4. Vercel detectará automáticamente Next.js
5. Click en **Deploy**

### Opción 2: Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|---|---|---|
| Verde Oscuro | `#025920` | Accents, gradients |
| Verde Primario | `#04BF33` | CTAs, highlights, glow |
| Verde Mid | `#038C25` | Borders, secondary |
| Negro | `#0D0D0D` | Background principal |

## 📝 Licencia

Proyecto privado de **Eventos NB**. Todos los derechos reservados.

---

<p align="center">
  Desarrollado con 💚 para <strong>NB Gaming Experience</strong>
</p>
