# Plan de Corrección: Alineación y Espaciado — NB Gaming Landing Page

## Evidencia Visual del Problema

````carousel
![Hero en Desktop (1440px) — El contenido está completamente pegado al borde izquierdo, sin padding mínimo. Los stats, CTAs, badge y título comienzan en X=0. Gran vacío derecho sin equilibrio.](C:/Users/damia/.gemini/antigravity/brain/723aeb4a-f924-4a82-9256-fab5a2949aa3/desktop_hero_1776088203874.png)
<!-- slide -->
![Hero en Tablet (768px) — El mismo problema se agrava: el texto se desborda contra el borde izquierdo de la pantalla. No hay aire visual entre el contenido y el borde.](C:/Users/damia/.gemini/antigravity/brain/723aeb4a-f924-4a82-9256-fab5a2949aa3/tablet_hero_1776088564864.png)
<!-- slide -->
![Hero en Mobile (375px) — El título toca el borde izquierdo literal de la pantalla. El badge "GAMING EXPERIENCE" no tiene margen. Los botones CTA y stats quedan fuera de pantalla.](C:/Users/damia/.gemini/antigravity/brain/723aeb4a-f924-4a82-9256-fab5a2949aa3/mobile_hero_1776088618269.png)
````

---

## 1. Diagnóstico Estructurado

### 1.1 Causa Raíz Identificada: **HeroSection.tsx** (Problema Principal)

El contenedor principal del Hero tiene correctamente `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` (línea 217), **pero el div hijo inmediato** en la línea 218 (`<div className="max-w-3xl">`) **carece de cualquier alineación o centrado** — es un bloque suelto que por defecto se pega a la izquierda del contenedor padre.

```
Estructura actual (simplificada):
┌─────────────────── max-w-7xl mx-auto ───────────────────┐
│ px-4/6/8                                                │
│ ┌── max-w-3xl (SIN centrado — text-align: start) ──┐   │
│ │ Badge                                              │   │
│ │ ZONA GAMER PREMIUM                                 │   │
│ │ PARA EVENTOS                                       │   │
│ │ Tagline                                            │   │
│ │ [CTA Buttons]                                      │   │
│ │ Stats: 500+ | 10+ | 98%                            │   │
│ └────────────────────────────────────────────────────┘   │
│                         ← VACÍO →                        │
└──────────────────────────────────────────────────────────┘
```

> [!IMPORTANT]
> El `max-w-3xl` limita el ancho del contenido a ~768px, pero como no tiene `mx-auto` ni `text-center`, el bloque se ancla al borde izquierdo del contenedor padre de `max-w-7xl` (1280px), generando un espacio vacío enorme a la derecha.

### 1.2 Problema Secundario: Padding Insuficiente en el Contenedor del Hero

El contenedor externo usa `px-4` como base mobile, que equivale a solo **16px** de padding. En una pantalla de 375px, esto deja el texto demasiado cerca del borde.

### 1.3 Inventario de Secciones Afectadas

