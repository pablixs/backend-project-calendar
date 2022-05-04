const express = require("express")
const path = require("path") // path: permite administrar rutas de archivos
const router = express.Router()

router.get("/",( req,res)=>{
    return res.sendFile(path.join(__dirname,"..","views","index.html"))
})

router.get("/calendar",( req,res)=>{
    return res.sendFile(path.join(__dirname,"..","views","calendar.html"))
})

router.get("/profile",(req,res)=>{
    return res.sendFile(path.join(__dirname,"..","views","profile.html"))
})
router.get("/login",(req,res)=>{
    return res.sendFile(path.join(__dirname,"..","views","login.html"))
})

router.get("/register",(req,res)=>{
    return res.sendFile(path.join(__dirname,"..","views","register.html"))
})

module.exports = router // Exportando el router