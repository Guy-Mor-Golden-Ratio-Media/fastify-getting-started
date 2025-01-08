import Fastify from "fastify";

const app = Fastify();

app.get("/", (request, reply) => {
  reply.send("Hello World from Fastify!");
});

app.get("/users", (request, reply) => {
  reply.send([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.listen({
  port: 3000,
});

