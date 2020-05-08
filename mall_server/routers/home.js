const Router = require('koa-router')

let router = Router()

router.get('/', async ctx => {
  let ret = await ctx.db.execute(`SELECT * FROM goods_info_table WHERE GoodsOrderNum>10 LIMIT ${ctx.query.page * 30},30`)

  console.log(ctx.query);
  ctx.body = ret
  
  
})

module.exports = router.routes()