const express = require('express');
const tasksRoutes = require('./routes/tasks.routes');
const {errorHandle} = require('./middlewares/error.middleware')

//CORS
const corsMiddleware = require('./cors/index')

const app = express();
app.use(corsMiddleware)


app.use(express.urlencoded({extended: true}))
app.use(tasksRoutes);


//middelware para el manejo de errores
app.use(errorHandle)

module.exports = app;
