# Inventario del sitio original — lemadrier.ch

Extraído el 2026-10-11 de `http://www.lemadrier.ch/` (5 páginas, todas cargaron con HTTP 200).

## ⚠️ Diferencias importantes respecto al encargo

El encargo describe un B&B con varias habitaciones y desayuno. **El sitio actual no dice eso.** Según la regla "manda el sitio", el sitio nuevo sigue lo que publica el sitio actual:

| Tema | Datos de referencia del encargo (portales) | Lo que dice el sitio actual | Decisión |
| --- | --- | --- | --- |
| Tipo de alojamiento | Chalet B&B con desayuno, varias habitaciones | **Un apartamento de vacaciones de 3½ ambientes para 4 personas**, en el 2.º piso del chalet | Se publica el apartamento. La página "Chambres" pasa a ser "L'appartement" |
| Desayuno | Incluido | No se menciona en ninguna página | No se publica. Marcador `[À CONFIRMER]` |
| Baños | Compartidos | "bain-WC" dentro del apartamento (uso propio del apartamento) | Se publica lo del sitio |
| Código postal y localidad | 1865 Ormont-Dessus (Les Diablerets) | **CH-1864 Vers-l'Eglise** | Se publica 1864 Vers-l'Eglise |
| Teléfono | +41 24 492 22 12 | **+41 79 481 91 87** | Se publica +41 79 481 91 87 |
| Check-in / check-out | 15:00 / 11:00 | No se menciona | Marcador `[À CONFIRMER]` |
| Distancia a remontes | ~1 km | "à 3 minutes de la station des Diablerets", "à 15 minutes du Glacier 3000" | Se publica lo del sitio |
| Bar / salón, media pensión, local de esquís | Algunos portales | No se mencionan | No se publican |
| Nombre "B&B" | — | Solo aparece en el pie ("Copyright © 2020, B&B Le Madrier") y en la ficha de Google Maps ("B&B chalet Le Madrier") | El sitio nuevo usa "Chalet Le Madrier" |

En las fotos de la fachada se lee un cartel "Hôtel Garni". El texto del sitio no lo explica; conviene preguntar al dueño si además del apartamento sigue ofreciendo habitaciones con desayuno.

## Plataforma

- Generador: **Sandvox 2.10.12** (`<meta name="generator">`), plantilla "Neo News Tan". Sandvox es una aplicación de macOS ya descontinuada.
- Servidor: Plesk (`X-Powered-By: PleskLin`), detrás de BitNinja WAF y Caddy.
- **HTTPS no funciona**: `https://www.lemadrier.ch/` no responde (conexión fallida). El `canonical` apunta a `http://`.
- `viewport` fijo en `width=772` (no es responsive). jQuery 1.9.1 + Nivo Slider + ddsmoothmenu.
- No hay `sitemap.xml` ni `robots.txt` (404).
- Última modificación de la portada: 9 de abril de 2020.
- Diseño web original: cevic.ch.

## Menú y URLs

| Menú | URL | Archivo extraído |
| --- | --- | --- |
| Accueil | `http://www.lemadrier.ch/` | `accueil.md` |
| le chalet | `http://www.lemadrier.ch/le-chalet/` | `le-chalet.md` |
| Info | `http://www.lemadrier.ch/info/` | `info.md` |
| Info › Les photos d'été | `http://www.lemadrier.ch/info/les-photos-dete/` | `info_les-photos-dete.md` |
| Info › Les photos d'hiver | `http://www.lemadrier.ch/info/les-photos-dhiver/` | `info_les-photos-dhiver.md` |

El pie de página no tiene enlaces internos adicionales (solo "Haut de page" y el crédito a cevic.ch).

## Idiomas

Solo **francés** (`lang="fr"`). No existen `/en/` ni `/de/` (404). El sitio nuevo añade inglés.

## Alojamiento (página "le chalet")

- Apartamento de 3½ ambientes, abuhardillado ("mansardé"), en el **2.º piso** del chalet.
- **2 dormitorios de 2 camas** cada uno.
- Salón grande, hall, **baño con WC** ("bain-WC"), cocina equipada con rincón comedor.
- Ideal para **4 personas**; se puede añadir una **cama supletoria o una cuna**.
- Acceso al jardín o a las terrazas, **parking privado**.
- Las camas están hechas a la llegada y el apartamento está calefaccionado.
- No se indican: tamaño de las camas, superficie en m², equipamiento detallado de la cocina.

### Pictogramas (imagen `commun/mini-icones_med_hr.png`, sin texto)

