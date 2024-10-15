let PORT = 3000;
let index = "./public/index.html";

const server = Bun.serve({
    port: PORT,
    fetch(_) {
        return new Response(Bun.file(index));
    },
});

console.log(`Listening on http://localhost:${server.port} ...`);