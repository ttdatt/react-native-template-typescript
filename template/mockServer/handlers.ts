import { rest } from 'msw';

export const handlers = [
  rest.get('https://mockapi.com/api/HelloWorld', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json('Hello world'));
  }),
];