Aparecen en "Accueil" y "le chalet". Interpretación de los 8 iconos, de izquierda a derecha:

1. Parking
2. No fumadores
3. Wifi
4. Terraza / jardín (mesa con sombrilla)
5. Cuna
6. Mascotas (huella)
7. Lavadora
8. Televisión

Se publican en el sitio nuevo porque están en el sitio actual, pero al ser iconos sin texto **conviene que el dueño confirme** el significado (sobre todo mascotas y lavadora).

## Desayuno y otros servicios

- Desayuno: **no se menciona**.
- Media pensión, bar, salón común, local de esquís: **no se mencionan**.
- Incluido en el precio: tasas de estancia, ropa de cama, toallas y paños de cocina, limpieza.

## Tarifas y condiciones (página "Info")

| Periodo | Precio |
| --- | --- |
| Todo el año | CHF 150.— por noche |
| Fiestas de fin de año y febrero | CHF 200.— por noche |

- Precio por el apartamento completo (no por persona).
- Estancia mínima: **2 noches**. Alquiler posible todo el año.
- Incluido: tasas de estancia, ropa de cama, toallas, paños de cocina, limpieza. Se pide dejar el apartamento en estado correcto (basura vaciada, vajilla lavada y guardada).
- Pago: transferencia bancaria del total **antes de la llegada**.
- Cancelación hasta 30 días antes: se debe el 50 %.
- Cancelación a menos de 30 días, llegada tardía o no presentación: se debe el total.
- No se indican: horarios de llegada y salida, depósito de garantía, fechas exactas de las "fiestas de fin de año".

## Contacto

Los datos están **dentro de una imagen** (`commun/adresse-5_med_hr.png`), no en texto:

- Chalet Le Madrier
- Ch. de la Gottrausaz 7
- CH-1864 Vers-l'Eglise
- Tel. +41 79 481 91 87
- info@lemadrier.ch (enlace `mailto:info@lemadrier.ch?subject=Demande du site`)

Redes y sellos:

- Facebook: `https://www.facebook.com/pages/Chalet-le-Madrier-Les-Diablerets/158436894200689`
- Alpine Pearls (logo con enlace): `http://www.alpine-pearls.com/fr/les-perles/suisse/les-diablerets.html`

Mapa (iframe de Google Maps en "Info"):

```
https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d2753.661282841682!2d7.136356000000001!3d46.3562665!3m2!1i1024!2i768!4f13.1!2m1!1sChemin+de+la+Gottrausaz+7%2C+1864+Vers-l'Eglise!5e0!3m2!1sfr!2sch!4v1430481103004
```

Ficha de Google Maps (estaba puesta por error como meta descripción de "Info"): coordenadas aproximadas 46.3565636, 7.1350645.

## Calendarios y sistemas de reserva

**No hay ninguno.** El único iframe del sitio es el mapa de Google. Las reservas se hacen por teléfono o email. En el sitio nuevo queda una variable `bookingCalendarUrl` vacía por si el dueño contrata un calendario.

## Enlaces útiles de la página "Info"

| Texto | URL original | Estado (2026-10-11) |
| --- | --- | --- |
| Diablerets Tourisme | `http://www.villars-diablerets.ch/` | Redirige a `https://www.alpesvaudoises.ch/` |
| Glacier 3000 | `http://www.glacier3000.ch/` | OK |
| FreeAcess | `http://www.free-access.ch/` | **No responde** (no se enlaza en el sitio nuevo) |
| Magic Pass | `http://www.magicpass.ch/` | OK |
| Alpine Pearls | `https://www.alpine-pearls.com/fr/vacances/suisse/les-diablerets/` | Respondió 503 a la comprobación automática; revisar a mano |

## Imágenes

Descargadas en `public/images/original/`, una carpeta por página de origen:

| Carpeta | Página de origen | Contenido |
| --- | --- | --- |
| `accueil/` | Accueil | 6 fotos del carrusel (860×622) y `favicon.ico` |
| `le-chalet/` | le chalet | 8 fotos del interior, en 641×455 y 1282×910 |
| `photos-ete/` | Info › Les photos d'été | 5 fotos, en 640×468 y 1280×936 |
| `photos-hiver/` | Info › Les photos d'hiver | 11 fotos, en 640×468 y 1280×936 |
| `info/` | Info | icono de correo |
| `commun/` | Varias páginas (barra lateral y pie) | dirección, Facebook, Alpine Pearls, pictogramas |

Cada foto existe en dos tamaños: normal y `_hr` (el doble). El sitio nuevo usa siempre la versión `_hr`.

### Imágenes de baja resolución

