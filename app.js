#! /usr/bin/env node
const koa=require("koa")
const static=require("koa-static")
const router=require("koa-router")()
const path=require("path")

let app=new koa()

app.use(static(path.join(process.cwd(),"./home/")))

app.use(router.routes())
app.use(router.allowedMethods());

router.get("/list",async(ctx)=>{
    ctx.body=[1,2,3]
})

router.get("/my",async(ctx)=>{
    ctx.body=[4,5,6]
})
app.listen(3000,()=>{
    console.log("启动成功1")
})