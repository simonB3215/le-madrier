// Les images d'origine (public/images/original) sont une archive :
// elles ne doivent pas être publiées avec le site.
import { rm } from 'node:fs/promises';

await rm(new URL('../dist/images/original', import.meta.url), { recursive: true, force: true });
console.log('postbuild: dist/images/original retiré du site publié');
