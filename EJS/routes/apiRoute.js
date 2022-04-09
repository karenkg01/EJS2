const router = require("express").Router(); //Framework to buildbackend applications with node.

router.post('/login', (req,res)=>{
    console.log(req.body);
    res.send("login");
})

module.exports = router;
