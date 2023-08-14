import * as esbuild from 'esbuild';

console.log(await esbuild.build({
  entryPoints: ['src/script.ts'],
  entryNames: '[name].[hash]', // '[dir]/[name].[hash]'
  minify: true,
  sourcemap: true, // 'both'
  mangleProps: /$/,
  reserveProps: /^(innerText|querySelector|addEventListener|random|floor|length|join|log)$/,
  outdir: 'dist_esbuild',
  bundle: true,
  format: 'esm', // remove this line to generate iife
}))

import { readFileSync, readdirSync, writeFileSync } from 'fs';

const ts = readFileSync('./src/index.html', 'utf-8');
const files = readdirSync('dist_esbuild');
let output = ts.replace('script.ts', files[0]);
output = output.replace('Parcel', 'esbuild');
output = output.replace('hotpink', 'rebeccapurple');

writeFileSync('dist_esbuild/index.html', output, {encoding: 'utf-8'});