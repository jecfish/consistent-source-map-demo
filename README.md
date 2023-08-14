`npm run install` to install dependencies

# Browse live

- Parcel - https://consistent-source-map-pc.netlify.app/
- esbuild (global variables / esm) - https://consistent-source-map-eb.netlify.app/
- esbuild (iife) - https://consistent-source-map-eb-iife.netlify.app/

# About

This repo support two builds - [Parcel](https://parceljs.org/) and [esbuild](https://esbuild.github.io/).

-  `npm run build-pc` to generate output in `dist_parcel`
-  `npm run build-eb` to generate highly optimized (with mangled props and fn, global vars, esm) output in `dist_esbuild`
- to generate iife esbuild, remove the `format: 'esm'` config in `esbuild.config`.

You can also use `start-pc` and `start-eb` to run a server (no live/hot reload).



