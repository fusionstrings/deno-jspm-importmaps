import markup from './markup.ts';

function serve(p){
  console.log(p);
}

const s = serve("0.0.0.0:8000");

async function main() {
  for await (const req of s) {
    req.respond({ body: new TextEncoder().encode("<html><body>Hello World!\n" + markup) });
  }
}

main();