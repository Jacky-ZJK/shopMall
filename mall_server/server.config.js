const path = require('path')

module.exports = {
  /**
   * 服务器配置
   */
  serverPort: 3000,
  hostname: 'localhost',
  staticDir: path.resolve('www'),
  logpath: path.resolve('log/access.log'),
  /**
   * 跨域配置
   */
  origins: [
    'http://localhost:8080',
    'http://localhost:3000',
    'http://localhost:8081',
  ],

  /**
   * 数据库配置
   */
  dataBase: {
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '578011',
    database: 'shopping_mall'
  },

  /**
   * 'koa-body'配置
   */
  body: {
    multipart: true,
    formidable: {
      uploadDir: path.resolve('uploads'),
      maxFieldsSize: (2 * 1024 * 1024)
    },
  },

  /**
   * 'koa-compress'配置
   */
  compress: {
    filter: function (content_type) {
        return /text/i.test(content_type)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  }

}