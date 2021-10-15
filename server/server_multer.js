'use strict';
const koa = require('koa')
const router = require('koa-router')();
const path = require('path')
const cors = require('koa2-cors')
const multer = require('koa-multer')
const app = new koa()

app.use(cors())
const storage = multer.diskStorage({
    // 存储的位置
    destination: path.join(process.cwd(), "upload"),
    // 文件名
    filename(req, file, cb) {
        const filename = file.originalname.split(".")
        //   利用时间戳来命名接收到的文件
        cb(null, `${Date.now()}.${filename[filename.length - 1]}`)
    }
})
const upload = multer({ storage });


// const upload = multer({ dest: 'uploads/' })



router.post('/formData/uploadFile', upload.single("file"), async ctx => {
    console.log(ctx.req.file)
    // req是multer中间件挂载上去的对象
    ctx.status = 201
    ctx.body = {
        file: ctx.req.file,
        request: ctx.request
    }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000, () => {
    console.log('server is running at:\r\nhttp://localhost:3000')
})