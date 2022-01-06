const Koa = require("koa");
const bodyPaser = require('koa-bodyparser')
const routes = require("./API/User.routes");
const app = new Koa();

app.use(bodyPaser())
app.use(routes);

app.use((ctx) => {
  ctx.body = "Hello Koa";
});

app.listen(4000, () => {
  console.log("Running");
});