# Checklist pre-entrega — UI UX Pro Max

Revisado el 2026-10-11 sobre el sitio compilado (`npm run build`), 12 páginas (6 FR + 6 EN), en Edge/Chromium con emulación de 375, 768, 1024 y 1440 px.

Leyenda: ✅ comprobado · ⚠️ pendiente o comprobado solo en parte · — no aplica

## Checklist del design system (MASTER.md)

| | Punto | Cómo se comprobó |
| --- | --- | --- |
| ✅ | Sin emojis como iconos | Todos los iconos son SVG de Lucide, integrados en el HTML |
| ✅ | Iconos de una sola familia | Lucide, trazo 1.75 px en todo el sitio |
| ✅ | `cursor-pointer` en todo lo clicable | Regla global para `a`, `button`, `select`, `summary` |
| ✅ | Hover con transición de 150–300 ms | 200 ms en botones, enlaces, tarjetas-enlace y miniaturas; el hover no mueve el layout |
| ✅ | Contraste de texto ≥ 4.5:1 | Calculado para cada par de la paleta: mínimo 5.30 (texto sobre miel, miel sobre el pie oscuro); el resto ≥ 7.39 |
| ✅ | Foco visible con teclado | Anillo de 3 px nogal (miel en zonas oscuras); enlace "Aller au contenu" como primera parada de tabulación |
| ✅ | `prefers-reduced-motion` respetado | Con la preferencia activa, 0 elementos quedan ocultos y no hay animaciones ni scroll suave |
| ✅ | Responsive 375 / 768 / 1024 / 1440 | 48 combinaciones página × ancho medidas |
| ✅ | Nada oculto tras barras fijas | `scroll-padding-top` para la cabecera; el pie reserva espacio para la barra inferior móvil, con `safe-area-inset-bottom` |
| ✅ | Sin scroll horizontal en móvil | Desborde medido = 0 px en las 48 combinaciones (se corrigió uno de 11 px en Tarifs a 375 px) |

## Checklist canónico de la skill (`references/pro-rules.md`)

La skill aclara que esta lista está pensada para apps nativas; se aplica aquí lo que tiene sentido en web.

### Proceso

| | Punto | Nota |
| --- | --- | --- |
| ✅ | Búsquedas relevantes en la skill | `--design-system` (master + 6 páginas), tipografía y estilo |
| ✅ | Repaso de accesibilidad, interacción táctil y rendimiento | Ver secciones siguientes |
| ⚠️ | Probado en 375 px y en horizontal | 375 px sí; orientación horizontal de teléfono no probada |
| ⚠️ | Reduced-motion y tamaño de texto grande | Reduced-motion sí; zoom de texto al 200 % no probado (todo usa `rem`, sin alturas fijas en textos) |
| — | Modo oscuro | El sitio es solo claro por decisión del encargo (fondos crema, nunca negro) |
| ✅ | Objetivos táctiles ≥ 44 px | Medidos todos los enlaces, botones y campos: ninguno por debajo de 44×44 (el selector FR/EN se subió de 40 a 44) |

### Calidad visual

| | Punto | Nota |
| --- | --- | --- |
| ✅ | Sin emojis, iconos coherentes | — |
| ✅ | Logos de marca oficiales | No se usa ningún logo de terceros (Facebook y Alpine Pearls son enlaces de texto) |
| ✅ | El estado pulsado no mueve el layout | Solo cambian color y sombra |
| ✅ | Tokens de color, sin colores sueltos | Los 5 colores de "Miel y madera" definidos una vez en `global.css`; el CSS generado solo contiene esos 5 tonos y sus transparencias |

### Interacción

| | Punto | Nota |
| --- | --- | --- |
| ✅ | Respuesta visible al pulsar | Hover, active y foco en todos los controles |
| ✅ | Estado deshabilitado claro | El botón de envío se deshabilita y muestra "Envoi en cours…" |
| ✅ | Orden de foco = orden visual, etiquetas descriptivas | Menú móvil con `aria-expanded`; galería: Escape cierra y el foco vuelve a la miniatura; flechas cambian de foto |
| ✅ | Sin gestos en conflicto | No hay carruseles ni arrastres |

### Layout

