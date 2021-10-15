'use strict';
const koa       =       require('koa')
const koaBody   =       require('koa-body')
const router    =       require('koa-router')();
const fs        =       require('fs')
const path      =       require('path')
const cors      =       require('koa2-cors')

const app = new koa()

app.use(koaBody({
    multipart: true,    // 支持文件格式
    formidable: {
        maxFileSize: 200*1024*1024	// 设置上传文件大小最大限制，默认2M
    }
}))

app.use(cors())

router.get('/', async(ctx)=>{
    ctx.body = 'hello'
})
// 上传一个文件
router.post('/ajax/uploadFile', async(ctx)=>{
    // 上传单个文件
    // console.log(ctx.request)
    const { files } = ctx.request;
    const { file } = files // 获取上传文件
    // 这里的file是前端formData文件的key

     // 读取文件的二进制数据
    const fileData = fs.readFileSync(file.path);
    const prefix = path.join(__dirname, `/upload/`)
    const filePath = prefix + file.name
    
    // 创建目录，不然会报错呜呜
    !fs.existsSync(prefix) && fs.mkdirSync(prefix)
    // 写文件

    const writer = fs.createWriteStream(filePath, {
        flags:'w'
    })
    
    writer.write(fileData);

    ctx.status = 201
    ctx.body = {
        file: fileData
    }

})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,()=>{
    console.log('server is running at:\r\nhttp://localhost:3000')
})