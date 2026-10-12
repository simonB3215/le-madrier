# Chalet Le Madrier — sitio web

Sitio nuevo de lemadrier.ch: 6 páginas en francés y las mismas 6 en inglés.
Hecho con Astro + Tailwind. El resultado es HTML estático: se sube a cualquier hosting, sin base de datos.

## Antes de publicar: 5 cosas pendientes

En el sitio aparecen recuadros con borde punteado y la etiqueta "À compléter". Son datos que el sitio anterior no tenía y que no se inventaron:

| Dónde | Qué falta | Cómo se completa |
| --- | --- | --- |
| Accueil | Presentación de los anfitriones | Texto en `src/i18n/fr.ts` y `en.ts` → `home.hosts` |
| Accueil | Opiniones reales de huéspedes | `home.reviews` en los mismos archivos |
| L'appartement | Si se ofrece desayuno | `apartment.breakfast` (o borrar el recuadro en `src/views/Apartment.astro`) |
| Tarifs | Horas de llegada y salida | `checkIn` y `checkOut` en `src/config/site.ts` |
| Contact | Dirección de envío del formulario | `formEndpoint` en `src/config/site.ts` (ver más abajo) |

También conviene que el dueño confirme los equipamientos tomados de los iconos del sitio anterior (mascotas, lavadora, wifi, TV, cuna, no fumadores): ver `content/original/inventario.md`.

## Usarlo en tu computadora

Hace falta Node.js 20 o superior.

```bash
npm install        # una sola vez
npm run dev        # vista previa en http://localhost:4321
npm run build      # genera el sitio final en la carpeta dist/
```

Después de cualquier cambio: `npm run build` y subir de nuevo el contenido de `dist/`.

## Cambiar tarifas

Archivo `src/config/site.ts`, bloque `rates`. Cada línea es una fila de la tabla:

```ts
rates: [
  { price: 150, fr: 'Toute l’année', en: 'All year round' },
  { price: 200, fr: 'Fêtes de fin d’année et février', en: 'Christmas and New Year holidays, and February' },
],
```

- Cambiar un precio: cambiar el número.
- Añadir una temporada: copiar una línea.
- El "dès CHF …" de la portada toma solo el precio más bajo.
- `minNights` es la estancia mínima; el formulario la comprueba.

Las condiciones (pago, cancelación, qué incluye) son texto: están en `src/i18n/fr.ts` y `src/i18n/en.ts`, sección `rates`.

## Cambiar teléfono, email o dirección

Mismo archivo `src/config/site.ts`, primeras líneas. Se actualizan solos en la cabecera, el pie, la página de contacto y los datos para Google.

## Cambiar textos

- Francés: `src/i18n/fr.ts`
- Inglés: `src/i18n/en.ts`

Los dos archivos tienen la misma estructura, ordenada por página (`home`, `apartment`, `rates`, `region`, `photos`, `contact`). Se cambia solo lo que está entre comillas.

## Cambiar fotos

Las fotos están en `src/assets/photos/`.

- **Reemplazar una foto:** guardar la nueva con el mismo nombre de archivo (por ejemplo `chambre-1.jpg`). El sitio genera solo las versiones AVIF y WebP en varios tamaños.
- **Añadir o quitar fotos de una galería, o cambiar el orden:** editar `src/config/photos.ts`. Al final del archivo están las tres galerías (`apartment`, `summer`, `winter`).
- Cada foto lleva una descripción en francés y en inglés. Es obligatoria: la leen los lectores de pantalla y Google.

Las fotos actuales miden como máximo 1282 px de ancho. Si el dueño tiene los originales de cámara, conviene reemplazarlas (ideal: 2400 px de ancho o más).

`public/images/original/` es solo el archivo de lo descargado del sitio anterior; no se publica.

## Calendario de reservas

El sitio anterior no tenía calendario, así que hoy la página "Tarifs & réservation" muestra los botones de contacto.

Para añadir uno (por ejemplo de un gestor de reservas): pegar la dirección del iframe en `bookingCalendarUrl`, en `src/config/site.ts`. Aparece solo en esa página.

## Formulario de contacto

1. Crear un formulario en [formspree.io](https://formspree.io) (u otro servicio parecido) con el email del chalet.
2. Copiar la dirección que entrega (tipo `https://formspree.io/f/abcdwxyz`) en `formEndpoint`, en `src/config/site.ts`.

Mientras ese campo esté vacío, el formulario igual funciona: abre el programa de correo del visitante con la solicitud ya escrita.

## Publicar con HTTPS

El sitio anterior no tenía HTTPS. El nuevo está pensado solo para `https://www.lemadrier.ch`.

**Opción A — hosting actual (Plesk / Apache):**

1. En Plesk, activar el certificado gratuito Let's Encrypt para `lemadrier.ch` y `www.lemadrier.ch`.
2. Subir el contenido de `dist/` a la carpeta web (incluido el archivo oculto `.htaccess`).
3. El `.htaccess` fuerza HTTPS, activa HSTS y redirige las direcciones antiguas.

**Opción B — Netlify o Cloudflare Pages:** conectar la carpeta, comando `npm run build`, carpeta de salida `dist`. HTTPS es automático y las redirecciones salen de `public/_redirects`.

Redirecciones 301 incluidas:

| Dirección antigua | Dirección nueva |
| --- | --- |
| `/le-chalet/` | `/appartement/` |
| `/info/` | `/tarifs-reservation/` |
| `/info/les-photos-dete/` | `/photos/` |
| `/info/les-photos-dhiver/` | `/photos/` |

Después de publicar: comprobar que `http://www.lemadrier.ch` salta a `https://`, y enviar `https://www.lemadrier.ch/sitemap-index.xml` en Google Search Console.

## Qué hay en cada carpeta

| Carpeta | Contenido |
| --- | --- |
| `content/original/` | Textos del sitio anterior e `inventario.md` |
| `public/images/original/` | Imágenes descargadas del sitio anterior (archivo) |
| `design-system/le-madrier/` | Design system, reglas por página y `CHECKLIST.md` |
| `src/config/` | Tarifas, contacto, calendario, formulario y fotos |
| `src/i18n/` | Textos en francés e inglés, y direcciones de las páginas |
| `src/views/` | Las 6 páginas (una sola versión para los dos idiomas) |
| `src/components/`, `src/layouts/`, `src/styles/` | Cabecera, pie, galería, colores y tipografía |
| `public/` | `.htaccess`, `_redirects`, `robots.txt`, icono |

## Colores

Paleta "Miel y madera", definida una sola vez en `src/styles/global.css`:
nogal `#5C3A21`, miel `#C8892B`, crema `#FAF3E6`, beige `#EADBC0`, texto `#2B2118`.
El miel nunca se usa como color de texto sobre fondo claro (no alcanza el contraste AA).
