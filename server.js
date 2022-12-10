import express from 'express'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

app.get('/health', (req, res) => {
    res.send('API is running ...');
})

app.use('/users', userRoutes)

app.listen(PORT, console.log('The Server is up ad running'));