| | Punto | Nota |
| --- | --- | --- |
| ✅ | Áreas seguras respetadas | Barra inferior móvil con `env(safe-area-inset-bottom)` |
| ✅ | Contenido no tapado por barras fijas | — |
| ⚠️ | Teléfono pequeño, grande y tablet | Probado por emulación; falta prueba en dispositivos reales |
| ✅ | Márgenes adaptados por ancho | 20 px en móvil, 32 px desde 768 px, ancho máximo 1200 px |
| ✅ | Ritmo de espaciado 4/8 | Escala de Tailwind |
| ✅ | Longitud de línea legible | Párrafos limitados a ~65 caracteres |

### Accesibilidad

| | Punto | Nota |
| --- | --- | --- |
| ✅ | Iconos decorativos ocultos a lectores de pantalla | `aria-hidden="true"` en todos |
| ✅ | Texto alternativo en todas las imágenes | 27 fotos con descripción en francés y en inglés; 0 imágenes sin `alt` |
| ✅ | Controles con nombre accesible y estado | Menú, selector de idioma (`lang`, `hreflang`, `aria-current`), galería |
| ✅ | Formulario: etiquetas, ayudas y errores claros | Etiquetas visibles, error bajo cada campo, resumen de errores que recibe el foco, estado con `aria-live`. Probado: envío vacío, estancia de 1 noche, envío válido |
| ✅ | El color no es el único indicador | Errores con borde más grueso + texto; página actual subrayada; enlaces subrayados |
| ✅ | Un solo `h1` por página, idioma declarado | `lang="fr-CH"` / `lang="en"` |
| ⚠️ | Prueba con lector de pantalla real | No realizada (NVDA / VoiceOver) |

## Rendimiento y SEO

| | Punto | Nota |
| --- | --- | --- |
| ✅ | Imágenes AVIF + WebP + JPEG con `srcset` | 5 anchos por foto, `sizes` por contexto |
| ✅ | Lazy loading y espacio reservado | `loading="lazy"` salvo las fotos de cabecera; `aspect-ratio` fijo, sin saltos de layout |
| ✅ | Fuentes locales | Fraunces y Nunito Sans servidas desde el propio sitio, `font-display: swap` |
| ✅ | Título y meta descripción por página, Open Graph | En las 12 páginas |
| ✅ | `hreflang` FR / EN / x-default y `canonical` | En las 12 páginas |
| ✅ | Datos estructurados schema.org | Ver nota abajo |
| ✅ | `sitemap`, `robots.txt`, redirecciones 301 | `.htaccess` (Apache/Plesk) y `_redirects` (Netlify/Cloudflare) |
| ⚠️ | Lighthouse / Core Web Vitals | No medido; hacerlo sobre el sitio ya publicado |
| ⚠️ | Mapa de Google | Es el mismo iframe del sitio anterior, con carga diferida. En la prueba automática no llegó a dibujarse; comprobar en un navegador normal |

## Pendientes

Del dueño del chalet:

1. Confirmar si ofrece desayuno. El sitio anterior describe solo un apartamento de vacaciones y no lo menciona.
2. Horas de llegada y salida.
3. Presentación de los anfitriones (nombres, foto, unas líneas).
4. Opiniones reales de huéspedes.
5. Confirmar los equipamientos tomados de los pictogramas del sitio anterior (mascotas, lavadora, wifi, TV, cuna, no fumadores).
6. Fotos en mayor resolución: las actuales llegan a 1282 px de ancho como máximo.

Técnicos:

7. Crear el formulario en Formspree y poner su dirección en `formEndpoint`. Hasta entonces el formulario abre el correo del visitante.
8. Activar el certificado HTTPS en el hosting y comprobar la redirección de `http://` a `https://`.
9. Datos estructurados: se usa `LodgingBusiness` y no `BedAndBreakfast`, porque el sitio anterior no menciona desayuno. Si se confirma, cambiar el tipo en `src/layouts/Base.astro`. `checkinTime` y `checkoutTime` se añaden solos al completar el punto 2.
10. El enlace "FreeAccess" del sitio anterior ya no responde y no se incluyó.
11. Pruebas en dispositivos reales, con lector de pantalla y Lighthouse sobre el sitio publicado.
12. Versión en alemán: no existía en el sitio anterior y no se añadió.
