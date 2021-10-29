const errorHandle = (error, request, response, next) => {
    console.log("error recibido en el middelware")
    response.status(500).json({
      messaje: error.message
    })
}

module.exports = {
    errorHandle
}