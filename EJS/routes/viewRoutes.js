const router = require("express").Router(); //Framework to buildbackend applications with node.


router.get('/', (req,res)=>{
    
    res.render('pages/home', {message: "this is an object of data", items: [2,4,6]})
})

router.get('/login', (req,res)=>{
    
    res.render('pages/login')
})

module.exports = router;