const authRoute=require('./authRoute')
const profileRoute=require('./profileRoute')

const routes=[
    {
        path:'/user',
        handler:authRoute
    },
    {
        path:'/profile',
        handler:profileRoute
    },
    {
        path:'/',
        handler:(req,res)=>{
            res.json({
                message:'Welcome to flutter blog api'
            })
        }
    }
]

module.exports=(app)=>{
    routes.forEach(r=>{
        if(r.path=='/'){
            app.get(r.path,r.handler)
        }else{
            app.use(r.path,r.handler)
        }
    })
}