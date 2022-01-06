

const Router = require("koa-router");
const {
  createUser,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} = require("../API/User.api");
const router = new Router({
  prefix:'/User'
})
router.get("/:id", async ctx => {
  const id = ctx.params.id;
  ctx.body = await getUser(id);
})

router.get("/", async (ctx) => {
  ctx.body = await getUsers();
})

router.post("/", async ctx => {
  let user = ctx.request.body;
  user = await createUser(user);
  ctx.response.status = 200;
  ctx.body = user;
})

router.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  ctx.body = await deleteUser(id,user);
})

router.put("/:id", async (ctx) => {
  try {
    const id = ctx.params.id;
    let user = ctx.request.body;
    user = await updateUser(id, user);
    ctx.response.status = 200;
    ctx.body = user;
  } catch (err) {
    ctx.response.status = 400;
  }
});

module.exports = router.routes();