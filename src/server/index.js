// https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const indexRoutes = require('./routes/index'); //refer the routes file
const movieRoutes = require('./routes/movies'); //this is to query the movies directly


const app = new Koa();
const PORT = 1337;

// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'hello, world!'
//   };
// });


//this is a new comment
app.use(bodyParser());
app.use(indexRoutes.routes()); //instantiate the routes from the routes file
app.use(movieRoutes.routes()); //keep adding all routes files from the routes folder here


const server = app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
