const express = require("express");
const app = express();
const { engine } = require("express-handlebars");

const PORT = 3000;

//ruta boostrap
app.use('/bootstrap', express.static(__dirname +
    '/node_modules/bootstrap/dist'));
// ruta jquery
app.use('/jquery', express.static(__dirname +
    '/node_modules/jquery/dist'));

app.use("/assets",express.static(__dirname + "/www/assets/" ))    


//midlewares
app.engine("handlebars", engine({
    partialsDir: __dirname + "/views/components/"
}));
app.set("view engine", "handlebars");
app.set("views", "./views");


app.get("/", function (req, res) {
    // Paso 4
    const { producto } = req.params;
    // Paso 5
    res.render("dashboard", {
        productos: [
            "banana",
            "cebollas",
            "lechuga",
            "papas",
            "pimenton",
            "tomate",
            
        ],
        producto,
    });

});
app.listen(PORT, () => {
    console.log("El servidor está inicializado en el puerto " + PORT);
});