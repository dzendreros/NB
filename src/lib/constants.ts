export const WHATSAPP_LINK = 'https://wa.me/5215528500983'

export const NAV_ITEMS = [
  { label: 'El Arsenal', href: '#experiencia' },
  { label: 'Paquetes', href: '#paquetes' },
  { label: 'Adaptabilidad', href: '#eventos' },
  { label: 'Por qué NB', href: '#nosotros' },
  { label: 'Clientes', href: '#clientes' },
]

// ─── URGENCY BANNER ───────────────────────────────────────────────────────────
export const URGENCY_BANNER = {
  text: 'FECHAS LIMITADAS ESTE FIN DE SEMANA',
  cta: 'Cotizar Ahora',
  ctaLink: WHATSAPP_LINK,
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
export const HERO_CONTENT = {
  badge: 'ZONA GAMER PREMIUM',
  subtitle: 'Para Eventos',
  tagline: 'La experiencia que todos van a recordar',
  primaryCta: 'COTIZAR AHORA EN WHATSAPP',
  primaryCtaLink: WHATSAPP_LINK,
  secondaryCta: 'VER PAQUETES',
  secondaryCtaLink: '#paquetes',
}

// ─── FEATURE STRIP ────────────────────────────────────────────────────────────
export const FEATURE_STRIP = [
  { icon: '🎮', label: 'Diversión sin parar' },
  { icon: '🕹️', label: 'Experiencia tipo arcade' },
  { icon: '🏆', label: 'Ideal para eventos premium' },
  { icon: '💻', label: 'Equipos modernos' },
]

// ─── EVENT CATEGORIES ─────────────────────────────────────────────────────────
export const EVENT_CATEGORIES = [
  {
    icon: '🔥',
    title: 'Fiestas Legendarias',
    description: '¿Aburrido de las mismas fiestas? Sube el nivel con nuestra Zona Gamer.',
  },
  {
    icon: '⚡',
    title: 'Activaciones Épicas',
    description: 'Atrae, impacta y conecta con tu audiencia a través de experiencias inmersivas.',
  },
  {
    icon: '🏢',
    title: 'Eventos Corporativos',
    description: 'Rompe el hielo. Team building y entretenimiento que tu equipo no olvidará.',
  },
  {
    icon: '🎂',
    title: 'Cumpleaños Inolvidables',
    description: 'Regala la mejor experiencia gaming. Desde niños hasta los más veteranos.',
  },
  {
    icon: '🎪',
    title: 'Ferias y Festivales',
    description: 'Conviértete en la principal atracción y roba todas las miradas.',
  },
]

// ─── EVENT TYPES (Adaptabilidad) ──────────────────────────────────────────────
export const EVENT_TYPES = [
  {
    title: 'Simuladores Racing',
    description: 'Siente la adrenalina del asfalto. Equipos Force Feedback para una inmersión total en la pista.',
    image: '/NB/images/simulador carro2.jpg',
  },
  {
    title: 'Realidad Virtual (VR)',
    description: 'Viaja a otros mundos. Ofrecemos experiencias VR alucinantes que dejarán sin palabras a tus invitados.',
    image: '/NB/images/simulador vr.jpg',
  },
  {
    title: 'Arcade Clásico',
    description: 'La nostalgia manda. Máquinas arcade multijuego para retar a tus amigos al estilo retro.',
    image: '/NB/images/arcade2.jpg',
  },
  {
    title: 'Deportes / Futbolitos',
    description: 'Competencia pura. Futbolitos profesionales y simuladores deportivos para calentar motores.',
    image: '/NB/images/futbolito2.jpg',
  },
]

// ─── TRUST POINTS ─────────────────────────────────────────────────────────────
export const TRUST_POINTS = [
  {
    icon: '🎮',
    title: 'Hardware de Élite',
    description: 'Solo utilizamos equipos de última generación. Cero lag, máxima diversión asegurada.',
  },
  {
    icon: '🛡️',
    title: 'Tú Disfruta, Nosotros Armamos',
    description: 'Olvídate del estrés. Hacemos el montaje y desmontaje completo de la Zona Gamer.',
  },
  {
    icon: '⚡',
    title: 'Staff Técnico Especializado',
    description: 'Nuestro equipo técnico estará presente para garantizar que todo funcione impecable.',
  },
  {
    icon: '🏆',
    title: 'Experiencia Comprobada',
    description: 'Respaldados por cientos de eventos exitosos. Tu evento está en manos de profesionales.',
  },
]

// ─── PRICING PACKAGES ─────────────────────────────────────────────────────────
export const PACKAGES = [
  {
    id: 'basica',
    name: 'EXPERIENCIA BÁSICA',
    badge: null,
    highlight: false,
    features: [
      '3 Juegos a elegir',
      'Transporte incluido',
      'Montaje y Desmontaje',
    ],
    cta: 'COTIZAR BÁSICO EN WHATSAPP',
    ctaLink: 'https://wa.me/5215528500983?text=Quiero%20informes%20sobre%20la%20EXPERIENCIA%20B%C3%81SICA%20de%20NB%20GAMING',
  },
  {
    id: 'intermedia',
    name: 'EXPERIENCIA INTERMEDIA',
    badge: '⭐ MÁS POPULAR',
    highlight: true,
    features: [
      '4 Juegos a elegir',
      'Transporte incluido',
      'Montaje y Desmontaje',
    ],
    cta: 'COTIZAR INTERMEDIO EN WHATSAPP',
    ctaLink: 'https://wa.me/5215528500983?text=Quiero%20informes%20sobre%20la%20EXPERIENCIA%20INTERMEDIA%20de%20NB%20GAMING',
  },
  {
    id: 'pro',
    name: 'ZONA GAMER PRO',
    badge: '🏆 MÁS COMPLETO',
    highlight: false,
    features: [
      'Simulador Racing (Pantalla 50", Volante, Pedales, Asiento)',
      'Simulador VR o Multijuegos (Pantalla 50")',
      'Futbolito Profesional',
      'Mesa de Hockey',
      '2 Máquinas Arcade',
      'Staff Gamer Especializado',
      'Ambientación Completa (Truss, Iluminación y Backdrop)',
      'Transporte + Montaje + Desmontaje',
    ],
    cta: 'COTIZAR ZONA PRO EN WHATSAPP',
    ctaLink: 'https://wa.me/5215528500983?text=Quiero%20informes%20sobre%20la%20ZONA%20GAMER%20PRO%20de%20NB%20GAMING',
  },
]

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote: 'El montaje fue increíble. Nuestros invitados no paraban de jugar... tuvimos que literalmente terminar el evento para que se fueran. ¡Repetiremos seguro!',
    author: 'María G.',
    role: 'Evento Corporativo',
    rating: 5,
    avatarColor: '#7C3AED',
  },
  {
    quote: 'La zona gamer fue el hit de la fiesta de mi hijo. Todos los niños la pasaron genial, y los adultos también se engancharon jaja.',
    author: 'Carlos R.',
    role: 'Cumpleaños',
    rating: 5,
    avatarColor: '#2563EB',
  },
  {
    quote: 'Profesionales de primera. La activación tuvo una respuesta brutal del público. Superaron todas las expectativas.',
    author: 'Ana M.',
    role: 'Activación de Marca',
    rating: 5,
    avatarColor: '#DC2626',
  },
  {
    quote: '10/10. El simulador de carreras fue un éxito total, la gente hacía fila para jugar. Muy buena organización desde el inicio.',
    author: 'Jorge T.',
    role: 'Fiesta Privada',
    rating: 5,
    avatarColor: '#D97706',
  },
  {
    quote: 'Honestamente no esperaba que fuera tan completo. Llegaron, montaron todo solos y lo dejaron perfecto. Cero estrés para mí.',
    author: 'Patricia L.',
    role: 'Quinceañera',
    rating: 5,
    avatarColor: '#059669',
  },
  {
    quote: 'Contratamos el paquete intermedio para nuestro team building y fue todo un acierto. El equipo de NB es muy profesional.',
    author: 'Rodrigo V.',
    role: 'Team Building Corporativo',
    rating: 5,
    avatarColor: '#0891B2',
  },
  {
    quote: 'El VR estuvo brutal. Mis amigos quedaron con la boca abierta. Vale cada peso.',
    author: 'Sofía H.',
    role: 'Graduación',
    rating: 5,
    avatarColor: '#BE185D',
  },
]

// ─── CLIENT LOGOS ─────────────────────────────────────────────────────────────
export const CLIENT_LOGOS = [
  'COCA-COLA',
  'MERCADO LIBRE',
  'SAMSUNG',
  'BBVA',
  'TEC DE MONTERREY',
  'AMAZON',
]

// ─── FOOTER ───────────────────────────────────────────────────────────────────
export const FOOTER_SERVICES = [
  'Simulador Racing',
  'Realidad Virtual (VR)',
  'Máquinas Arcade',
  'Eventos Corporativos',
  'Fiestas Privadas',
]

export const FOOTER_SOCIALS = [
  { name: 'Instagram', href: '#', icon: 'instagram' },
  { name: 'Facebook', href: '#', icon: 'facebook' },
  { name: 'TikTok', href: '#', icon: 'tiktok' },
]

export const FOOTER_TAGLINE = 'Transformamos eventos en experiencias épicas.'
