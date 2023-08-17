import fs from 'fs-extra';

// const rawFiles = import.meta.glob(`/src/lib/components/**/*.{svelte,ts}`, {
//     as: 'raw',
//     eager: true,
// });

// console.log(rawFiles);

// fs.readdirSync('./src/lib/components/', { recursive: true }).forEach(folder => {
//     console.log(folder);
//     // fs.readdirSync(`./src/lib/components/${folder}`).forEach(file => console.log(file));   
// });

const files = await fs.readdir('./src/lib/components/', { recursive: true });

console.log('files:', files);