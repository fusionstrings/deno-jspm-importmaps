// import sass from 'https://dev.jspm.io/sass';

async function run() {
    const result = await Deno.compile('./di.js', undefined, {
        lib: ['esnext']
    });

    console.log(JSON.stringify(result));
    // await Deno.writeFile("result.json", new TextEncoder().encode(JSON.stringify(result)));
    // const [diagnostics, emitMap] = result;
    // const [sourcemap, source] = Object.keys(emitMap);
    // await Deno.writeFile("result.js", new TextEncoder().encode(emitMap[source]));
};

run();
// function css(){
//     const result = sass.renderSync({
//         file: `./style.scss`
//     });
//     return result;
// }

// console.log(css())