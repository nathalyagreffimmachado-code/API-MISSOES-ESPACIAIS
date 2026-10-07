const express = require('express')
const cors = require('cors')
const swaggerUi = require ('swagger-ui-express')
const statusRoutes = require ('./routes/status.routes')
const swaggerSpec = require ('./swagger')
const missoesRoutes = require('./routes/missoes.routes')
const apodRoutes = require('./routes/apod.routes')
const { error } = require('node:console')

const app = express()
app.use(express.json)
app.use(cors())

app.use('/api-docs', statusRoutes)
app.use('/missoe', missoesRoutes)
app.use('/apod', apodRoutes)


app.use((req,res) => {
    res.status(404).json({ erro: 'rota não encontrad'})
    
})

app.use((err,req,res,next) => {
    const status = err.status || err.statusCode || 500
    const mensagem = status === 400 ? 'json invalido' : 'erro interno do servidor'
    res.status(status).json({erro: mensagem})

})
export default app;