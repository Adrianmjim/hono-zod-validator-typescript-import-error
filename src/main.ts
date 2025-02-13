import { Context, Hono } from 'hono';
import { zValidator } from '@hono/zod-validator';
import { z } from 'zod';

const anySchema = z.object({
  name: z.string(),
});

const app: Hono = new Hono();

app.get('/', zValidator('json', anySchema), (c: Context) => {
  return c.text('ok');
});


export default app;
