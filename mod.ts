import { serve } from 'http/server.ts';
import markup from './markup.tsx';

async function main() {
    const body = new TextEncoder().encode(markup);
    const s = serve({ port: 8000 });
    console.log('http://localhost:8000/');
    for await (const req of s) {
        req.respond({ body });
    }
}
main();