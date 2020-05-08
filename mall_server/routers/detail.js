const Router = require('koa-router')

let router = Router()

router.get('/', async ctx => {
  //SELECT Q.ID,W.NAME... FROM xxx AS Q LEFT JOIN xxx AS W ON Q.ID=W.ID LIMIT 0,10

  let res = await ctx.db.execute(`SELECT * FROM goods_info_table, shop_table WHERE GoodsID=${ctx.query.id} AND goods_info_table.ShopID=shop_table.ShopID;`)

  let goodsPicSmall = res[0].GoodsPicSmall.split(';')
  res[0].GoodsPicSmall = goodsPicSmall
  let goodsPicLarge = res[0].GoodsPicLarge.split(';')
  res[0].GoodsPicLarge = goodsPicLarge

  let comment = await ctx.db.execute(`SELECT comment_table.*,user_table.UserName, user_table.UserImg  FROM comment_table,user_table WHERE GoodsID=${ctx.query.id} AND comment_table.UserID=user_table.UserID;`)
  res[0].comment = comment

  let recommend = await ctx.db.execute(`SELECT * FROM goods_info_table WHERE ShopID=${res[0].ShopID}`)
  recommend = recommend.filter(r => r.GoodsID != ctx.query.id)
  
  res[0].recommend = recommend

  ctx.body = res
})

module.exports = router.routes()