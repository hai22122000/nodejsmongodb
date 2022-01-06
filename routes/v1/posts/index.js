const router = require('koa-router')()
router.get("/", (ctx, next) => {
 return new Promise((resolve, reject) => {
    ctx.body = {
       "data" : [
          {
            "postID" : 1,
            "description" : "Bài post số 1"
          }
       ]
    }
    resolve()
  })
})
module.exports = router.routes()