| Sección | Archivo | ¿Tiene el problema? | Causa |
|---------|---------|---------------------|-------|
| **HeroSection** | [HeroSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/HeroSection.tsx#L218) | ✅ **CRÍTICO** | `max-w-3xl` sin `mx-auto`, todo el bloque izquierdo |
| StatementSection | [StatementSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/StatementSection.tsx#L106) | ❌ Correcto | Ya tiene `text-center flex flex-col items-center` |
| ExperienceSection | [ExperienceSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/ExperienceSection.tsx#L76) | ❌ Correcto | Usa `text-center max-w-3xl mx-auto` |
| PricingSection | [PricingSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/PricingSection.tsx#L88) | ❌ Correcto | Usa `text-center max-w-3xl mx-auto` |
| GallerySection | [GallerySection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/GallerySection.tsx#L144) | ❌ Correcto | Usa `text-center max-w-3xl mx-auto` |
| EventTypesSection | [EventTypesSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/EventTypesSection.tsx#L77) | ❌ Correcto | Usa `text-center max-w-3xl mx-auto` |
| CredibilitySection | [CredibilitySection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/CredibilitySection.tsx#L125) | ❌ Correcto | Usa `text-center max-w-3xl mx-auto` |
| SocialProofSection | [SocialProofSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/SocialProofSection.tsx#L132) | ❌ Correcto | Usa `text-center max-w-3xl mx-auto` |
| CTASection | [CTASection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/CTASection.tsx#L84) | ❌ Correcto | Todo centrado |
| FeatureStrip | [FeatureStrip.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/FeatureStrip.tsx#L51) | ❌ Correcto | `max-w-7xl mx-auto` con padding consistente |
| **section-padding** | [globals.css](file:///c:/Users/damia/Documents/Proyectos/NB/src/app/globals.css#L221-L235) | ⚠️ **MEJORABLE** | El padding lateral mobile (`1.5rem`/24px) es aceptable pero el sistema no está normalizado |

> [!NOTE]
> **El problema es más localizado de lo que aparenta.** La mayoría de secciones ya tienen el patrón correcto `text-center max-w-3xl mx-auto`. Solo el **HeroSection** rompe la consistencia porque intencionalmente se diseñó con alineación izquierda pero sin el padding/margin mínimo de seguridad.

---

## 2. Estrategia de Solución

### 2.1 Decisión de Diseño: ¿Centrar o Mantener Izquierda?

> [!IMPORTANT]
> **Decisión requerida por el usuario.**
> El Hero actual está alineado a la izquierda por decisión de diseño original (simula un layout "editorial" con contenido izquierdo + decoración derecha). Hay dos caminos posibles:

**Opción A — Centrar el Hero (Recomendada):**
- Más consistente con el resto de secciones
- Mejor balance visual en todas las resoluciones
- El diseño decorativo de la derecha (VR, Arcade, Racing, Futbolito) se puede mantener

**Opción B — Mantener izquierda pero con breathing room:**
- Preservar la estética editorial original
- Solo ajustar paddings para evitar que el texto toque los bordes
- Añadir margin-left proporcional para que no se perciba "pegado"

### 2.2 Estrategia Técnica (Aplicable a ambas opciones)

#### Para Opción A (Centrado):
```
Agregar al div de línea 218 de HeroSection.tsx:
  className="max-w-3xl" → className="max-w-3xl mx-auto text-center"

Ajustar elementos internos:
  - Badge: ya tiene mx-auto, OK
  - CTAs: agregar justify-center al flex container
  - Stats: agregar justify-center al flex container
```

#### Para Opción B (Izquierda con aire):
```
Agregar al div de línea 218 de HeroSection.tsx:
  className="max-w-3xl" → className="max-w-3xl ml-4 sm:ml-8 lg:ml-16 xl:ml-24"

Ajustar el padding del container padre:
  className="...px-4 sm:px-6 lg:px-8" → className="...px-6 sm:px-8 lg:px-12"
```

### 2.3 Sistema de Espaciado Recomendado

Definir una escala consistente usando la escala de Tailwind como base:

| Token | Valor | Uso |
|-------|-------|-----|
| `space-xs` | `0.5rem` (8px) | Separación entre íconos y texto inline |
| `space-sm` | `1rem` (16px) | Gap interno de tarjetas, entre párrafos |
| `space-md` | `1.5rem` (24px) | Padding lateral mobile |
| `space-lg` | `2rem` (32px) | Padding lateral tablet |
| `space-xl` | `4rem` (64px) | Padding lateral desktop, separación entre secciones |
| `space-2xl` | `6rem` (96px) | Padding vertical de sección (mobile) |
| `space-3xl` | `8rem` (128px) | Padding vertical de sección (tablet) |
| `space-4xl` | `10rem` (160px) | Padding vertical de sección (desktop) |

> [!TIP]
> El proyecto ya usa esta escala implícitamente en `.section-padding` de `globals.css`. Solo falta aplicarla de forma consistente al Hero.

---

## 3. Guía Paso a Paso (Para el modelo implementador)

### Paso 1: Corregir el contenedor del Hero **(CRÍTICO)**

**Archivo:** [HeroSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/HeroSection.tsx)

**Línea 218 — Cambiar:**
```diff
-        <div className="max-w-3xl">
+        <div className="max-w-3xl mx-auto text-center">
```

**Justificación:** `mx-auto` centra horizontalmente el bloque de contenido dentro del contenedor de `max-w-7xl`. `text-center` alinea el texto interno.

---

### Paso 2: Centrar los elementos hijos del Hero

**Archivo:** [HeroSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/HeroSection.tsx)

**Línea 223 — Badge:** Ya tiene `mx-auto sm:mx-0`. Eliminar `sm:mx-0` para mantener centrado en todas las resoluciones:
```diff
-            className="inline-flex w-fit max-w-full items-center gap-1.5 px-2.5 py-1 rounded-full mb-3 border border-nb-green-primary/30 bg-nb-green-primary/5 backdrop-blur-md mx-auto sm:mx-0"
+            className="inline-flex w-fit max-w-full items-center gap-1.5 px-2.5 py-1 rounded-full mb-3 border border-nb-green-primary/30 bg-nb-green-primary/5 backdrop-blur-md mx-auto"
```

**Línea 265 — CTA Buttons:** Añadir centrado al contenedor flex:
```diff
-          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-14">
+          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 mb-14 justify-center items-center">
```

**Línea 299 — Stats row:** Añadir centrado:
```diff
-          <div ref={statsRef} className="flex items-center gap-6 sm:gap-10">
+          <div ref={statsRef} className="flex items-center justify-center gap-6 sm:gap-10">
```

---

### Paso 3: Mejorar padding mobile del contenedor Hero

**Archivo:** [HeroSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/HeroSection.tsx)

**Línea 217 — Incrementar padding base:**
```diff
-      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-[140px] sm:pt-[160px] pb-16">
+      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-[140px] sm:pt-[160px] pb-16">
```

**Justificación:** Incrementar `px-4` (16px) a `px-6` (24px) en mobile provee aire visual mínimo. En desktop, `px-12` (48px) da un margen generoso.

---

### Paso 4: Normalizar la escala `.section-padding` en CSS

**Archivo:** [globals.css](file:///c:/Users/damia/Documents/Proyectos/NB/src/app/globals.css)

**Líneas 221-235 — Actualizar para consistencia con el Hero:**
```diff
 .section-padding {
-  padding: 6rem 1.5rem;
+  padding: 6rem 1.5rem; /* Mantener — ya es correcto para mobile */
 }
 
 @media (min-width: 768px) {
   .section-padding {
-    padding: 8rem 2rem;
+    padding: 8rem 2rem; /* Mantener — correcto para tablet */
   }
 }
 
 @media (min-width: 1024px) {
   .section-padding {
-    padding: 10rem 4rem;
+    padding: 10rem 4rem; /* Mantener — correcto para desktop */
   }
 }
```

> [!NOTE]
> Tras revisión, `.section-padding` ya es correcto y consistente. Las demás secciones usan `max-w-7xl mx-auto` internamente, lo que distribuye bien el contenido. No se requieren cambios aquí.

---

### Paso 5: (Opcional) Ajustar la posición de los elementos decorativos del Hero

Si se centra el contenido (Opción A), los anillos decorativos y el listado lateral derecho (`VR`, `Arcade`, `Racing`, `Futbolito`) seguirán en su posición absoluta correcta. No se requiere cambio.

Sin embargo, el badge "GAMING EXPERIENCE" podría recortarse en mobile si el texto es largo. Verificar que `whitespace-nowrap` no cause overflow con el nuevo centrado. Si ocurre:

```diff
 <span className="... whitespace-nowrap">
+{/* Si se desborda en mobile, cambiar a: */}
+<span className="... whitespace-nowrap sm:whitespace-normal">
```

---

## 4. Reglas de Responsive Design

### Breakpoints del proyecto (heredados de Tailwind CSS v4):

| Breakpoint | Ancho mínimo | Comportamiento esperado |
|------------|-------------|-------------------------|
| **Mobile** (default) | 0 – 639px | Contenido centrado, padding lateral mínimo `24px` (`px-6`). Título H1 en una sola columna. CTAs apilados verticalmente. |
| **sm** | ≥ 640px | CTAs lado a lado. Badge más grande. Stats en fila. |
| **md** | ≥ 768px | Título crece a `text-5xl`. Más espacio entre elementos. |
| **lg** | ≥ 1024px | `section-padding` sube a `10rem 4rem`. Layouts de 2 columnas se activan (Credibility, EventTypes). |
| **xl** | ≥ 1280px | Elementos decorativos del Hero aparecen (VR/Arcade/Racing/Futbolito). `max-w-7xl` = 1280px, contenido se contiene. |

### Comportamiento de márgenes y paddings por breakpoint:

```
Mobile (< 640px):
  ├── Hero container: px-6 (24px por lado)
  ├── Section padding: 6rem 1.5rem (96px vertical, 24px horizontal)
  ├── Contenido: centrado, max-w-3xl, single column
  └── CTAs: flex-col, full width

Tablet (640px – 1023px):
  ├── Hero container: px-8 (32px por lado)
  ├── Section padding: 8rem 2rem
  ├── Contenido: centrado, max-w-3xl
  └── CTAs: flex-row, side by side

Desktop (≥ 1024px):
  ├── Hero container: px-12 (48px por lado)
  ├── Section padding: 10rem 4rem
  ├── Contenido: centrado, max-w-3xl dentro de max-w-7xl
  └── CTAs: flex-row + decorative elements visibles
```

---

## 5. Criterios de Validación

### ✅ Checklist de verificación post-implementación:

1. **Test visual en 3 resoluciones:**
   - [ ] Desktop (1440px): El título "ZONA GAMER PREMIUM / PARA EVENTOS" aparece centrado horizontal dentro de la sección. No hay vacío desproporcionado a la derecha.
   - [ ] Tablet (768px): El contenido del Hero tiene al menos 32px de padding lateral visible.
   - [ ] Mobile (375px): El texto del título NO toca los bordes de la pantalla. Padding visible de al menos 24px.

2. **Consistencia entre secciones:**
   - [ ] El eje visual central del Hero coincide con el eje de las secciones inferiores (PricingSection, ExperienceSection, etc.)
   - [ ] No hay "saltos" de alineación al hacer scroll desde el Hero hacia abajo.

3. **Elementos funcionales:**
   - [ ] Los botones CTA son cliqueables y tienen suficiente target area (>44px).
   - [ ] El badge no se recorta ni genera overflow horizontal.
   - [ ] Los stats (500+, 10+, 98%) son legibles y no se superponen.

4. **Decoraciones:**
   - [ ] Los anillos decorativos y el listado VR/Arcade/Racing siguen visibles en XL.
   - [ ] El indicador de scroll ("Descubre más") permanece centrado en la parte inferior.

### 🚩 Señales de que el layout está correctamente balanceado:
- El "peso visual" del contenido se percibe en el centro de la pantalla.
- No hay filas de texto que empiecen exactamente en el borde izquierdo de la ventana.
- Al cambiar de resolución (responsive resize), el contenido se adapta suavemente sin saltos bruscos.

---

## 6. Posibles Edge Cases y Prevención de Regresiones

### Edge Cases:

| Caso | Riesgo | Prevención |
|------|--------|------------|
| **Título muy largo** (si se cambia el copy) | El texto podría desbordarse del `max-w-3xl` centrado | Verificar que el `max-w-3xl` sigue siendo suficiente (~768px); considerar `max-w-4xl` si el copy crece. |
| **Resoluciones ultra-anchas** (>2560px) | El contenido centrado podría verse "flotando" en medio de mucho espacio vacío | El `max-w-7xl` (1280px) actúa como cap natural. No cambiar. |
| **iOS Safari viewport** | La barra de direcciones dinámica puede cambiar `100vh` | El Hero ya usa `min-h-screen` que es resiliente en iOS. No cambiar. |
| **Textos en otro idioma** (si se internacionaliza) | Textos más largos en inglés podrían romper el layout | El `max-w-3xl` + `text-center` mitiga esto naturalmente. |
| **Animaciones GSAP post-centrado** | Las animaciones de `clip-path` y `y offset` podrían interactuar mal con el nuevo `text-center` | Las animaciones trabajan sobre `opacity`, `y`, y `clipPath`, ninguna depende de `text-align`. No hay riesgo. |

### Prevención de regresiones futuras:

1. **Regla de oro para nuevas secciones:** Todo contenedor principal de sección debe seguir el patrón:
   ```html
   <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
     <div className="text-center max-w-3xl mx-auto mb-16">
       <!-- Section header -->
     </div>
     <!-- Section content -->
   </div>
   ```

2. **No usar posición absoluta/fija para elementos de contenido primario.** Solo para decoraciones. 

3. **Siempre verificar en 375px antes de hacer merge.** El iPhone SE es el dispositivo más estrecho común.

---

## 7. Resumen de Archivos a Modificar

| Archivo | Tipo de cambio | Líneas afectadas | Complejidad |
|---------|---------------|------------------|-------------|
| [HeroSection.tsx](file:///c:/Users/damia/Documents/Proyectos/NB/src/components/HeroSection.tsx) | Clases CSS modificadas | L217, L218, L223, L265, L299 | Baja |
| [globals.css](file:///c:/Users/damia/Documents/Proyectos/NB/src/app/globals.css) | Ninguno (ya es correcto) | — | — |

> [!TIP]
> **Total de cambios: 5 líneas en 1 archivo.** El fix es quirúrgico y de bajo riesgo. No requiere refactorizaciones ni cambios estructurales.

## Verification Plan

### Automated Tests
1. Iniciar dev server con `npm run dev`.
2. Abrir el navegador en `http://localhost:3000`.
3. Usar DevTools para verificar en 1440px, 768px y 375px.
4. Comparar screenshots antes/después.

### Manual Verification
1. Visualmente confirmar que el Hero está centrado.
2. Hacer scroll completo y verificar que no hay saltos de alineación entre secciones.
3. Verificar que los elementos decorativos (anillos, listado lateral) no se rompieron.
4. Probar los botones CTA son funcionales y bien posicionados.