**Ninguna foto supera 1282 px de ancho.** Alcanza para tarjetas y galerías, pero no para una foto a pantalla completa en un monitor grande; por eso la portada nueva usa la foto en media pantalla. Conviene pedir al dueño los originales de cámara.

Las más limitadas:

| Archivo | Tamaño | Nota |
| --- | --- | --- |
| `accueil/dsc_0728_hr.jpeg` | 860×622 | Solo existe en este tamaño (macizo entre nubes) |
| `accueil/dsc_7338_hr.jpeg` | 860×622 | Solo existe en este tamaño (cumbres al atardecer) |
| `accueil/dscn3822_hr.jpeg` | 860×622 | Solo existe en este tamaño (cartel de madera "Le Madrier") |
| `accueil/dsc01369_hr.jpeg`, `dsc_7130_hr.jpeg`, `img_8990_hr.jpeg` | 860×622 | Hay versión mayor (1280 px) en las otras carpetas; se usa esa |
| `commun/adresse-5_med_hr.png` | 367×275 | Texto en imagen; reemplazado por texto real |
| `commun/mini-icones_med_hr.png` | 286×41 | Reemplazado por iconos SVG |
| `commun/fb_med_hr.jpeg` | 305×165 | Reemplazado por enlace de texto con icono SVG |
| `commun/alpinepearls_med_hr.png` | 288×112 | Logo pequeño; reemplazado por enlace de texto |
| `info/mail-2_med_hr.png` | 166×148 | Reemplazado por enlace de texto |
| Todas las versiones sin `_hr` | 640×468 / 641×455 | No se usan |

### Correspondencia con las fotos del sitio nuevo

Las fotos usadas están copiadas en `src/assets/photos/` con nombres descriptivos:

| Original | Nuevo nombre |
| --- | --- |
| `photos-hiver/dsc_7130_hr-2.jpeg` | `chalet-hiver-facade.jpg` |
| `photos-hiver/dsc_7126_hr.jpeg` | `chalet-hiver-panneaux.jpg` |
| `photos-hiver/dsc_7128_hr.jpeg` | `chalet-hiver-large.jpg` |
| `photos-hiver/dsc_7162_hr.jpeg` | `fenetre-vue-montagne.jpg` |
| `photos-hiver/img_0153_hr.jpeg` | `chalet-hiver-sapins.jpg` |
| `photos-hiver/img_0293_hr.jpeg` | `terrasse-hiver.jpg` |
| `photos-hiver/img_5076_hr.jpeg` | `sapin-enneige-vallee.jpg` |
| `photos-hiver/img_5475_hr.jpeg` | `decoration-bonhomme-neige.jpg` |
| `photos-hiver/img_5904-2_hr.jpeg` | `montagne-enneigee-vue.jpg` |
| `photos-hiver/img_9439-2_hr.jpeg` | `pere-noel-facade.jpg` |
| `photos-hiver/img_9510-2_hr.jpeg` | `coucher-soleil-sommet.jpg` |
| `photos-ete/dsc01369_hr-2.jpeg` | `chalet-ete-jardin.jpg` |
| `photos-ete/img_0411_hr.jpeg` | `terrasse-ete.jpg` |
| `photos-ete/img_0415-2_hr.jpeg` | `facade-balcon-ete.jpg` |
| `photos-ete/img_0418-2_hr.jpeg` | `vue-ete-foret.jpg` |
| `photos-ete/img_0464-2_hr.jpeg` | `jardin-lilas.jpg` |
| `le-chalet/img_8990_hr-2.jpeg` | `salon-vue-ensemble.jpg` |
| `le-chalet/dsc_2453_hr.jpeg` | `salon-fauteuils.jpg` |
| `le-chalet/dsc_2452_hr.jpeg` | `salon-tv.jpg` |
| `le-chalet/img_8974_hr.jpeg` | `coin-repas.jpg` |
| `le-chalet/dsc_2482_hr.jpeg` | `cuisine.jpg` |
| `le-chalet/dsc_2465_hr.jpeg` | `chambre-1.jpg` |
| `le-chalet/img_2807_hr.jpeg` | `chambre-2.jpg` |
| `le-chalet/img_5921_hr.jpeg` | `detail-lampe.jpg` |
| `accueil/dsc_0728_hr.jpeg` | `massif-nuages.jpg` |
| `accueil/dsc_7338_hr.jpeg` | `cimes-crepuscule.jpg` |
| `accueil/dscn3822_hr.jpeg` | `enseigne-le-madrier.jpg` |

## Páginas que no cargaron

Ninguna. Las 5 páginas internas respondieron 200.
