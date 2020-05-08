module.exports = function (server) {
  server.use(handle)
}

async function handle (ctx, next) {
  try {
    await next()
  } catch (e) {
    throw new Error(e)    
  }
}