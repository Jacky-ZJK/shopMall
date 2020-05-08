module.exports = function (server, origins) {
  server.use(async (ctx, next) => {
    if (ctx.request['origin'] == 'null' || allowCrossOrigin(ctx.request.headers['origin'], origins)) {
      ctx.set('Access-Control-Allow-Origin', '*')
    }
    // console.log(ctx.request.headers['origin']);
    await next()
  })
}


function allowCrossOrigin(reqOrigin, origins) {
  return origins.some(o => reqOrigin === o
  )
}
