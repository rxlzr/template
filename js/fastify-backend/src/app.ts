import fastify from 'fastify';

const app = fastify();

app.get('/', async (req, res) => {
  res.send('Hello World');
});

if (import.meta.env.PROD) app.listen({ port: 3000 });

export { app };
