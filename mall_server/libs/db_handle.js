const Msql = require('mysql-pro')
const config = require('../server.config')

const db = new Msql({
  mysql: config.dataBase
})

db.execute = async sql => {
  let res = null
  
  await db.startTransaction()

  if(typeof sql === 'string') {
      res = await db.executeTransaction(sql)
  }else {
      res = []
      sql.forEach(async s => {
          res.push(await db.executeTransaction(s))
      })
  }

  await db.stopTransaction()

  return res
}

module.exports = function (server) {
  server.use(async (ctx, next) => {
    ctx.db = db
    await next()
  })
}