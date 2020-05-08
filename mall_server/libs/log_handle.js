const fs = require('fs')
const config = require('../server.config')

module.exports = server => {
    server.use(async (ctx, next) => {
        await fs.appendFile(config.logpath, `[${currentDate()}]  ${ctx.method}  ${ctx.url} \r\n`, err => {
            if(err) {
                throw new Error(err)
            }
        })

        await next()
    })
}

function currentDate() {
    let date = new Date()
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
}