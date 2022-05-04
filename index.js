// Usando modulos nativos:
const path = require("path") // path: permite administrar rutas de archivos
// Usando modulos externos:
const express = require("express")
//Importando router
const users = require("./routes/users")
const port = 4000;
const app = express()

// Middlewares 
// Archivos estáticos

app.use(express.static(path.join(__dirname,"static")))

// Routes
app.use(users) // Usando un router

// 


app.listen(port,()=>{
    console.log("Ejecutando index en http://localhost:"+port)
})
