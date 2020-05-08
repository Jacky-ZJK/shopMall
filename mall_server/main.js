const Koa = require('koa')
const body = require('koa-body')
const Router = require('koa-router')
const session = require('koa-session')
const compress = require('koa-compress')
const staticCache = require('koa-static-cache')

const config = require('./server.config')

const db_handle = require('./libs/db_handle')
const err_handle = require('./libs/err_handle')
const log_handle = require('./libs/log_handle')
const crossOrigin_handle = require('./libs/crossOrigin_handle')

const server = new Koa()

/**
 * 错误处理
 */
err_handle(server)

/**
 * 跨域处理
 */
crossOrigin_handle(server, config.origins)

/**
 * 访问日志
 */
log_handle(server)

/**
 * 连接数据库
 */
db_handle(server)

/**
 * gzip压缩
 */
server.use(compress(config.compress))

/**
 * 加载'koa-body'
 */
server.use(body(config.body))

/**
 * 配置路由
 */
let router = Router()
server.use(router.routes())
router.use('/home', require('./routers/home'))
router.use('/detail', require('./routers/detail'))

/**
 * 静态资源配置
 */
server.use(staticCache('./www', {
  gzip: true
}))

/**
 * 服务器启动监听
 */
server.listen(
  config.serverPort,
  config.hostname, 
  () => {
  console.log('server is running')
})