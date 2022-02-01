require('dotenv').config();
const moongose = require("mongoose");
const resenasModel = require("./models/ModelReviews");

//configuracion conexion con mongodb

// moongose.connection.on('error', err => {
//     logError(err);
// });
moongose.connect(process.env.uri_mongodb, null, () => { console.log("=> Connect with mongondb") });
// moongose.connect('mongodb://localhost:27017/test', null, () => { console.log("=> Connect with mongondb") });

var InitialReviews = [
    {
        usuario: "mannulus",
        isbn: "000001222",
        estrellas: 0,
        comentario: "no es muy bueno, muy aburrido, perfiero una pelicula"
    },
    {
        usuario: "chaphe",
        isbn: "758001222",
        estrellas: 5,
        comentario: "sin palabras.... excelente obra, me encanta, la leo todo el tiempo"
    },
    {
        usuario: "Mohammed",
        isbn: "031010101010",
        estrellas: 5,
        comentario: "El mejor libro, un crack total"
    },
    {
        usuario: "FelipeCabeza",
        isbn: "031010101010",
        estrellas: 3,
        comentario: "Buen libro, pero me gusta más Mayer Candelo 👎🏾"
    },
    {
        usuario: "GabrielVega",
        isbn: "10010090321",
        estrellas: 4,
        comentario: "Gran libro para aprender a programar, sin embargo me quedó la duda de ¿cuál es la entrada y cuál es la salida?"
    },
    {
        usuario: "FelipeCabeza",
        isbn: "10010090321",
        estrellas: 5,
        comentario: "Obra magnifica, aprendí a hacer el factorial"
    },
    {
        usuario: "MarkSuckerberg",
        isbn: "10010090321",
        estrellas: 5,
        comentario: "Me sirvió para hacer Facebook👍🏻😎📘"
    },
    {
        usuario: "GabrielVega",
        isbn: "123132131321",
        estrellas: 5,
        comentario: "Un clásico de la literatura"
    },
    {
        usuario: "FelipeCabeza",
        isbn: "03213128888",
        estrellas: 5,
        comentario: "Este libro me cambió la vida... sin palabras"
    },
    {
        usuario: "Mohammed",
        isbn: "0321299999",
        estrellas: 3,
        comentario: "No sé qué es docker jaja "
    },
    {
        usuario: "GabrielVega",
        isbn: "0321299999",
        estrellas: 4,
        comentario: "Me sirvió para el trabajo de software :)"
    },
    {
        usuario: "FelipeCabeza",
        isbn: "10010090321",
        estrellas: 4,
        comentario: "Estaba tan bueno que me lo compré otra vez, pero esta vez no me gustó tanto 😕"
    },
    {
        usuario: "MarkSuckerberg",
        isbn: "9789584276971",
        estrellas: 4,
        comentario: "Buen libro"
    }
]
//insertar datos iniciales y crear coleccion
resenasModel.insertMany(InitialReviews).then((res) => {
    console.log("=> Insercion de los datos completa")
    moongose.connection.close();
}).catch((err) => console.log(err));
