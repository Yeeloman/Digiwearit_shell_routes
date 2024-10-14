import { serve } from "bun";

let PORT = 3000;
let index = "./public/index.html";

serve({
    fetch(req) {
        return new Response(Bun.file(index));
    },
    port: PORT,
});

console.info(`serving at http://localhost:${PORT}/`)