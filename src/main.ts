import { Context, Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { anySchema } from './anySchema';

const app: Hono = new Hono();

app.get('/', zValidator('json', anySchema), (c: Context) => {
  return c.text('ok');
});

export default app;
