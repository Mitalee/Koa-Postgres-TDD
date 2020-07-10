const Koa = require('koa');
const indexRoutes = require('./routes/index'); //refer the routes file

const app = new Koa();
const PORT = 1337;

// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'hello, world!'
//   };
// });

app.use(indexRoutes.routes());

const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
